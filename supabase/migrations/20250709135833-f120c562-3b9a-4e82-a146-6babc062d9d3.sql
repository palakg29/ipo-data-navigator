
-- Drop existing tables to start fresh
DROP TABLE IF EXISTS user_subscriptions CASCADE;
DROP TABLE IF EXISTS ipos CASCADE;
DROP TABLE IF EXISTS profiles CASCADE;

-- Create profiles table with enhanced structure
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  email TEXT,
  role TEXT DEFAULT 'user' CHECK (role IN ('user', 'admin')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create comprehensive IPOs table
CREATE TABLE public.ipos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_name TEXT NOT NULL,
  company_logo_url TEXT,
  price_min DECIMAL(10,2) NOT NULL,
  price_max DECIMAL(10,2) NOT NULL,
  open_date DATE NOT NULL,
  close_date DATE NOT NULL,
  listing_date DATE,
  issue_size TEXT NOT NULL,
  issue_type TEXT DEFAULT 'Book Built' CHECK (issue_type IN ('Book Built', 'Fixed Price')),
  lot_size INTEGER DEFAULT 1,
  minimum_investment DECIMAL(12,2),
  description TEXT,
  company_details TEXT,
  ipo_price DECIMAL(10,2),
  listing_price DECIMAL(10,2),
  listing_gain_percentage DECIMAL(5,2),
  current_market_price DECIMAL(10,2),
  current_return_percentage DECIMAL(5,2),
  rhp_document_url TEXT,
  drhp_document_url TEXT,
  status TEXT DEFAULT 'Upcoming' CHECK (status IN ('Upcoming', 'Ongoing', 'Listed', 'Closed')),
  total_applications INTEGER DEFAULT 0,
  total_amount_raised DECIMAL(15,2) DEFAULT 0,
  oversubscription_ratio DECIMAL(5,2) DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_by UUID REFERENCES auth.users(id)
);

-- Create user subscriptions table
CREATE TABLE public.user_subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  ipo_id UUID REFERENCES public.ipos(id) ON DELETE CASCADE,
  lot_quantity INTEGER DEFAULT 1,
  bid_price DECIMAL(10,2),
  application_number TEXT,
  application_status TEXT DEFAULT 'Pending' CHECK (application_status IN ('Pending', 'Confirmed', 'Allotted', 'Not Allotted', 'Refunded')),
  subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, ipo_id)
);

-- Create IPO analytics table
CREATE TABLE public.ipo_analytics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  ipo_id UUID REFERENCES public.ipos(id) ON DELETE CASCADE,
  date DATE DEFAULT CURRENT_DATE,
  daily_applications INTEGER DEFAULT 0,
  daily_amount DECIMAL(12,2) DEFAULT 0,
  total_applications INTEGER DEFAULT 0,
  total_amount DECIMAL(15,2) DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create user notifications table
CREATE TABLE public.user_notifications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  ipo_id UUID REFERENCES public.ipos(id) ON DELETE CASCADE,
  notification_type TEXT CHECK (notification_type IN ('ipo_opening', 'ipo_closing', 'listing_date', 'price_update')),
  message TEXT NOT NULL,
  is_read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ipos ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ipo_analytics ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_notifications ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Users can view their own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert their own profile" ON public.profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

-- IPOs policies
CREATE POLICY "Anyone can view IPOs" ON public.ipos
  FOR SELECT TO PUBLIC USING (true);

CREATE POLICY "Admins can manage IPOs" ON public.ipos
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- User subscriptions policies
CREATE POLICY "Users can manage their own subscriptions" ON public.user_subscriptions
  FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all subscriptions" ON public.user_subscriptions
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Analytics policies
CREATE POLICY "Admins can manage analytics" ON public.ipo_analytics
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Notifications policies
CREATE POLICY "Users can manage their own notifications" ON public.user_notifications
  FOR ALL USING (auth.uid() = user_id);

-- Create function to handle new user registration
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, email)
  VALUES (
    NEW.id,
    NEW.raw_user_meta_data->>'full_name',
    NEW.email
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for new user registration
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Create function to update IPO analytics
CREATE OR REPLACE FUNCTION public.update_ipo_analytics()
RETURNS TRIGGER AS $$
BEGIN
  -- Update daily analytics
  INSERT INTO public.ipo_analytics (ipo_id, daily_applications, daily_amount)
  VALUES (NEW.ipo_id, 1, NEW.bid_price * NEW.lot_quantity)
  ON CONFLICT (ipo_id, date) DO UPDATE SET
    daily_applications = ipo_analytics.daily_applications + 1,
    daily_amount = ipo_analytics.daily_amount + (NEW.bid_price * NEW.lot_quantity);
  
  -- Update IPO totals
  UPDATE public.ipos SET
    total_applications = total_applications + 1,
    total_amount_raised = total_amount_raised + (NEW.bid_price * NEW.lot_quantity),
    updated_at = NOW()
  WHERE id = NEW.ipo_id;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for subscription analytics
CREATE TRIGGER on_subscription_created
  AFTER INSERT ON public.user_subscriptions
  FOR EACH ROW EXECUTE FUNCTION public.update_ipo_analytics();

-- Insert sample admin user (you'll need to update this with actual admin user ID)
-- INSERT INTO public.profiles (id, full_name, email, role) 
-- VALUES ('admin-user-id-here', 'Admin User', 'admin@example.com', 'admin');

-- Insert sample IPO data
INSERT INTO public.ipos (
  company_name, price_min, price_max, open_date, close_date, 
  issue_size, description, company_details, lot_size, minimum_investment
) VALUES 
(
  'TechCorp Industries', 150.00, 180.00, '2024-01-15', '2024-01-18',
  '2500 Cr.', 'Leading technology company specializing in AI and cloud solutions',
  'TechCorp Industries is a pioneering technology company with over 15 years of experience in developing cutting-edge AI solutions and cloud infrastructure services.',
  50, 7500.00
),
(
  'GreenEnergy Ltd', 95.00, 110.00, '2024-01-20', '2024-01-23',
  '1800 Cr.', 'Renewable energy company focused on solar and wind power',
  'GreenEnergy Ltd is at the forefront of the renewable energy revolution, developing sustainable power solutions for a cleaner future.',
  100, 9500.00
),
(
  'FinTech Solutions', 200.00, 250.00, '2024-01-25', '2024-01-28',
  '3200 Cr.', 'Digital banking and financial services platform',
  'FinTech Solutions provides innovative digital banking services and financial technology solutions to millions of customers worldwide.',
  25, 5000.00
);

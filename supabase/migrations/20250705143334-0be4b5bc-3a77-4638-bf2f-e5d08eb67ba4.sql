
-- Create profiles table for additional user data
CREATE TABLE public.profiles (
  id UUID NOT NULL REFERENCES auth.users ON DELETE CASCADE,
  full_name TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  PRIMARY KEY (id)
);

-- Create IPOs table
CREATE TABLE public.ipos (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  company_name TEXT NOT NULL,
  price_min DECIMAL(10,2) NOT NULL,
  price_max DECIMAL(10,2) NOT NULL,
  open_date DATE NOT NULL,
  close_date DATE NOT NULL,
  issue_size TEXT NOT NULL,
  issue_type TEXT NOT NULL DEFAULT 'Book Built',
  listing_date DATE,
  status TEXT NOT NULL DEFAULT 'Upcoming' CHECK (status IN ('Upcoming', 'Ongoing', 'Listed', 'Closed')),
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create user IPO subscriptions table
CREATE TABLE public.user_subscriptions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users ON DELETE CASCADE,
  ipo_id UUID NOT NULL REFERENCES public.ipos ON DELETE CASCADE,
  subscribed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(user_id, ipo_id)
);

-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ipos ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_subscriptions ENABLE ROW LEVEL SECURITY;

-- RLS Policies for profiles
CREATE POLICY "Users can view their own profile" 
  ON public.profiles 
  FOR SELECT 
  USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile" 
  ON public.profiles 
  FOR UPDATE 
  USING (auth.uid() = id);

CREATE POLICY "Users can insert their own profile" 
  ON public.profiles 
  FOR INSERT 
  WITH CHECK (auth.uid() = id);

-- RLS Policies for IPOs (public read, admin write)
CREATE POLICY "Anyone can view IPOs" 
  ON public.ipos 
  FOR SELECT 
  TO public;

CREATE POLICY "Authenticated users can manage IPOs" 
  ON public.ipos 
  FOR ALL 
  TO authenticated 
  USING (true);

-- RLS Policies for user subscriptions
CREATE POLICY "Users can view their own subscriptions" 
  ON public.user_subscriptions 
  FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can manage their own subscriptions" 
  ON public.user_subscriptions 
  FOR ALL 
  USING (auth.uid() = user_id);

-- Function to handle new user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = ''
AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name)
  VALUES (new.id, new.raw_user_meta_data ->> 'full_name');
  RETURN new;
END;
$$;

-- Trigger to create profile on user signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

-- Insert some sample IPO data
INSERT INTO public.ipos (company_name, price_min, price_max, open_date, close_date, issue_size, status, description, listing_date) VALUES
('Adani Power Ltd', 329.00, 336.00, '2024-01-15', '2024-01-17', '45530.15 Cr', 'Listed', 'Leading power generation company in India', '2024-01-20'),
('VBL Limited', 229.00, 236.00, '2024-02-01', '2024-02-03', '1330.15 Cr', 'Upcoming', 'Fast-moving consumer goods company', '2024-02-10'),
('Tata Motors Ltd', 1240.00, 1260.00, '2024-01-20', '2024-01-22', '1340.15 Cr', 'Listed', 'Leading automotive manufacturer', '2024-01-25'),
('HDFC Bank Ltd', 1200.00, 1244.00, '2024-03-01', '2024-03-03', '830.15 Cr', 'Upcoming', 'Premier banking institution', '2024-03-10'),
('Reliance Industries', 2800.00, 2900.00, '2024-01-25', '2024-01-27', '820.15 Cr', 'Ongoing', 'Diversified conglomerate', '2024-02-01');

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      ipo_analytics: {
        Row: {
          created_at: string | null
          daily_amount: number | null
          daily_applications: number | null
          date: string | null
          id: string
          ipo_id: string | null
          total_amount: number | null
          total_applications: number | null
        }
        Insert: {
          created_at?: string | null
          daily_amount?: number | null
          daily_applications?: number | null
          date?: string | null
          id?: string
          ipo_id?: string | null
          total_amount?: number | null
          total_applications?: number | null
        }
        Update: {
          created_at?: string | null
          daily_amount?: number | null
          daily_applications?: number | null
          date?: string | null
          id?: string
          ipo_id?: string | null
          total_amount?: number | null
          total_applications?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "ipo_analytics_ipo_id_fkey"
            columns: ["ipo_id"]
            isOneToOne: false
            referencedRelation: "ipos"
            referencedColumns: ["id"]
          },
        ]
      }
      ipos: {
        Row: {
          close_date: string
          company_details: string | null
          company_logo_url: string | null
          company_name: string
          created_at: string | null
          created_by: string | null
          current_market_price: number | null
          current_return_percentage: number | null
          description: string | null
          drhp_document_url: string | null
          id: string
          ipo_price: number | null
          issue_size: string
          issue_type: string | null
          listing_date: string | null
          listing_gain_percentage: number | null
          listing_price: number | null
          lot_size: number | null
          minimum_investment: number | null
          open_date: string
          oversubscription_ratio: number | null
          price_max: number
          price_min: number
          rhp_document_url: string | null
          status: string | null
          total_amount_raised: number | null
          total_applications: number | null
          updated_at: string | null
        }
        Insert: {
          close_date: string
          company_details?: string | null
          company_logo_url?: string | null
          company_name: string
          created_at?: string | null
          created_by?: string | null
          current_market_price?: number | null
          current_return_percentage?: number | null
          description?: string | null
          drhp_document_url?: string | null
          id?: string
          ipo_price?: number | null
          issue_size: string
          issue_type?: string | null
          listing_date?: string | null
          listing_gain_percentage?: number | null
          listing_price?: number | null
          lot_size?: number | null
          minimum_investment?: number | null
          open_date: string
          oversubscription_ratio?: number | null
          price_max: number
          price_min: number
          rhp_document_url?: string | null
          status?: string | null
          total_amount_raised?: number | null
          total_applications?: number | null
          updated_at?: string | null
        }
        Update: {
          close_date?: string
          company_details?: string | null
          company_logo_url?: string | null
          company_name?: string
          created_at?: string | null
          created_by?: string | null
          current_market_price?: number | null
          current_return_percentage?: number | null
          description?: string | null
          drhp_document_url?: string | null
          id?: string
          ipo_price?: number | null
          issue_size?: string
          issue_type?: string | null
          listing_date?: string | null
          listing_gain_percentage?: number | null
          listing_price?: number | null
          lot_size?: number | null
          minimum_investment?: number | null
          open_date?: string
          oversubscription_ratio?: number | null
          price_max?: number
          price_min?: number
          rhp_document_url?: string | null
          status?: string | null
          total_amount_raised?: number | null
          total_applications?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string | null
          email: string | null
          full_name: string | null
          id: string
          role: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          email?: string | null
          full_name?: string | null
          id: string
          role?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string | null
          full_name?: string | null
          id?: string
          role?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      user_notifications: {
        Row: {
          created_at: string | null
          id: string
          ipo_id: string | null
          is_read: boolean | null
          message: string
          notification_type: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          ipo_id?: string | null
          is_read?: boolean | null
          message: string
          notification_type?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          ipo_id?: string | null
          is_read?: boolean | null
          message?: string
          notification_type?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_notifications_ipo_id_fkey"
            columns: ["ipo_id"]
            isOneToOne: false
            referencedRelation: "ipos"
            referencedColumns: ["id"]
          },
        ]
      }
      user_subscriptions: {
        Row: {
          application_number: string | null
          application_status: string | null
          bid_price: number | null
          id: string
          ipo_id: string | null
          lot_quantity: number | null
          subscribed_at: string | null
          user_id: string | null
        }
        Insert: {
          application_number?: string | null
          application_status?: string | null
          bid_price?: number | null
          id?: string
          ipo_id?: string | null
          lot_quantity?: number | null
          subscribed_at?: string | null
          user_id?: string | null
        }
        Update: {
          application_number?: string | null
          application_status?: string | null
          bid_price?: number | null
          id?: string
          ipo_id?: string | null
          lot_quantity?: number | null
          subscribed_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_subscriptions_ipo_id_fkey"
            columns: ["ipo_id"]
            isOneToOne: false
            referencedRelation: "ipos"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const

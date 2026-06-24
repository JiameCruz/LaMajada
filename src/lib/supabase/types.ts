export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      admins: {
        Row: {
          created_at: string;
          email: string;
          id: string;
          nombre: string;
        };
        Insert: {
          created_at?: string;
          email: string;
          id: string;
          nombre: string;
        };
        Update: {
          created_at?: string;
          email?: string;
          id?: string;
          nombre?: string;
        };
        Relationships: [];
      };
      menu_items: {
        Row: {
          activo: boolean;
          alt_text: string | null;
          categoria: string;
          created_at: string;
          descripcion: string;
          id: string;
          imagen: string;
          nombre: string;
          orden: number;
          precio: number;
          updated_at: string;
        };
        Insert: {
          activo?: boolean;
          alt_text?: string | null;
          categoria: string;
          created_at?: string;
          descripcion: string;
          id?: string;
          imagen: string;
          nombre: string;
          orden?: number;
          precio: number;
          updated_at?: string;
        };
        Update: {
          activo?: boolean;
          alt_text?: string | null;
          categoria?: string;
          created_at?: string;
          descripcion?: string;
          id?: string;
          imagen?: string;
          nombre?: string;
          orden?: number;
          precio?: number;
          updated_at?: string;
        };
        Relationships: [];
      };
      promociones: {
        Row: {
          activo: boolean;
          alt_text: string | null;
          created_at: string;
          descripcion: string;
          id: string;
          imagen: string;
          orden: number;
          updated_at: string;
        };
        Insert: {
          activo?: boolean;
          alt_text?: string | null;
          created_at?: string;
          descripcion: string;
          id?: string;
          imagen: string;
          orden?: number;
          updated_at?: string;
        };
        Update: {
          activo?: boolean;
          alt_text?: string | null;
          created_at?: string;
          descripcion?: string;
          id?: string;
          imagen?: string;
          orden?: number;
          updated_at?: string;
        };
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: {
      is_admin: { Args: Record<string, never>; Returns: boolean };
    };
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};

export type MenuItemRow = Database['public']['Tables']['menu_items']['Row'];
export type PromoRow = Database['public']['Tables']['promociones']['Row'];
export type AdminRow = Database['public']['Tables']['admins']['Row'];

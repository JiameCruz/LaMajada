export function getSupabaseUrl(): string {
  return (
    import.meta.env.PUBLIC_SUPABASE_URL ??
    import.meta.env.SUPABASE_URL ??
    ''
  );
}

export function getSupabaseAnonKey(): string {
  return (
    import.meta.env.PUBLIC_SUPABASE_ANON_KEY ??
    import.meta.env.SUPABASE_KEY ??
    ''
  );
}

function readEnv(publicName: string, fallbackName: string): string {
  if (typeof process !== 'undefined' && process.env) {
    const fromProcess = process.env[publicName] ?? process.env[fallbackName];
    if (fromProcess) return fromProcess;
  }

  return import.meta.env[publicName] ?? import.meta.env[fallbackName] ?? '';
}

export function getSupabaseUrl(): string {
  return readEnv('PUBLIC_SUPABASE_URL', 'SUPABASE_URL');
}

export function getSupabaseAnonKey(): string {
  return readEnv('PUBLIC_SUPABASE_ANON_KEY', 'SUPABASE_KEY');
}

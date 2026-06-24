import { createClient } from '@supabase/supabase-js';

const url =
  import.meta.env.PUBLIC_SUPABASE_URL ?? import.meta.env.SUPABASE_URL ?? '';
const key =
  import.meta.env.PUBLIC_SUPABASE_ANON_KEY ?? import.meta.env.SUPABASE_KEY ?? '';

if (!url || !key) {
  throw new Error(
    'Missing Supabase env vars: set PUBLIC_SUPABASE_URL and PUBLIC_SUPABASE_ANON_KEY',
  );
}

export const supabase = createClient(url, key);

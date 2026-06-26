import { createServerClient, type CookieOptions } from '@supabase/ssr';
import type { AstroCookies } from 'astro';
import type { Database } from './types';
import { getSupabaseAnonKey, getSupabaseUrl } from './env';

export function createSupabaseServerClient(cookies: AstroCookies) {
  const url = getSupabaseUrl();
  const key = getSupabaseAnonKey();
  return createServerClient<Database>(url, key, {
    cookies: {
      get(key: string) {
        return cookies.get(key)?.value;
      },
      set(key: string, value: string, options: CookieOptions) {
        cookies.set(key, value, options);
      },
      remove(key: string, options: CookieOptions) {
        cookies.delete(key, options);
      },
    },
  });
}

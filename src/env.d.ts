/// <reference types="astro/client" />

import type { SupabaseClient } from '@supabase/supabase-js';
import type { Database } from './lib/supabase/types';

declare namespace App {
  interface Locals {
    supabase: SupabaseClient<Database>;
  }
}

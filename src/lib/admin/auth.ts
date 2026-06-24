import type { SupabaseClient } from '@supabase/supabase-js';
import type { Database } from '../supabase/types';

export async function getAdminSession(supabase: SupabaseClient<Database>) {
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    return { user: null, admin: null };
  }

  const { data: admin, error: adminError } = await supabase
    .from('admins')
    .select('*')
    .eq('id', user.id)
    .maybeSingle();

  if (adminError || !admin) {
    return { user, admin: null };
  }

  return { user, admin };
}

export async function requireAdmin(supabase: SupabaseClient<Database>) {
  const session = await getAdminSession(supabase);
  return session.admin ? session : null;
}

import { defineMiddleware } from 'astro:middleware';
import { createSupabaseServerClient } from './lib/supabase/server';

const PUBLIC_ADMIN_PATHS = new Set(['/admin/login']);

export const onRequest = defineMiddleware(async (context, next) => {
  const supabase = createSupabaseServerClient(context.cookies);
  context.locals.supabase = supabase;

  const pathname = context.url.pathname;

  if (!pathname.startsWith('/admin')) {
    return next();
  }

  if (PUBLIC_ADMIN_PATHS.has(pathname)) {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (user && pathname === '/admin/login') {
      return context.redirect('/admin');
    }

    return next();
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return context.redirect('/admin/login');
  }

  const { data: admin } = await supabase
    .from('admins')
    .select('id')
    .eq('id', user.id)
    .maybeSingle();

  if (!admin) {
    await supabase.auth.signOut();
    return context.redirect('/admin/login?error=no-admin');
  }

  return next();
});

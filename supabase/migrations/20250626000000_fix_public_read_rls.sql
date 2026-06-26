-- Fix public read: anon cannot EXECUTE is_admin().
-- Public visitors only need rows where activo = true.

DROP POLICY IF EXISTS menu_items_public_read ON public.menu_items;
DROP POLICY IF EXISTS promociones_public_read ON public.promociones;

CREATE POLICY menu_items_public_read ON public.menu_items
  FOR SELECT
  TO anon, authenticated
  USING (activo = true);

CREATE POLICY menu_items_admin_read ON public.menu_items
  FOR SELECT
  TO authenticated
  USING (public.is_admin());

CREATE POLICY promociones_public_read ON public.promociones
  FOR SELECT
  TO anon, authenticated
  USING (activo = true);

CREATE POLICY promociones_admin_read ON public.promociones
  FOR SELECT
  TO authenticated
  USING (public.is_admin());

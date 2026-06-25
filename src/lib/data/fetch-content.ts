import type { SupabaseClient } from '@supabase/supabase-js';
import { bebidas, platos, promociones as staticPromos } from '../../data/menu';
import { resolveImageSrc } from '../images';
import type { Database } from '../supabase/types';
import type { MenuItemDisplay, PromoDisplay } from '../../types/content';

function mapMenuItem(row: Database['public']['Tables']['menu_items']['Row']): MenuItemDisplay {
  return {
    id: row.id,
    name: row.nombre,
    description: row.descripcion,
    image: resolveImageSrc(row.imagen),
    alt: row.alt_text ?? row.nombre,
    price: Number(row.precio),
  };
}

function mapPromo(row: Database['public']['Tables']['promociones']['Row']): PromoDisplay {
  return {
    id: row.id,
    image: resolveImageSrc(row.imagen),
    description: row.descripcion,
    alt: row.alt_text ?? 'Promoción de La Majada',
  };
}

function staticFallback() {
  const toMenu = (item: (typeof platos)[number], price: number): MenuItemDisplay => ({
    name: item.name,
    description: item.description,
    image: resolveImageSrc(item.image),
    alt: item.alt,
    price,
  });

  return {
    platos: platos.map((item, i) => toMenu(item, [289, 249, 189, 169, 89, 69][i] ?? 99)),
    bebidas: bebidas.map((item, i) => toMenu(item, [45, 85][i] ?? 45)),
    promociones: staticPromos.map((promo) => ({
      image: resolveImageSrc(promo.image),
      description: `${promo.schedule} — ${promo.dealHighlight ? `${promo.dealHighlight} ` : ''}${promo.title}. ${promo.note}`,
      alt: promo.alt,
    })),
  };
}

export async function fetchPublicContent(
  supabase: SupabaseClient<Database>,
): Promise<{
  platos: MenuItemDisplay[];
  bebidas: MenuItemDisplay[];
  promociones: PromoDisplay[];
}> {
  const [menuResult, promosResult] = await Promise.all([
    supabase
      .from('menu_items')
      .select('*')
      .eq('activo', true)
      .order('orden', { ascending: true }),
    supabase
      .from('promociones')
      .select('*')
      .eq('activo', true)
      .order('orden', { ascending: true }),
  ]);

  if (menuResult.error || promosResult.error) {
    console.error('Supabase fetch error:', menuResult.error ?? promosResult.error);
    if (import.meta.env.DEV) {
      return staticFallback();
    }
    return { platos: [], bebidas: [], promociones: [] };
  }

  const menuItems = menuResult.data ?? [];
  const promos = promosResult.data ?? [];

  if (menuItems.length === 0 && promos.length === 0 && import.meta.env.DEV) {
    return staticFallback();
  }

  return {
    platos: menuItems.filter((item) => item.categoria === 'platos').map(mapMenuItem),
    bebidas: menuItems.filter((item) => item.categoria === 'bebidas').map(mapMenuItem),
    promociones: promos.map(mapPromo),
  };
}

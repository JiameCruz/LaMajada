import type { SupabaseClient } from '@supabase/supabase-js';
import type { Database } from '../supabase/types';

export async function uploadImage(
  supabase: SupabaseClient<Database>,
  bucket: 'menu-images' | 'promo-images',
  file: File,
): Promise<{ url: string | null; error: string | null }> {
  const extension = file.name.split('.').pop()?.toLowerCase() ?? 'jpg';
  const fileName = `${crypto.randomUUID()}.${extension}`;

  const { error } = await supabase.storage.from(bucket).upload(fileName, file, {
    cacheControl: '3600',
    upsert: false,
  });

  if (error) {
    return { url: null, error: error.message };
  }

  const {
    data: { publicUrl },
  } = supabase.storage.from(bucket).getPublicUrl(fileName);

  return { url: publicUrl, error: null };
}

export function formatPrice(value: number): string {
  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(value);
}

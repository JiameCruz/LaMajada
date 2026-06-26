// @ts-check
import { defineConfig, envField } from 'astro/config';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  env: {
    schema: {
      PUBLIC_SUPABASE_URL: envField.string({
        context: 'server',
        access: 'public',
      }),
      PUBLIC_SUPABASE_ANON_KEY: envField.string({
        context: 'server',
        access: 'public',
      }),
    },
  },
});

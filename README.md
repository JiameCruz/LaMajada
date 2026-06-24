# Astro la Majada

Sitio de **La Majada** recreado con [Astro](https://astro.build), con menú y promociones dinámicos desde [Supabase](https://supabase.com).

## Requisitos

- Node.js >= 22.12
- pnpm
- Proyecto Supabase configurado

## Imágenes

Copia la carpeta `Image/` del sitio original a `public/Image/`:

```powershell
Copy-Item -Recurse "..\Page La Majada\Image" ".\public\Image"
```

## Variables de entorno

Crea `.env.local` en la raíz del proyecto:

```env
PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
PUBLIC_SUPABASE_ANON_KEY=tu-anon-key
```

## Desarrollo

```bash
pnpm install
pnpm dev
```

- Sitio público: `http://127.0.0.1:4321/`
- Panel admin: `http://127.0.0.1:4321/admin/login`

## Build

El proyecto usa renderizado en servidor con el adaptador de Vercel (`@astrojs/vercel`):

```bash
pnpm build
```

## Despliegue en Vercel

1. Sube el repositorio a GitHub (o GitLab/Bitbucket).
2. En [vercel.com/new](https://vercel.com/new), importa el repositorio.
3. Si el repo incluye más carpetas, configura **Root Directory** como `Astro la Majada`.
4. Framework: Astro (detectado automáticamente). Build: `pnpm build`. Install: `pnpm install`.
5. En **Settings → Environment Variables**, añade:
   - `PUBLIC_SUPABASE_URL`
   - `PUBLIC_SUPABASE_ANON_KEY`
6. Despliega.

También puedes desplegar desde la CLI:

```bash
pnpm add -g vercel
vercel
```

Copia `.env.example` a `.env.local` para desarrollo local. En Vercel, usa el panel de variables de entorno (no subas `.env.local` al repo).

### Supabase en producción

En el dashboard de Supabase → **Authentication** → **URL Configuration**, añade la URL de Vercel (p. ej. `https://tu-proyecto.vercel.app`) en **Site URL** y **Redirect URLs** para que el login del admin funcione correctamente.

## Panel de administración

Rutas:

| Ruta | Descripción |
|------|-------------|
| `/admin/login` | Inicio de sesión |
| `/admin` | Dashboard |
| `/admin/menu` | CRUD de platillos y bebidas |
| `/admin/promociones` | CRUD de promociones |

### Crear el primer administrador

1. En el [Dashboard de Supabase](https://supabase.com/dashboard) → **Authentication** → **Users**, crea un usuario con email y contraseña.
2. Inicia sesión en `/admin/login` con esas credenciales.
3. Si aún no hay admins registrados, el primer usuario autenticado se registrará automáticamente como administrador.

Los administradores posteriores deben existir en `auth.users` y añadirse manualmente a la tabla `admins`.

## Base de datos

Tablas en Supabase:

- `admins` — perfil del admin (id, nombre, email). La contraseña la gestiona Supabase Auth.
- `menu_items` — carta (nombre, imagen, descripción, precio, categoría `platos`/`bebidas`).
- `promociones` — ofertas (imagen, descripción).

Buckets de Storage: `menu-images`, `promo-images` (subida desde el panel admin).

## Estructura

```
src/
  components/       # Header, Hero, Menu, Promos, etc.
  data/             # Datos estáticos de respaldo (dev)
  layouts/          # BaseLayout, AdminLayout
  lib/
    admin/          # Auth y subida de imágenes
    data/           # fetchPublicContent
    supabase/       # Clientes server/browser
  pages/
    admin/          # Panel CRUD
    api/admin/      # Logout
  styles/           # CSS del sitio y admin
public/
  Image/            # Fotos del restaurante
  js/               # Scroll del header y mapa embebido
```

## Mapa (opcional)

Para usar la API de Google Maps con clave propia, define en el HTML:

```html
<script>window.LA_MAJADA_MAPS_KEY = 'tu-clave';</script>
```

Sin clave, se usa el embed público de Google Maps.

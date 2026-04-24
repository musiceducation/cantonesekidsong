/**
 * Vite `base` can be `/`, `./`, or `/repo/`. HashRouter needs a stable basename.
 * `./` from `vite build --base ./` is not valid for RR; treat as root.
 * React Router expects basename *without* a trailing `/` (e.g. `/repo` not `/repo/`)
 * or routing can fail to match → blank page on GitHub Pages.
 */
export function getRouterBasename() {
  const b = import.meta.env.BASE_URL
  if (b === './' || b === '') return '/'
  const trimmed = b.replace(/\/$/, '')
  return trimmed || '/'
}

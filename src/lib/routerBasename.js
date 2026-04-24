/**
 * Vite `base` can be `/`, `./`, or `/-repo-/`. HashRouter needs a stable basename.
 * `./` from `vite build --base ./` is not valid for RR; treat as root.
 */
export function getRouterBasename() {
  const b = import.meta.env.BASE_URL
  if (b === './' || b === '') return '/'
  return b
}

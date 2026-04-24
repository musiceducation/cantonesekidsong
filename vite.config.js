import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// GitHub project page: https://<user>.github.io/<repo>/
// A relative base ("./") often breaks: visiting .../repo (no trailing slash) resolves
// ./assets/... to the site root, not the repo — JS never loads. Production must use the repo path.
const GH_PAGES_BASE = '/-Users-kenneth-Desktop-/'

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? GH_PAGES_BASE : '/',
  plugins: [react(), tailwindcss()],
}))

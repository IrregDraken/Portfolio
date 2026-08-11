import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Vercel serves the site at the root, so the base path is always '/'.
// (If deploying to GitHub Pages at a subpath instead, set base to the repo
// name, e.g. '/Portfolio/', before building.)
export default defineConfig({
  base: '/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})
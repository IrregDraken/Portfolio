import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Base path must match the GitHub Pages deployment location.
// Repo IrregDraken/Portfolio -> site is served at https://irregdraken.github.io/Portfolio/
const base =
  typeof process !== 'undefined' &&
  process.env.NODE_ENV === 'production' &&
  process.env.CI
    ? process.env.VITE_BASE_PATH || '/Portfolio/'
    : '/'

export default defineConfig({
  base,
  plugins: [
    react(),
    tailwindcss(),
  ],
})
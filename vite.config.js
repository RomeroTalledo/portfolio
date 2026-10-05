import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// base: '/portfolio/' porque el sitio se publica en
// https://romerotalledo.github.io/portfolio/
export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Served from the custom domain root (https://irishtools.ie/).
  base: '/',
  plugins: [react()],
})

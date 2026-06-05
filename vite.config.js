import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Served from https://JimKidd92.github.io/irish-tools/ — assets need this base.
  // Change to '/' if you move to a custom domain (e.g. irishtools.ie) at the root.
  base: '/irish-tools/',
  plugins: [react()],
})

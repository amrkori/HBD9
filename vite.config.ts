
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/why-i-love-you/',  // اسم الريبو
  plugins: [react()],
})

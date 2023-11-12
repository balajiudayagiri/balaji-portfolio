import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/balaji-portfolio/',
  build: {
    outDir: 'dist',  // Output directory for built files
  },
  publicDir: 'public',
})

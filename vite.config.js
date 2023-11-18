// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ViteSSR from 'vite-plugin-ssr/plugin';

export default defineConfig({
  plugins: [react(), ViteSSR()],
  build: {
    outDir: 'dist',
  },
  publicDir: 'public',
  ssr: {
    external: ['react', 'react-dom'],
  },
});

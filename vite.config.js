import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Set the base path to your GitHub repository name
export default defineConfig({
  base: '/balaji-portfolio/', // replace with your repository name
  plugins: [react()],
  build: {
    outDir: 'dist',  // Output directory for built files
  },
  publicDir: 'public',
});

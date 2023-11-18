import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import reactRefresh from "@vitejs/plugin-react-refresh";
import reactJsx from "vite-react-jsx";
import ViteSSR from 'vite-plugin-ssr/plugin';

// Set the base path to your GitHub repository name
export default defineConfig({
  base: "/balaji-portfolio/", // replace with your repository name
  plugins: [react(), reactRefresh(), reactJsx(), ViteSSR()],
  build: {
    outDir: "dist", // Output directory for built files
  },
  publicDir: "public",
});

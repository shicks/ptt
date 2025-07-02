import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  // Configure for GitHub Pages deployment
  base: '/ptt/', // Replace 'ptt' with your repository name
});

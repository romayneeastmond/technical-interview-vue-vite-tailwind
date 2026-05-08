import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  // Base directory is needed for correct path resolution if not running from root
  root: './',
});
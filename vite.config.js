// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/UI-HW2/', // Set the base path for GitHub Pages
  plugins: [react()] // ← this is missing in your current file
});

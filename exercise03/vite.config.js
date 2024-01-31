import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  // base: '/likelion-FEQA/',
  plugins: [react(), svgr()],
  server: {
    host: 'localhost', // default : localhost
    port: 3000, // default : 5173
    open: true, // default : false
  },
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
  css: {
    devSourcemap: true,
    modules: {
      generateScopedName: '[name]__[local]--[hash:base64:5]',
    },
  },
});

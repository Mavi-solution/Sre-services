import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite exposes VITE_-prefixed vars from .env automatically via import.meta.env.
// NOTE: never `define` secrets here — anything injected that way is baked into
// the shipped client bundle. Server-side keys belong in mavi-backend/.env.
export default defineConfig({
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
  build: {
    // Content-hashed filenames let Vercel serve these immutable + long-cached.
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return;
          if (id.includes('react-router')) return 'router';
          if (id.includes('/react/') || id.includes('react-dom')) return 'react';
          if (id.includes('motion')) return 'motion';
          if (id.includes('lucide-react')) return 'icons';
        },
      },
    },
  },
});

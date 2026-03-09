import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    reportCompressedSize: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return;

          if (id.includes('react') || id.includes('scheduler') || id.includes('react-router')) {
            return 'vendor-react';
          }

          if (id.includes('framer-motion')) {
            return 'vendor-framer';
          }

          if (id.includes('lucide-react')) {
            return 'vendor-lucide';
          }
        },
      },
    },
  },
});

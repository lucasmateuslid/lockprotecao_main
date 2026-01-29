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
        manualChunks: {
          // Vendor chunks
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-framer': ['framer-motion'],
          'vendor-lucide': ['lucide-react'],
          // Pages chunks (lazy loaded)
          'page-quote': ['./src/pages/Quote.tsx'],
          'page-contact': ['./src/pages/Contact.tsx'],
          'page-apps': ['./src/pages/Apps.tsx'],
          'page-about': ['./src/pages/About.tsx'],
          // Common components
          'components-common': [
            './src/components/Header.tsx',
            './src/components/Footer.tsx',
            './src/components/ScrollToTop.tsx',
            './src/components/FloatingCTA.tsx',
          ],
        },
      },
    },
  },
});

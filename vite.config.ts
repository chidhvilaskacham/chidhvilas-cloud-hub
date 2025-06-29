
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { componentTagger } from 'lovable-tagger'

export default defineConfig({
  base: '/chidhvilas-cloud-hub/',  // Must match your repository name exactly
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  server: {
    host: '::',
    port: 8080,
  },
  plugins: [
    react(),
    componentTagger(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})

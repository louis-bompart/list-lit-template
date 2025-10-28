import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/lit-template-list-demo/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true
  }
})
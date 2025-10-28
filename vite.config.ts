import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/list-lit-template/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true
  }
})
import { defineConfig, mergeConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';
import ElementPlus from 'unplugin-element-plus/vite'

export default defineConfig({
  plugins: [vue(), ElementPlus()],
  build: {
    assetsInlineLimit: Infinity,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    host: "0.0.0.0",
    port: 8000,
  }
})

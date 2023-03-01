import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import webfontDownload from 'vite-plugin-webfont-dl';
import path from 'path'

export default defineConfig({
  plugins: [vue(),webfontDownload(),],
  server:{
    hmr: { overlay: false },
    watch:{
      usePolling: false,

    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './app'),
    },
  }
})
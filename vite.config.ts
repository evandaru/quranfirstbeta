import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/api': {
        target: 'https://script.google.com/macros/s/AKfycbzqW-YpwEcTSS8UI2Ge11XkZXv57KTyu45uDw9nLGbh7jBNPFnCqoGkSxYOXx25HsuedA/exec?',
        changeOrigin: true,
        headers: {
          Referer: 'http://localhost:5173',
          "Access-Control-Allow-Origin": "*"
        }
      }
    },
  }
})

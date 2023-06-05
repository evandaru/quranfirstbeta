import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/api': {
        target: '',
        changeOrigin: true,
        headers: {
          // Referer: 'http://localhost:5173',
          "Access-Control-Allow-Origin": "*"
        }
      }
    },
  }
})

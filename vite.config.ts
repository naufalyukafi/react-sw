import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA, } from 'vite-plugin-pwa'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      workbox: {
        globPatterns: ["**/*.{js,ts,tsx,css,html,ico,png,svg}"],
        cacheId: 'cache-v3',
        skipWaiting: true,
        clientsClaim: true,
        navigateFallback: '/index.html',
        runtimeCaching: [
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
            handler: 'CacheFirst',
            options: {
              expiration: {
                maxEntries: 10,
              },
              cacheName: 'images',
            }
          },
        ],
      }
    })
  ],
})

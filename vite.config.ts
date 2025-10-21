import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({ 
  plugins: [react(),
     VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'CSLeague App',
        short_name: 'CSLeague',
        start_url: '.',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#000000',
        icons: [
          {
            src: 'icons/CSLeague_icon.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icons/CSLeague_icon.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
})

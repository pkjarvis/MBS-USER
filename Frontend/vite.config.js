import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    port: parseInt(process.env.PORT) || 3000 // change here
  },
  build: {
    outDir: 'build', // tells vite to output to /build
  },
})

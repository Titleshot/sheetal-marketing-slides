import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages project site: https://titleshot.github.io/sheetal-marketing-slides/
export default defineConfig({
  plugins: [react()],
  base: '/sheetal-marketing-slides/',
})

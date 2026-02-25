import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/aquarelas-dos-convidados/', // 👈 ESSA LINHA É OBRIGATÓRIA
  esbuild: {
    drop: ['console', 'debugger'],
  },
})
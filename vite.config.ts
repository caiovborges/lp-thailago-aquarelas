import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/lp-thailago/', // 👈 ESSA LINHA É OBRIGATÓRIA E DEVE SER O NOME DO SEU REPOSITORIO
  esbuild: {
    drop: ['console', 'debugger'],
  },
})
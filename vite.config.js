import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'/star-war-planets/',
  // server: {
  //   proxy: {
  //     '/api': 'https://swapi.dev',
  //   },
  // },
})


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/portfolio/',  // <-- use all lowercase if your repo name is lowercase
  plugins: [react()],
});

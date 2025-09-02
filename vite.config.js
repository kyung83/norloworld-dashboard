import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: "/norloworld-dashboard/", // <-- Make sure this matches your repo name exactly
})


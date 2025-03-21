import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/HW39-2-FullStack/", //тут менять имя реп
  plugins: [react()],
});

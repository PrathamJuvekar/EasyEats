import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: 'https://prathamjuvekar.github.io/EasyEats/', // ✅ This is the fix
  plugins: [react()],
});

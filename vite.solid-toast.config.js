import { defineConfig } from 'vite';
import { resolve } from 'path';
import solid from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solid()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/solid-toast/index.jsx'),
      name: 'SolidToast',
      fileName: () => 'solid-toast.js',
      formats: ['es'],
    },
    outDir: 'dist',
    emptyOutDir: false,
  },
});

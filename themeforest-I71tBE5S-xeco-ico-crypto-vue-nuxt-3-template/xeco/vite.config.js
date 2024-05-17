import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      // '/assets': fileURLToPath(new URL('../public/assets', import.meta.url))
    }
  }
})

// import { fileURLToPath, URL } from 'url';
// import path from 'path';
// import { defineConfig } from 'vite';
// import vue from '@vitejs/plugin-vue';

// const __dirname = fileURLToPath(new URL('.', import.meta.url));

// export default defineConfig({
//   plugins: [vue()],
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, 'src'), // Alias for 'src' directory
//       '/@assets/': path.resolve(__dirname, 'public/assets') // Alias for 'public/assets' directory
//     }
//   }
// });
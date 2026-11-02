import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        dashboard: resolve(__dirname, 'dashboard-v2.html'),
        profile: resolve(__dirname, 'profile.html'),
        history: resolve(__dirname, 'history.html'),
        forgotPassword: resolve(__dirname, 'forgot_password.html'),
      },
    },
  },
});
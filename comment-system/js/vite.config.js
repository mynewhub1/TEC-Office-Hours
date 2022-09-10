import { VitePWA } from "vite-plugin-pwa";
import { defineConfig } from "vite";
import { registerSW } from 'virtual:pwa-register'

export default defineConfig({
  plugins: [
    VitePWA({
      registerType: "autoUpdate",
      strategies: "injectManifest",
      injectManifest: {
        globPatterns: ["**/*.html"]
      },
    }),
  ],
});

const updateSW = registerSW({
  onNeedRefresh() {
    console.log('Refresh');
  },
  onOfflineReady() {
    console.log('Ready');
  },
  onRegistered() {
    console.log('Registered');
  },
  onRegisterError(e) {
    console.log('Register Error');
    console.error(e);
  },
});
// import { VitePWA } from "vite-plugin-pwa";
// import { registerSW } from 'virtual:pwa-register'
import { defineConfig } from "vite";

export default defineConfig({
  // plugins: [
  //   VitePWA({
  //     registerType: "autoUpdate",
  //     strategies: "injectManifest",
  //     injectManifest: {
  //       globPatterns: ["**/*.html"]
  //     },
  //   }),
  // ],
  base: "",
  build: {
    outDir: "../dist",
  },
});

// const updateSW = registerSW({
//   onNeedRefresh() {
//     console.log('Refresh');
//   },
//   onOfflineReady() {
//     console.log('Ready');
//   },
//   onRegistered() {
//     console.log('Registered');
//   },
//   onRegisterError(e) {
//     console.log('Register Error');
//     console.error(e);
//   },
// });
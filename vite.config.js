import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  base: "./", // Ensures correct asset paths for static hosting
  plugins: [
    vue(), // Vue plugin for Vite
  ],
});

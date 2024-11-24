import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // Proper base path
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});

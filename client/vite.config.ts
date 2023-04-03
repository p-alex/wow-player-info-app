import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "http://localhost:3000",
  preview: {
    port: 3000,
    strictPort: true,
  },
  plugins: [react()],
  server: {
    port: 3000,
  },
});

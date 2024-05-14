import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import sassGlobImports from "vite-plugin-sass-glob-import";

export default defineConfig({
  plugins: [react(), sassGlobImports()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 9000,
    open: true,
  },
});

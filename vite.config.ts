import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import macrosPlugin from "vite-plugin-babel-macros";

export default defineConfig({
  plugins: [react(), macrosPlugin()],
  resolve: {
    alias: [{ find: "~", replacement: "/src" }],
  },
  base: "/jeju-deers-frontend/",
  build: {
    outDir: "dist",
  },
});

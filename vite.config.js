import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "./",
  plugins: [react()],
  build: {
    target: ["es2017", "chrome64", "safari11"],
    cssTarget: "chrome61",
  },
});

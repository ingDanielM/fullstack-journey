import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "./js-fundamentals/js/modules.js",
      formats: ["es"],
    },
  },
});
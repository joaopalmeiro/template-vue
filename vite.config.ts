import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  server: {
    // https://vitejs.dev/config/server-options.html#server-open
    open: true,
  },
});

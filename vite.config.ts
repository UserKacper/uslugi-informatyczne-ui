import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
 base: "/",
 plugins: [react()],
 preview: {
  port: 8888,
  strictPort: true,
 },
 server: {
  port: 5047,
  strictPort: true,
  host: true,
  origin: "http://0.0.0.0:5047",
 },
});
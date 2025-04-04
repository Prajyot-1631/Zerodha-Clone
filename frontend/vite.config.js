import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true,
  },
  preview: {
    port: process.env.PORT || 10000,
    host: "0.0.0.0",
    allowedHosts: ["zerodha-clone-frontend-1.onrender.com"],
  },
});

import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

const env: Record<string, string> = loadEnv("mode", process.cwd(), "");

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    "process.env.VITE_ERP_API_GRAPHQL_ENDPOINT": JSON.stringify(
      env.VITE_ERP_API_GRAPHQL_ENDPOINT,
    ),
    "process.env.VITE_PHOTO_UPLOAD_ENDPOINT": JSON.stringify(
      env.VITE_PHOTO_UPLOAD_ENDPOINT,
    ),
    "process.env.VITE_PHOTO_RETRIEVE_ENDPOINT": JSON.stringify(
      env.VITE_PHOTO_RETRIEVE_ENDPOINT,
    ),
  },
  plugins: [react()],
});

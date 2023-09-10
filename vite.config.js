import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/manage_landing_page_frontend_mentors",
  plugins: [react()],
  server: {
    port: 8000,
  },
});

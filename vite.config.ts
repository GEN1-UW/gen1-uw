import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/",
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    {
      name: "spa-fallback",
      apply: "serve",
      configureServer(server) {
        return () => {
          server.middlewares.use((req, res, next) => {
            if (
              req.method === "GET" &&
              !req.url.includes(".") &&
              req.url !== "/"
            ) {
              req.url = "/";
            }
            next();
          });
        };
      },
    },
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

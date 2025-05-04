import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Vite config with plugins and paths
export default defineConfig(async () => {
  const plugins = [
    react(),
    // Dynamically import the Cartographer plugin only in the right conditions
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          (await import("@replit/vite-plugin-cartographer")).cartographer(),
        ]
      : []),
  ];

  return {
    base: '/vs-zero-kit/', // Ensure base path for GitHub Pages
    plugins,
    resolve: {
      alias: {
        "@db": path.resolve(__dirname, "db"),
        "@": path.resolve(__dirname, "client", "src"),
        "@shared": path.resolve(__dirname, "shared"),
        "@assets": path.resolve(__dirname, "attached_assets"),
      },
    },
    root: path.resolve(__dirname, "client"), // Ensure 'client' is your working directory
    build: {
      outDir: path.resolve(__dirname, "dist/public"), // Output folder for GitHub Pages
      emptyOutDir: true,
    },
  };
});

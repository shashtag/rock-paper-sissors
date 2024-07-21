import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "tests/setup.ts",
    coverage: {
      reporter: ["text", "json", "html"],
      exclude: [
        "node_modules",
        "tests",
        "rock-paper-sissors-betting",
        "postcss.config.js",
        "tailwind.config.js",
        "vite.config.ts",
        "src/main.tsx",
        "src/app.tsx",
        "vitest.config.ts",
        ".eslintrc.cjs",
      ],
    },
  },
});

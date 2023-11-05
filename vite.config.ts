/// <reference types="vitest" />
import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import { compilerOptions } from "./tsconfig.json";

const alias = Object.entries(compilerOptions.paths).reduce((acc, [key, [value]]) => {
  const aliasKey = key.substring(0, key.length);
  const path = value.substring(0, value.length);
  acc[aliasKey] = resolve(__dirname, path);
  return acc;
}, {});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
    }),
  ],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./tests/setup.ts",
    coverage: {
      provider: "istanbul", // or 'v8'
    },
  },
  resolve: {
    alias,
  },
});

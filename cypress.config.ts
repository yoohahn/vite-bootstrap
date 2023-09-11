import { defineConfig } from "cypress";

export default defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  videoCompression: 15,
  chromeWebSecurity: false,
  env: {},
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require("./cypress/plugins/index.js")(on, config);
    },
    baseUrl: "http://localhost:3433",
    excludeSpecPattern: ["**/__snapshots__/*", "**/__image_snapshots__/*"],
  },
});

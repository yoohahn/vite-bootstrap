/** @type {import('@jest/types').Config.InitialOptions} */

module.exports = {
  testEnvironment: "jsdom",
  testMatch: ["<rootDir>/src/**/__tests__/*.spec.*"],
  collectCoverageFrom: ["!**/*", "src/**/*", "!src/**/index.ts", "!src/**/*.d.ts"],
  moduleNameMapper: {
    "^@local-test-util(.*)$": "<rootDir>/jest/$1",
  },
};

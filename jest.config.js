module.exports = {
  verbose: true,
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testMatch: ["**/components/*.tsx", "**/pages/*.tsx"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  roots: ["<rootDir>/tests"],
  testEnvironment: "jsdom",
  setupTestFrameworkScriptFile: "./tests/setup.ts",
};

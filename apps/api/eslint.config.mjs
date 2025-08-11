import ts from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

export default [
  {
    files: ["**/*.ts"],
    languageOptions: { parser: tsParser, parserOptions: { ecmaVersion: "latest", sourceType: "module" } },
    plugins: { "@typescript-eslint": ts },
    rules: {
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }]
    }
  }
];

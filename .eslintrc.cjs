module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:jsx-a11y/recommended",
    "prettier",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: [
    "import",
    "simple-import-sort",
    "react-refresh",
    "@typescript-eslint",
    "prettier",
    "jsx-a11y",
  ],
  settings: {
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
    },
    react: {
      version: "detect",
    },
  },
  rules: {
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    // react
    "react/prop-types": 0,
    "react-hooks/rules-of-hooks": "error",
    // import
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "import/order": [
      "error",
      {
        groups: [["builtin", "external"], "internal", ["parent", "sibling"], "index"],
        "newlines-between": "always",
        pathGroups: [
          {
            pattern: "@/**",
            group: "internal",
            position: "after",
          },
        ],
      },
    ],
    // prettier
    "prettier/prettier": "warn",
    // rules
    "no-console": [
      "error",
      {
        allow: ["error", "warn"],
      },
    ],
  },
};

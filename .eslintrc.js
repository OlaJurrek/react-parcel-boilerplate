module.exports = {
  extends: [
    // Extends are set of rules
    "eslint:recommended", // Those rules can't be questioned - gospel truth
    "plugin:import/errors", // Checks if the thing you import is exported in that file
    "plugin:react/recommended", // Those rules can't be questioned and set off/on
    "plugin:jsx-a11y/recommended", // No-brainer accessiblity stuff fo jsx
    "prettier", // Pretier and prettier/react must be at the end of extends array
    "prettier/react",
  ],
  rules: {
    "react/prop-types": 0, // Props type checking - for Typescript
    "no-console": 1, // console.log is a warning only
    "react-hooks/rules-of-hooks": 2, // react-hooks are official rules from React core team
    "react-hooks/exhaustive-deps": 1,
  },
  parser: "babel-eslint", // to t ranspile experimantal feature from Details.js for eslint to understand it
  plugins: ["react", "import", "jsx-a11y", "react-hooks"], // Plugins which offers set of rules incorporated in extends
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};

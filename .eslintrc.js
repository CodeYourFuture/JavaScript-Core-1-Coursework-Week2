module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
  },
  extends: [
    "airbnb-base",
    "plugin:jest/recommended",
  ],
  parserOptions: {
    ecmaVersion: 13,
  },
  rules: {
    "max-len": 0,
    quotes: ["error", "double", { avoidEscape: true }],
    "no-console": "off",
  },
  plugins: ["jest"],
};

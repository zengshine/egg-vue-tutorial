module.exports = {
  extends: [
    "eslint-config-egg/typescript",
    "plugin:vue/recommended"
  ],
  parserOptions: {
    parser: "@typescript-eslint/parser",
    extraFileExtensions: [".vue"]
  },
  rules: {
    "spaced-comment": ["error", "always"],

    // 强制注释周围有空行
    "lines-around-comment": ["error", { "beforeBlockComment": true }]
  }
}

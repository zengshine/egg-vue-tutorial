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
    "lines-around-comment": ["error", { "beforeBlockComment": true }],

    // 闭合标签不换行
    'vue/html-closing-bracket-newline': ['error', {
      singleline: 'never',
      multiline: 'never'
    }],

    // 标签属性：每个属性换行，首个属性不换行
    'vue/max-attributes-per-line': ['error', {
      singleline: 1,
      multiline: {
        max: 1,
        allowFirstLine: true
      }
    }],
  }
}

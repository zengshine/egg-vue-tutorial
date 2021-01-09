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
    // 允许使用require模块引用语法
    "@typescript-eslint/no-var-requires": 0,

    // 允许使用debugger声明断点
    "no-debugger": 0,

    "spaced-comment": ["error", "always"],

    // 强制注释周围有空行
    "lines-around-comment": ["error", { "beforeBlockComment": true }],

    // 对象尾属性逗号
    "comma-dangle": ["error", "never"],

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

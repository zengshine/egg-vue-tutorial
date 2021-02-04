module.exports = {
  defaultSeverity: 'error',
  extends: [ 'stylelint-config-airbnb', 'stylelint-config-idiomatic-order' ],
  plugins: [ 'stylelint-scss', 'stylelint-order' ],
  rules: {
    // 不要使用已被 autoprefixer 支持的浏览器前缀
    'media-feature-name-no-vendor-prefix': true,
    'at-rule-no-vendor-prefix': true,
    'selector-no-vendor-prefix': true,
    'property-no-vendor-prefix': true,
    'value-no-vendor-prefix': true,
    // 最多允许嵌套20层，去掉默认的最多2层
    'max-nesting-depth': 20,
    // 颜色值要小写
    'color-hex-case': 'lower',
    // 颜色值能短则短
    'color-hex-length': 'short',
    // 不能用important
    'declaration-no-important': true,
    // 选择组中最多允许一个ID选择器
    'selector-max-id': 1,
    // 允许低于1，0开始的小数单位
    'number-leading-zero': 'always',
    'string-quotes': 'single',
    // 空规则后是否跟空行
    'rule-empty-line-before': [ 'always', {
      except: [ 'first-nested' ],
      ignore: [ 'first-nested' ]
    }]
  }
};

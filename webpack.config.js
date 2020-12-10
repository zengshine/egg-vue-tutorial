// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
const resolve = filepath => path.resolve(__dirname, filepath);
module.exports = {
  egg: true,
  framework: 'vue',
  entry: {
    'main/index': 'app/web/page/main/index.ts',
    login: 'app/web/page/login/login.vue',
  },
  resolve: {
    alias: {
      '@web': resolve('app/web'),
      '@view': resolve('app/web/page'),
      '@asset': resolve('app/web/asset'),
      '@framework': resolve('app/web/framework'),
      '@component': resolve('app/web/component'),
      '@store': resolve('app/web/page/store'),
    },
    extensions: [ '.ts', '.js', '.vue' ],
  },
  module: {
    rules: [
      { babel: false },
      { ts: true },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [],
};

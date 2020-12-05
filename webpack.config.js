// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
const resolve = filepath => path.resolve(__dirname, filepath);
module.exports = {
  egg: true,
  framework: 'vue',
  entry: {
    'home/index': 'app/web/page/home/index.ts',
    login: 'app/web/page/login/login.vue',
  },
  resolve: {
    alias: {
      '@view': resolve('app/web/page'),
      '@asset': resolve('app/web/asset'),
      '@framework': resolve('app/web/framework'),
      '@component': resolve('app/web/component'),
      '@store': resolve('app/web/page/store'),
    },
  },
  module: {
    rules: [
      { babel: false },
      { ts: true },
    ],
  },
  plugins: [],
};

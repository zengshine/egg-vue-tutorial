const path = require('path');
const resolve = filepath => path.resolve(__dirname, filepath);

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  egg: true,
  framework: 'vue',
  entry: {
    'main/index': 'app/web/page/main/index.ts',
  },
  resolve: {
    alias: {
      '@': resolve('./'),
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
      { babel: true },
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
  plugins: [
    { imagemini: false },
    // 关闭easywebpack内置的CleanWebpackPlugin配置
    { clean: false },
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [ path.join(process.cwd(), 'public/*'), path.join(process.cwd(), 'app/view/*') ],
    }),
  ],
};


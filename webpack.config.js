const path = require('path');
const resolve = filepath => path.resolve(__dirname, filepath);

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  egg: true,

  framework: 'vue',

  entry: {
    'main/index': 'app/web/page/main/index.ts',
    login: 'app/web/page/login/index.ts',
  },

  devtool: 'source-map',

  dll: [ 'vue', 'vuex', 'axios' ],

  performance: {
    hints: process.env.NODE_ENV === 'development' ? 'warn' : 'error',
    maxEntrypointSize: 1024 * 178,
    maxAssetSize: 1024 * 200,
    assetFilter(assetFilename) {
      // 计算资源匹配规则
      return assetFilename.endsWith('.js');
    },
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'common',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          minSize: 1,
          minChunks: 1,
          filename: '[name].bundle.[hash].js',
        },
        styles:
        {
          name: 'common',
          chunks: 'all',
          minChunks: 2,
          test: /\.(css|less|scss|stylus)$/,
          enforce: true,
          priority: 50,
        },
      },
    },
  },

  resolve: {
    modules: [ resolve('node_modules') ],
    mainFields: [ 'browser', 'module', 'main' ],
    extensions: [ '.ts', '.js', '.vue' ],
    alias: {
      '@app': resolve('app'),
      '@web': resolve('app/web'),
      '@view': resolve('app/web/page'),
      '@page': resolve('app/web/page'),
      '@config': resolve('app/web/config'),
      '@asset': resolve('app/web/asset'),
      '@framework': resolve('app/web/framework'),
      '@component': resolve('app/web/component'),
      '@store': resolve('app/web/page/store'),
    },
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
        include: resolve('app/web'),
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

    { extract: false },
    // 将css提取成独立文件
    new MiniCssExtractPlugin({
      filename: 'style-[name]-[contentHash].css',
    }),
  ],
};


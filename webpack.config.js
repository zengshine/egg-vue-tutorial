const path = require('path');
const resolve = filepath => path.resolve(__dirname, filepath);

// 引用环境变量
const DotEnv = require('dotenv');
DotEnv.config();

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  egg: true,

  framework: 'vue',

  entry: {
    'main/index': 'app/web/page/main/index.ts',
    login: 'app/web/page/login/index.ts'
  },

  output: {
    publicPath: process.env.NODE_ENV === 'development' ? 'public' : `http://${process.env.APP_HOST}/public`
  },

  devtool: 'source-map',

  dll: [ 'vue', 'vuex', 'axios' ],

  performance: {
    hints: process.env.NODE_ENV === 'development' ? 'warning' : 'warning',
    maxEntrypointSize: 1024 * 178 * 3,
    maxAssetSize: 1024 * 500,
    assetFilter(assetFilename) {
      // 计算资源匹配规则
      return assetFilename.endsWith('.js');
    }
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'commons',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'initial',
          minSize: 1,
          minChunks: 1,
          filename: '[name].bundle.[contentHash].js'
        },
        cubism: {
          name: 'cubism',
          test: /[\\/]cubism[\\/]/,
          chunks: 'initial',
          minSize: 1,
          minChunks: 1,
          filename: '[name].bundle.[contentHash].js'
        },
        styles:
        {
          name: 'common',
          chunks: 'all',
          minChunks: 2,
          test: /\.(css|less|scss|stylus)$/,
          enforce: true,
          priority: 50
        }
      }
    },
    sideEffects: false
  },

  resolve: {
    modules: [ resolve('node_modules') ],
    mainFields: [ 'browser', 'module', 'main' ],
    extensions: [ '.ts', '.js', '.vue' ],
    alias: {
      '@': resolve('.'),
      '@app': resolve('app'),
      '@web': resolve('app/web'),
      '@cubismFramework': resolve('cubism/Framework/src')
    }
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
          'sass-loader'
        ],
        include: resolve('app/web')
      }
    ]
  },

  plugins: [
    { imagemini: false },

    // 关闭easywebpack内置的CleanWebpackPlugin配置
    { clean: true },
    { extract: false },
    // 将css提取成独立文件
    new MiniCssExtractPlugin({
      filename: 'style-[name]-[contentHash].css'
    }),
    {
      copy: [
        {
          from: 'app/web/assets',
          to: 'assets'
        },
        {
          from: 'cubism/Resources',
          to: 'assets/cubism/Resources'
        }
      ]
    }
  ]
};


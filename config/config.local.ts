import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
  const config: PowerPartial<EggAppConfig> = {};

  config.vuessr = {
    // 本地开发， css采用inline方式，无需注入css链接
    injectCss: false
  };

  config.development = {
    watchDirs: [ 'app.ts', 'agent.ts' ], // 指定监视的目录（包括子目录），当目录下的文件变化的时候自动重载应用，路径从项目根目录开始写
    ignoreDirs: [ 'public', 'config/manifest.json' ] // 指定过滤的目录（包括子目录）
  };

  config.webpack = {
    hot: true,
    proxy: {
      // host: 'http://127.0.0.1:9000',
      // match: /^\/public\//, // path pattern.
    },
    devServer: {
      before: () => {
        console.log('devServer before');
      }
    }
  };

  return config;
};

import { EggAppConfig, Application, PowerPartial } from 'egg';

import { EggSequelizeOptions } from 'egg-sequelize';

import path = require('path');

import { getWebpackConfig } from '@easy-team/easywebpack-vue';
import dbConfig from '../database/config';

export default (app: Application) => {
  const config = {} as PowerPartial<EggAppConfig>;

  config.cluster = {
    listen: {
      port: 7000,
    },
  };

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = app.name + '_1606370673751_7521';

  // add your egg config in here
  config.middleware = [
    'gzip',
  ];

  // 配置静态资源路径
  config.static = {
    prefix: '/public/',
    dir: path.join(app.baseDir, 'public'),
  };

  // 配置vuessr插件
  config.vuessr = {
    layout: path.resolve(app.baseDir, 'app/web/template/client/index.html'),
    renderOptions: {
      basedir: path.join(app.baseDir, 'app/view'),
    },
  };

  // 配置egg-webpack
  config.webpack = {
    browser: false,
    webpackConfigList: getWebpackConfig(),
  };

  // 配置socket.io
  config.io = {
    init: {},
    namespace: {
      '/': {
        connectionMiddleware: [],
        packetMiddleware: [],
      },
    },
  };

  // 配置日志
  config.logger = {
    disableConsoleAfterReady: false,
    level: 'DEBUG',
  };

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${app.name}`,
    gzip: {
      threshold: 1024,
    },
  };

  config.sequelize = dbConfig.development as EggSequelizeOptions;

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};

import { EggAppConfig, Application, PowerPartial } from 'egg';

import { EggSequelizeOptions } from 'egg-sequelize';

import path = require('path');

import { getWebpackConfig } from '@easy-team/easywebpack-vue';
import dbConfig from '../database/config.js';

export default (app: Application) => {
  const config = {} as PowerPartial<EggAppConfig>;

  config.proxy = true;

  config.cluster = {
    listen: {
      port: 7001
    },
    workers: 4
  };

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = app.name + '_1606370673751';

  config.security = {
    csrf: {
      headerName: 'x-csrf-token' // 通过 header 传递 CSRF token 的默认字段为 x-csrf-token
    }
  };

  // add your egg config in here
  config.middleware = [
    'authenticate',
    'gzip'
  ];

  // 配置静态资源路径
  config.static = {
    prefix: '/public/',
    dir: path.join(app.baseDir, 'public')
  };

  // 配置vuessr插件
  config.vuessr = {
    layout: path.resolve(app.baseDir, 'app/web/template/client/index.html'),
    renderOptions: {
      basedir: path.join(app.baseDir, 'app/view')
    }
  };

  // 配置egg-webpack
  config.webpack = {
    browser: false,
    webpackConfigList: getWebpackConfig()
  };

  // 配置socket.io
  config.io = {
    init: {},
    namespace: {
      '/': {
        connectionMiddleware: [],
        packetMiddleware: []
      }
    }
  };

  // passport-github
  config.passportGithub = {
    key: '7ee3d0913250c42439a6', // github clientID
    secret: '0d6a7f77572e30ed66320447accca27c6bd6d0f2' // github secret
  };

  // password-weibo
  config.passportYuque = {
    key: 'nnnULGMAu4zb7V6OsSBG',
    secret: 'O52XjqP6IABjeKEzDfgIUxdT8QmpvuegMXwDuTJV'
  };

  // 配置日志
  config.logger = {
    disableConsoleAfterReady: false,
    level: 'DEBUG'
  };

  // 鉴权中间件配置
  config.authenticate = {
    exclude: [ '/login' ]
  };

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${app.name}`,
    gzip: {
      threshold: 1024
    }
  };

  config.sequelize = dbConfig.development as EggSequelizeOptions;

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig
  };
};

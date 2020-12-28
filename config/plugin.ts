import { EggPlugin } from 'egg';

import path = require('path');

const plugin: EggPlugin = {
  static: true,
  // 参数校验
  validate: {
    enable: true,
    package: 'egg-validate',
  },

  // socket.io
  io: {
    enable: false,
    package: 'egg-socket.io',
  },

  // ORM
  sequelize: {
    enable: true,
    package: 'egg-sequelize',
  },

  // password
  passport: {
    enable: true,
    package: 'egg-passport',
  },

  // password-github
  passportGithub: {
    enable: true,
    package: 'egg-passport-github',
  },

  // vue服务端渲染插件
  vuessr: {
    enable: true,
    package: 'egg-view-vue-ssr',
  },

  // 模板引擎
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks',
  },

  // 判断客户端类型
  ua: {
    enable: true,
    path: path.join(__dirname, '../lib/plugin/egg-ua'),
  },


};

export default plugin;

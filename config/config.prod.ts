import { Application, EggAppConfig, PowerPartial } from 'egg';
import { EggSequelizeOptions } from 'egg-sequelize';

import path = require('path');
import dbConfig from '../database/config.js';

export default (app: Application) => {
  const config: PowerPartial<EggAppConfig> = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = app.name + '_1606370673751_7521';

  // 配置静态资源路径
  config.static = {
    prefix: '/public/',
    dir: path.join(app.baseDir, 'public')
  };

  config.sequelize = dbConfig.production as EggSequelizeOptions;

  return config;
};

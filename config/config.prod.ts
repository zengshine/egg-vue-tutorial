import { Application, EggAppConfig, PowerPartial } from 'egg';

export default (app: Application) => {
  const config: PowerPartial<EggAppConfig> = {};
  // use for cookie sign key, should change to your own and keep security
  config.keys = app.name + '_1606370673751_7521';
  return config;
};

import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
  const config: PowerPartial<EggAppConfig> = {};

  config.vuessr = {
    // 本地开发， css采用inline方式，无需注入css链接
    injectCss: false,
  };

  return config;
};

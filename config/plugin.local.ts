import { EggPlugin } from 'egg';

const plugins: EggPlugin = {

  // 本地开发热更新插件
  webpack: {
    enable: true,
    package: 'egg-webpack',
  },

  // 本地开发渲染内存读取插件
  webpackvue: {
    enable: true,
    package: 'egg-webpack-vue',
  },
};

export default plugins;

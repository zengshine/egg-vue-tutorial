import { Application } from 'egg';

import { requireContext } from './utils/common';

const path = require('path');

export default (app: Application) => {
  const { controller, router } = app;

  // 注册各个模块路由
  const modelDir = path.join(__dirname, './router');
  const moduleContext = requireContext(modelDir, true, /\.ts$/);
  Object.values(moduleContext).forEach(module => {
    const register = module.default;
    register(app);
  });

  // 初始化passport-github
  // 挂载鉴权路由
  app.passport.mount('github');

  // 上面的 mount 是语法糖，等价于
  // const github = app.passport.authenticate('github', {});
  // router.get('/passport/github', github);
  // router.get('/passport/github/callback', github);

  // 登录鉴权相关路由配置
  router.get('/login', controller.login.login);
  router.get('/verify', controller.login.verify);
  router.post('/login', app.passport.authenticate('local', { successRedirect: '/verify' }));
  router.get('/api/v1/user/logout', controller.login.logout);

  router.get('/', controller.main.index);
  router.get('/client', controller.main.client);
  router.get('/main(/.+)?', controller.main.server);
};

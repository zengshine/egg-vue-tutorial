import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

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

  router.get('/', controller.main.index);
  router.get('/client', controller.main.client);
  router.get('/main(/.+)?', controller.main.server);
  router.resources('user', 'api/v1/user', controller.user);
};

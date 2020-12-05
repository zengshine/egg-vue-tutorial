import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);
  router.get('/login', controller.home.login);
  router.get('/server', controller.home.server);
  router.get('/client', controller.home.client);
  router.resources('user', 'api/v1/user', controller.user);
};

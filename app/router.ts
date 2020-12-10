import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.main.index);
  router.get('/login', controller.main.login);
  router.get('/client', controller.main.client);
  router.get('/main(/.+)?', controller.main.server);
  router.resources('user', 'api/v1/user', controller.user);
};

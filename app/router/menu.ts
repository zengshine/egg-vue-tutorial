

module.exports = {
  default: app => {
    const { controller, router } = app;

    router.resources('menu', 'api/v1/modelName', controller.menu);
    router.get('/api/v1/menu/getMenuList', controller.menu.getMainMenuList);
  }
};

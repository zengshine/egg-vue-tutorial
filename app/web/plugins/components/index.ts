const moduleContext = require.context('@web/components', true, /\.(vue|tsx)$/);

export default Vue => {
  moduleContext.keys().forEach(key => {
    const component = moduleContext(key).default;
    Vue.component(component.name, component);
  });
};

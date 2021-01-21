const moduleContext = require.context('@web/components', true, /\.vue$/);

export default Vue => {
  moduleContext.keys().forEach(key => {
    const component = moduleContext(key).default;
    Vue.component(component.name, component);
  });
};

import Vue from 'vue';
export default function render(options) {
  if (options.store && options.router) {
    return context => {
      options.router.push(context.state.url);
      const matchedComponents = options.router.getMatchedComponents();
      if (!matchedComponents) {
        // eslint-disable-next-line prefer-promise-reject-errors
        return Promise.reject({ code: '404' });
      }
      return Promise.all(
        matchedComponents.map(component => {
          if (component.preFetch) {
            return component.preFetch(options.store);
          }
          return null;
        }),
      ).then(() => {
        context.state = options.store.state;
        return new Vue(options);
      });
    };
  }
  return context => {
    console.log('server -------------------->', Vue, options);
    const VueApp = Vue.extend(options);
    const app = new VueApp({ data: context.state });
    return new Promise(resolve => {
      resolve(app);
    });
  };
}

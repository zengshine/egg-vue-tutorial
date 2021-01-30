import { Context, EggAppConfig } from 'egg';

export default (options: EggAppConfig['authenticate']) => {
  return async function authenticate(ctx: Context, next: () => Promise<any>) {
    const { url } = ctx;

    const isIgnored = options.exclude.find(item => {
      return item === url;
    });
    const isAuthenticated = ctx.isAuthenticated();

    if (!isIgnored && !isAuthenticated) {
      ctx.redirect('/login');
    }

    await next();
  };
};

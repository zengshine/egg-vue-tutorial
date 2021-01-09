import { Controller } from 'egg';

export default class LoginController extends Controller {

  public async login(ctx) {
    await ctx.render('login.js', {});
  }

  public async verify(ctx) {
    console.log('ctx.isAuthenticated()', ctx.isAuthenticated());
    const res: responseType = {
      code: 1,
      data: {
        redirectUrl: '/main'
      }
    };
    ctx.body = res;
  }
}

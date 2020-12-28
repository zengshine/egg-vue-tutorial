import { Controller } from 'egg';

export default class LoginController extends Controller {

  public async login(ctx) {
    await ctx.render('login.js', {});
  }
}

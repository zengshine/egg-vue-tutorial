
import { Controller } from 'egg';

export default class MenuController extends Controller {
  async getMainMenuList() {
    const { ctx, service } = this;
    const { query } = ctx;
    const result = await service.menu.query(query);
    ctx.body = result;
    ctx.status = 200;
  }
}

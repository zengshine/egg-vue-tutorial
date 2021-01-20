import { Controller } from 'egg';

export default class HomeController extends Controller {

  public async login(ctx) {
    await ctx.render('login.js', {});
  }

  public async index() {
    console.log('HomeController');
    const { ctx } = this;
    ctx.body = await ctx.service.home.getData();
  }

  public async server() {
    const { ctx } = this;

    // main/index.js 对应 webpack entry 的 main/index, 构建后文件存在 app/view 目录
    await ctx.render('main/index.js', { message: 'egg vue server side render' });
  }

  async client() {
    const { ctx } = this;
    const url = ctx.request.url;
    // renderClient 前端渲染，Node层只做 layout.html和资源依赖组装，渲染交给前端渲染。
    // 与服务端渲染的差别你可以通过查看运行后页面源代码即可明白两者之间的差异
    await ctx.renderClient('main/index.js', { message: 'egg vue client render render', url });
  }
}

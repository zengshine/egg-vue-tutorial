import { Controller } from 'egg';

class ConnectionController extends Controller {
  async ping() {
    const { ctx } = this;
    const message = ctx.args[0];
    await ctx.socket.emit(`res', 'got message: ${message}`);
  }
}

export default ConnectionController;

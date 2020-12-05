/**
 * connection 中间件
 * 作用于客户端连接或断开连接时， 可以在这进行授权认证
 */

export default () => {
  return async (ctx, next) => {
    ctx.socket.emit('res', 'connected');

    await next();
  };
};

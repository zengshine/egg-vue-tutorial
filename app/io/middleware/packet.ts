/**
 * 作用于每条消息；
 * 用于对消息进行预处理，又或时对加密消息进行解密等
 */

export default () => {
  return async (ctx, next) => {
    ctx.socket.emit('res', 'packet received');
    await next();
  };
};

import { Context } from 'egg';

async function errorHandler(ctx: Context, next: ()=> Promise<any>) {
  try {
    await next();
  } catch (err) {
    ctx.app.emit('error', err, ctx);

    const status = err.status || 500;
    const isProdInternalError = status === 500 && ctx.app.config.env === 'prod';
    // 生产环境，500错误的详细错误信息可能包含敏感信息，不能直接返回到客户端
    const error = isProdInternalError ? 'Interval Server Error' : err.message;
    ctx.body = { error };

    if (status === 422) {
      ctx.body.detail = err.errors;
    }

    ctx.status = status;
  }
}

export default errorHandler;

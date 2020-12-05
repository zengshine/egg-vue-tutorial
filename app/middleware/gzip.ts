import isJSON = require('koa-is-json') ;
import zlib = require('zlib');

import { Application, Context, EggAppConfig } from 'egg';

const gzip: (options: EggAppConfig['gzip'], app: Application) => any = function(options: EggAppConfig['gzip']): any {

  return async function(ctx: Context, next: ()=>Promise<any>) {
    await next();

    let { body } = ctx;

    if (!body) return;

    if (options.threshold && body.size < options.threshold) return;

    if (isJSON(body)) body = JSON.stringify(body);

    const stream = zlib.createGzip();
    stream.end(body);
    ctx.body = stream;
    ctx.set('Content-Encoding', 'gzip');
  };

};

export default gzip;

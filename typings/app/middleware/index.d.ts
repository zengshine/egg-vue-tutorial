// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAuthenticate from '../../../app/middleware/authenticate';
import ExportErrorHandler from '../../../app/middleware/error-handler';
import ExportGzip from '../../../app/middleware/gzip';

declare module 'egg' {
  interface IMiddleware {
    authenticate: typeof ExportAuthenticate;
    errorHandler: typeof ExportErrorHandler;
    gzip: typeof ExportGzip;
  }
}

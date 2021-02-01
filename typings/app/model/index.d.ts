// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAuthorization from '../../../app/model/authorization';
import ExportMenu from '../../../app/model/menu';
import ExportUser from '../../../app/model/user';

declare module 'egg' {
  interface IModel {
    Authorization: ReturnType<typeof ExportAuthorization>;
    Menu: ReturnType<typeof ExportMenu>;
    User: ReturnType<typeof ExportUser>;
  }
}

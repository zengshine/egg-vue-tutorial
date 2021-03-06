// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportAuthorization from '../../../app/service/authorization';
import ExportBase from '../../../app/service/base';
import ExportHome from '../../../app/service/home';
import ExportMenu from '../../../app/service/menu';
import ExportUser from '../../../app/service/user';

declare module 'egg' {
  interface IService {
    authorization: AutoInstanceType<typeof ExportAuthorization>;
    base: AutoInstanceType<typeof ExportBase>;
    home: AutoInstanceType<typeof ExportHome>;
    menu: AutoInstanceType<typeof ExportMenu>;
    user: AutoInstanceType<typeof ExportUser>;
  }
}

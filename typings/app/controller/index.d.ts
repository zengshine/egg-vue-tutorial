// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAuthorization from '../../../app/controller/authorization';
import ExportLogin from '../../../app/controller/login';
import ExportMain from '../../../app/controller/main';
import ExportMenu from '../../../app/controller/menu';
import ExportUser from '../../../app/controller/user';

declare module 'egg' {
  interface IController {
    authorization: ExportAuthorization;
    login: ExportLogin;
    main: ExportMain;
    menu: ExportMenu;
    user: ExportUser;
  }
}

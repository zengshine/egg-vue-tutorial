// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportLogin from '../../../app/controller/login';
import ExportMain from '../../../app/controller/main';
import ExportUser from '../../../app/controller/user';

declare module 'egg' {
  interface IController {
    login: ExportLogin;
    main: ExportMain;
    user: ExportUser;
  }
}

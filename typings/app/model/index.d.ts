// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportIndex = require('../../../app/model/index');
import ExportUser from '../../../app/model/user';

declare module 'egg' {
  interface IModel {
    Index: ReturnType<typeof ExportIndex>;
    User: ReturnType<typeof ExportUser>;
  }
}

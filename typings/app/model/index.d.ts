// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportUser from '../../../app/model/user';
import ExportTestTest from '../../../app/model/test/test';

declare module 'egg' {
  interface IModel {
    User: ReturnType<typeof ExportUser>;
    Test: {
      Test: ReturnType<typeof ExportTestTest>;
    }
  }
}

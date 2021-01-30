/**
 * @file 用户模块api定义
 */

interface service {
  logout: any
}

import moduleFactory from '@web/config/service/moduleFactory';

const apiConfig = {

  // 获取Vue版本信息
  logout: { method: 'get', url: '/api/v1/user/logout' }
};

const apiModule = moduleFactory(apiConfig) as service;

export default apiModule;

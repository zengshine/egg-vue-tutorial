/**
 * @file login 模块api定义
 */

interface service {
  login: any
}

import moduleFactory from '@config/service/moduleFactory';

const apiConfig = {

  // 获取Vue版本信息
  login: { method: 'post', url: '/login' }
};

const apiModule = moduleFactory(apiConfig) as service;

export default apiModule;

/**
 * @file menu 模块api定义
 */

interface service {
  getMenuList: any
}

import moduleFactory from '@config/service/moduleFactory';

const apiConfig = {

  // 获取Vue版本信息
  getMenuList: { method: 'get', url: '/api/v1/menu/getMenuList' }
};

const apiModule = moduleFactory(apiConfig) as service;

export default apiModule;

/**
 * @file api模块对象工厂
 */

import apiFactory from '@web/config/service/factory';

/**
 * 模块api对象生成函数
 * @param {Object} apConfigMap api定义对象
 * @param {Object} moduleConfig api模块配置对象
 *
 * @returns {Object} 模块api对象
 */

export default function apiModuleGenerator(apConfigMap, moduleConfig = {}) {
  const apiModule = {};

  Object.entries(apConfigMap).forEach(([ key, apiConfig ]) => {

    /**
       * 合并模/块公用配置和单个api配置，优先级：模块配置 < 单个api配置
       * 浅复制，暂不存在引用配置项，如存在并要对引用类型配置项做修改，要改为深度拷贝
       */
    const configCopy = { ...moduleConfig, ...apiConfig as {} };

    // 根据api配置生成api请求函数
    apiModule[key] = apiFactory(configCopy);
  });

  return apiModule;
}

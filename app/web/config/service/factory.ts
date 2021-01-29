import axios from '@web/plugins/axios';

import { API_BASIC_URL } from '@web/config/url';
import { DEFAULT_CONFIG, QUERYPARAMS_METHODS } from './config';
import { isMethodValid, replaceRestPrams } from './util';

/**
 * 根据具体的业务场景，格式化请求URL
 * @param {String} url 请求地址
 * @param {Object} requestParams 请求参数
 * @return {String} targetURL
 */
function formatURL(url, requestParams): string {

  let targetURL = url;

  const { restParams } = requestParams;

  if (typeof restParams === 'object') {
    targetURL = replaceRestPrams(url, restParams);
  }

  // 拼接基础url
  targetURL = `${API_BASIC_URL}${targetURL}`;

  return targetURL;
}

/**
 * 根据请求参数和自定义配置项构建最终的请求配置项
 * @param {*} params 请求参数
 * @param {*} axiosConfig 自定义配置
 */
function constructOptions(params, axiosConfig) {

  const { method } = axiosConfig;
  let { queryParams, bodyParams } = params;
  const isCompositeParams = queryParams || bodyParams;

  // 非复合参数处理
  if (!isCompositeParams) {
    if (QUERYPARAMS_METHODS.includes(method)) {
      queryParams = params;
    } else {
      bodyParams = params;
    }
  }

  if (queryParams) {
    Object.assign(axiosConfig, {
      params: queryParams
    });
  }

  if (bodyParams) {
    Object.assign(axiosConfig, {
      data: bodyParams
    });
  }

  return axiosConfig;
}

/**
 * 请求执行函数
 * @param {Object} requestParams 请求参数
 * @param {Object} apiConfig 请求配置项
 * @return {Promise} 返回
 */
function service(requestParams, apiConfig) {
  try {

    // 合并用户定义参数和默认参数, 优先级：默认参数 < 模块开发者自定义配置参数
    const finalConfig = { ...DEFAULT_CONFIG, ...apiConfig };
    const {
      method,
      url
    } = finalConfig;

    // 方法名无效，退出执行
    if (!isMethodValid(method)) {
      throw new Error(`请求${url}的方法名：${method}有误，请确认`);
    }

    const targetURL = formatURL(url, requestParams);
    finalConfig.url = targetURL;

    // 构建请求的最终配置项
    const axiosConfig = constructOptions(requestParams, finalConfig);

    // 执行请求
    const result = axios(axiosConfig);

    return result;
  } catch (ex) {
    console.error('factory.ts service', ex);

    return Promise.reject(ex);
  }
}

/**
 * api 工厂函数
 * @param {Object} apiConfig api配置参数
 * @return {Function} 根据配置参数构造的api请求方法
 */
export default function apiFactory(apiConfig) {

  /**
     * 实际生成的的api请求方法
     * @param {Object} requestParams 可以是queryParams，bodyPrams对象，也可以是
     * { queryParams, bodyParams, restParams } 复合对象，也可以为空
     */

  return (requestParams = {}) => service(requestParams, apiConfig);
}

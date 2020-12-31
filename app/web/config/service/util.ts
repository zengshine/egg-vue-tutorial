import { VALID_METHODS } from './config';

/**
 * url占位符替换
 * @param {String} url 初始url
 * @param {Object} restParams rest参数对象
 *
 * @return {String} 替换占位符后的url
 */
function replaceRestPrams(url, restParams) {

  let targetURL = url;

  // 匹配 {paramName} 形式的占位符：/preUrl/{paramName}/afterUrl
  const placeholderReg = /\{([\S]+?)\}/g;
  let execRes = placeholderReg.exec(url);
  while (execRes) {

    const [ placeholder, paramKey ] = execRes;
    const paramVal = restParams[paramKey];

    // 如果参数值为空，返回空字符串，退出执行
    if (!paramVal) {
      throw new Error(`调用接口${url}的restParams有误，请确认`);
    }

    targetURL = targetURL.replace(placeholder, paramVal);
    execRes = placeholderReg.exec(url);
  }

  return targetURL;
}

/**
* 非ajax请求
* @param {Object} url 基础url
* @param {Object} params 查询参数
* @return {String} 返回请求url
*/
function getDirectRequestURL(url, params = {}) {

  /**
   * 拼接query字符串
   */
  let urlString = `${url}?`;
  const paramsEntries = Object.entries(params);
  for (const [ key, val ] of paramsEntries) {
    urlString += `${key}=${val}`;
  }
  return urlString;

}

function isMethodValid(method) {
  return VALID_METHODS.includes(method);
}

export {
  replaceRestPrams,
  getDirectRequestURL,
  isMethodValid,
};

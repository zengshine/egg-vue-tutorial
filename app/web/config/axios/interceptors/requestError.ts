/**
 * @file 客户端请求失败拦截器
 */
export default function requestError(error) {
  return Promise.reject(error);
}

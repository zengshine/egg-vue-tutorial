/**
 * @file 服务端响应失败拦截器
 */
export default function responseError(error) {
  return Promise.reject(error);
}

/**
 * @file 服务端响应成功拦截器
 */
export default function requestSuccess(response) {
  const { data } = response;

  return data;
}

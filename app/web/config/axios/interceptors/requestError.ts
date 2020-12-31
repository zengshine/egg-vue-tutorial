/**
 * @file 客户端请求失败拦截器
 */
export default function requestError(error) {
  // The request was made but no response was received
  // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
  // http.ClientRequest in node.js
  const { request } = error;
  console.log('axios requestError request===========>', request);

  return Promise.reject(error);
}

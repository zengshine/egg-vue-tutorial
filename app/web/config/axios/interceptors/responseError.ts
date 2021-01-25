/**
 * @file 服务端响应失败拦截器
 */
export default function responseError(error) {
  console.log('axios responseError ==============>', error);
  // The request was made and the server responded with a status code
  // that falls out of the range of 2xx
  const { response } = error;
  const { data, status } = response;
  const { message } = data;
  console.log('axios responseError ===========>', data, status);
  console.log('axios responseError message===========>', message);

  return Promise.reject(error);
}

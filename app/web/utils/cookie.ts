export const getCookie = name => {
  const cookie = document.cookie;// 获取cookie字符串
  const cookieList = cookie.split('; ');// 分割
  // 遍历匹配
  for (let i = 0; i < cookieList.length; i++) {
    const arr = cookieList[i].split('=');
    if (arr[0] === name) {
      return arr[1];
    }
  }
  return '';
};

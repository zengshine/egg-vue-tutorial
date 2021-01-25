
import { getCookie } from '@web/utils/cookie';

import $store from '@web/page/main/store';

/**
 * 获取应用csrf值
 *
 * @return {String} csrf值
 */
export const getCsrfToken = () => {
  if (EASY_ENV_IS_NODE) {
    console.log('getCsrfToken $store=========================>', $store);
    return $store.state.csrfToken;
  }

  return getCookie('csrfToken');
};

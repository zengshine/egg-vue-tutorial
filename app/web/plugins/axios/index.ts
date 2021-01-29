/**
 * @file axios创建
 */

import axios from 'axios';

import { getCsrfToken } from '@web/utils/common';

import requestSuccessInterceptor from '@web/config/axios/interceptors/requestSuccess';
import requestErrorInterceptor from '@web/config/axios/interceptors/requestError';
import responseSuccessInterceptor from '@web/config/axios/interceptors/responseSuccess';
import responseErrorInterceptor from '@web/config/axios/interceptors/responseError';

const csrfToken = getCsrfToken();

const defaultConfig = {
  baseURL: '',
  headers: { 'x-csrf-token': csrfToken }
};

const axiosInstance = axios.create(defaultConfig);

axiosInstance.interceptors.request.use(requestSuccessInterceptor, requestErrorInterceptor);
axiosInstance.interceptors.response.use(responseSuccessInterceptor, responseErrorInterceptor);

export default axiosInstance;

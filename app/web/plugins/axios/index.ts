/**
 * @file axios创建
 */

import axios from 'axios';

import { getCookie } from '@web/utils/cookie';

import requestSuccessInterceptor from '@config/axios/interceptors/requestSuccess';
import requestErrorInterceptor from '@config/axios/interceptors/requestError';
import responseSuccessInterceptor from '@config/axios/interceptors/responseSuccess';
import responseErrorInterceptor from '@config/axios/interceptors/responseError';


const csrfToken = getCookie('csrfToken');

const defaultConfig = {
  headers: { 'x-csrf-token': csrfToken },
};

const axiosInstance = axios.create(defaultConfig);

axiosInstance.interceptors.request.use(requestSuccessInterceptor, requestErrorInterceptor);
axiosInstance.interceptors.response.use(responseSuccessInterceptor, responseErrorInterceptor);

export default axiosInstance;

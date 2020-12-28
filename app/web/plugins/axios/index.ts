/**
 * @file axios创建
 */

import axios from 'axios';

import requestSuccessInterceptor from '@config/axios/interceptors/requestSuccess';
import requestErrorInterceptor from '@/config/axios/interceptors/requestError';
import responseSuccessInterceptor from '@/config/axios/interceptors/responseSuccess';
import responseErrorInterceptor from '@/config/axios/interceptors/responseError';

const axiosInstance = axios.create({});

axiosInstance.interceptors.request.use(requestSuccessInterceptor, requestErrorInterceptor);
axiosInstance.interceptors.response.use(responseSuccessInterceptor, responseErrorInterceptor);

export default axiosInstance;

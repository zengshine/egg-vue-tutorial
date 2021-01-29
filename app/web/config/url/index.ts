/**
 * @file 基础url
 */
const isProd = process.env.NODE_ENV === 'production';

/**
 * 代理服务器地址
 */

export const PROXY_HOST = 'http://8.135.3.155';

/**
 * api url
 */

// const PROD_ENV_BASIC_URL = 'http://localhost:40001/mock';
const PROD_ENV_BASIC_URL = '';
const DEV_ENV_BASIC_URL = '';

export const API_BASIC_URL = isProd ? PROD_ENV_BASIC_URL : DEV_ENV_BASIC_URL;

/**
 * static resource url
 */

// basic url
export const STATIC_RESOURCE_BASIC_URL = isProd ? PROXY_HOST : '';

// cubism
export const CUBISM_CORE_LIBRARY_URL = `${STATIC_RESOURCE_BASIC_URL}/public/assets/cubism/core/live2dcubismcore.min.js`;

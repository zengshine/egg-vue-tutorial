/**
 * @file API基础url
 */
// const PROD_ENV_BASIC_URL = 'http://localhost:40001/mock';
const PROD_ENV_BASIC_URL = '';
const DEV_ENV_BASIC_URL = '';

const API_BASIC_URL = process.env.NODE_ENV === 'production' ? PROD_ENV_BASIC_URL : DEV_ENV_BASIC_URL;

export default API_BASIC_URL;

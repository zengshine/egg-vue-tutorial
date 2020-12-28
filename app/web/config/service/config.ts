/**
 * @file axios 配置项
 */

// axios支持的方法名
const VALID_METHODS = [
  'get',
  'delete',
  'head',
  'options',
  'post',
  'put',
  'patch',
];

// axios 默认采用queryPrams（{ params: { key: value } }）形式传参的方法
const QUERYPARAMS_METHODS = [
  'get',
  'delete',
  'head',
  'options',
];

// api配置项默认参数
const DEFAULT_CONFIG = {
  isMock: false,
};

export {
  VALID_METHODS,
  QUERYPARAMS_METHODS,
  DEFAULT_CONFIG,
};

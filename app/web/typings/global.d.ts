declare var window: Window

declare var EASY_ENV_IS_NODE: Boolean

interface Window {
  __INITIAL_STATE__: any
}

// axios请求结果
interface requestResult {
  success: boolean,
  data: object,
  msg: string
}

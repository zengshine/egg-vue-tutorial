declare let window: Window
interface Window {
  __INITIAL_STATE__: any
}

// axios请求结果
interface requestResult {
  success: boolean,
  data: object,
  msg: string
}

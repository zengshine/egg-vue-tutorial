/**
 * 路由负责将socket连接的不同events 分发到对应的controller
 */
export default io => {
  io.of('/').route('server', io.controller.connection.ping);
};

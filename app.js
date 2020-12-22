"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AppBootHook {
    constructor(app) {
        this.app = app;
    }
    /**
     * config文件已经被读取合并， 但还没生效
     * 这是应用层修改配置的最后时机
     * 此方法只支持同步调用
     */
    configWillLoad() {
        this.app.logger.debug('app.js configWillLoad');
    }
    /**
     * 配置，插件文件已经被加载
     */
    configDidLoad() {
        this.app.logger.debug('app.js configDidLoad');
    }
    /**
     * 所有配置已经加载完毕
     * 可以在此方法: 加载应用自定义的文件，启动自定义的服务
     */
    async didLoad() {
        this.app.logger.debug('app.js didLoad');
        this.app.logger.info('app.js didLoad');
    }
    /**
     * 所有插件已经启动完毕， 但应用未ready
     * 可以在此方法：做数据初始化操作
     */
    async willReady() {
        this.app.logger.debug('app.js willReady');
    }
    /**
     * worker已经ready
     */
    async didReady() {
        this.app.logger.debug('app.js didReady');
    }
    /**
     * 应用已经ready
     */
    async serverDidReady() {
        this.app.logger.debug('app.js serverDidReady');
    }
    /**
     * 即将关闭app
     */
    async beforeClose() {
        this.app.logger.debug('app.js beforeClose');
    }
}
exports.default = AppBootHook;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsTUFBcUIsV0FBVztJQUc5QixZQUFZLEdBQWdCO1FBQzFCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ2pCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsY0FBYztRQUNaLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRDs7T0FFRztJQUNILGFBQWE7UUFDWCxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsS0FBSyxDQUFDLE9BQU87UUFDWCxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsS0FBSyxDQUFDLFNBQVM7UUFDYixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxLQUFLLENBQUMsUUFBUTtRQUNaLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRDs7T0FFRztJQUNILEtBQUssQ0FBQyxjQUFjO1FBQ2xCLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRDs7T0FFRztJQUNILEtBQUssQ0FBQyxXQUFXO1FBQ2YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDOUMsQ0FBQztDQUNGO0FBNURELDhCQTREQyJ9
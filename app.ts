import { Application, IBoot } from 'egg';

const LocalStrategy = require('passport-local').Strategy;

export default class AppBootHook implements IBoot {
  private readonly app: Application;

  constructor(app: Application) {
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

    const { app } = this;

    // 挂载 strategy
    app.passport.use(new LocalStrategy({
      passReqToCallback: true,
      usernameField: 'username',
      passwordField: 'password'
    }, (req, username, password, done) => {
      // format user
      const user = {
        provider: 'local',
        username,
        password
      };
      app.passport.doVerify(req, user, done);
    }));

    // 处理用户信息
    app.passport.verify(async (ctx, user) => {
      this.app.logger.debug('verify', ctx, user);
      console.log('verify==========================>', user);
      // await ctx.service.user.create({ name: 'name' });
      const userInfo = await ctx.service.user.model.findOne({
        where: { name: user.username }
      });

      // 用户不存在
      if (!userInfo) return false;

      return userInfo;
    });

    app.passport.serializeUser(async (ctx, user) => {
      this.app.logger.debug('serializeUser', ctx, user);
      console.log('serializeUser==========================>', user);
      return user;
    });

    app.passport.deserializeUser(async (ctx, user) => {
      this.app.logger.debug('deserializeUser', ctx, user);
      console.log('deserializeUser==========================>', user);
      return user;
    });
  }

  /**
   * 所有配置已经加载完毕
   * 可以在此方法: 加载应用自定义的文件，启动自定义的服务
   */
  async didLoad() {
    this.app.logger.debug('app.js didLoad =============>');
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

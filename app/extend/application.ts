import { Application } from 'egg';
const { Strategy: LocalStrategy } = require('passport-local');

export default {
  initAuthorization(this: Application) {
    // 挂载 strategy
    this.passport.use(new LocalStrategy({
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
      this.passport.doVerify(req, user, done);
    }));

    // 处理用户信息
    this.passport.verify(async (ctx, user) => {
      this.logger.debug('verify', ctx, user);
      console.log('this.passport.verify==========================>', user);
      const { provider } = user;

      // 本地验证策略：用户密码登录
      if (provider === 'local') {
        // await ctx.service.user.create({ name: 'name' });
        const userInfo = await ctx.service.user.model.findOne({
          where: { name: user.username }
        });

        // 用户不存在
        if (!userInfo) return false;

        return userInfo;
      }

      const { id } = user;
      const auth: any = await ctx.service.authorization.findOne({
        providerId: id,
        provider
      });

      if (!auth) {
        const userInfo = await ctx.service.authorization.register(user);
        return userInfo;
      }

      const userInfo = await ctx.service.user.findOne({
        where: { id: auth.user_id }
      });
      return userInfo;
    });

    this.passport.serializeUser(async (ctx, user) => {
      this.logger.debug('serializeUser', ctx, user);
      console.log('serializeUser==========================>', user);
      return user;
    });

    this.passport.deserializeUser(async (ctx, user) => {
      this.logger.debug('deserializeUser', ctx, user);
      console.log('deserializeUser==========================>', user);
      return user;
    });
  }
};

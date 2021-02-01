import BaseService from './base';

export default class AuthorizationService extends BaseService {
  constructor(ctx) {
    super(ctx, {
      name: 'Authorization'
    });
  }

  async register(user) {
    console.log('=========================>', user);
    const {
      id: providerId,
      provider,
      name,
      displayName,
      accessToken
    } = user;

    const userInfo = {
      providerId,
      provider,
      name,
      displayName,
      accessToken
    };

    // todo: 两个表的用户创建应该使用事务管理，保证同时成功，同时失败
    const createdUser:any = await this.service.user.create({ name });

    Object.assign(userInfo, {
      user_id: createdUser.id
    });

    console.log('userInfo=========================>', userInfo);

    await this.create(userInfo);
    return createdUser;
  }
}

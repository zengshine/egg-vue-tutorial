import BaseService from './base';

export default class UserService extends BaseService {
  constructor(ctx) {
    super(ctx, {
      name: 'User'
    });
  }
}

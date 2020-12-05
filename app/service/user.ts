import { Service } from 'egg';

class UserService extends Service {
  async query(params: any) {
    return params;
  }
}

export default UserService;

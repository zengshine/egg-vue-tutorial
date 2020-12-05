import { Service } from 'egg';

interface homeResult {
  code: number,
  data: Array<any>
}

class HomeService extends Service {
  async getData(): Promise<homeResult> {
    return {
      code: 1,
      data: [],
    };
  }
}

export default HomeService;

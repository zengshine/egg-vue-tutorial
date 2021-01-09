import { Subscription } from 'egg';

class CustomSchedule extends Subscription {
  static get schedule() {
    return {
      type: 'customSchedule'
    };
  }

  async subscribe() {
    this.logger.info('app logger info');
  }
}

export default CustomSchedule;

import { EggAppConfig } from './typings/app';

function agentBoot(agent: EggAppConfig) {
  class CustomScheduleStrategy extends agent.ScheduleStrategy {
    start() {
      this.sendOne();
    }
  }
  agent.schedule.use('customSchedule', CustomScheduleStrategy);
}

export default agentBoot;

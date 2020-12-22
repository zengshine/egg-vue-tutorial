"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function agentBoot(agent) {
    class CustomScheduleStrategy extends agent.ScheduleStrategy {
        start() {
            this.sendOne();
        }
    }
    agent.schedule.use('customSchedule', CustomScheduleStrategy);
}
exports.default = agentBoot;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdlbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhZ2VudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLFNBQVMsU0FBUyxDQUFDLEtBQW1CO0lBQ3BDLE1BQU0sc0JBQXVCLFNBQVEsS0FBSyxDQUFDLGdCQUFnQjtRQUN6RCxLQUFLO1lBQ0gsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2pCLENBQUM7S0FDRjtJQUNELEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLHNCQUFzQixDQUFDLENBQUM7QUFDL0QsQ0FBQztBQUVELGtCQUFlLFNBQVMsQ0FBQyJ9
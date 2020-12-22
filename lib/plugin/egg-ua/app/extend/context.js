"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    isIOS() {
        const iosReg = /iphone|ipad|ipod/i;
        const userAgent = this.get('user-agent');
        return iosReg.test(userAgent);
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbnRleHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxrQkFBZTtJQUNiLEtBQUs7UUFDSCxNQUFNLE1BQU0sR0FBRyxtQkFBbUIsQ0FBQztRQUNuQyxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3pDLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNoQyxDQUFDO0NBQ0YsQ0FBQyJ9
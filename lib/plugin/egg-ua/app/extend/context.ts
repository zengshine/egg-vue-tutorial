import { Context } from 'egg';

export default {
  isIOS(this: Context) {
    const iosReg = /iphone|ipad|ipod/i;
    const userAgent = this.get('user-agent');
    return iosReg.test(userAgent);
  },
};

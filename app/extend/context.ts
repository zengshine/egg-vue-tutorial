import { Context } from 'egg';

export default {
  isAjax(this: Context) {
    return this.get('X-Request-With') === 'XMLHttpRequest';
  }
};

import { defineComponent } from '@vue/composition-api';

import PropTypes from '@web/utils/vue-types';

export default defineComponent({
  name: 'Popover',
  props: {
    title: PropTypes.string
  } as any,

  render() {
    const { $slots } = this;
    console.log('$slots=========================>', $slots?.default);

    return (
      <div>test</div>
    );
  }
});

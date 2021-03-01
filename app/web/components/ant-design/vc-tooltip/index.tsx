import { defineComponent } from '@vue/composition-api';
import PropTypes from '@web/utils/vue-types';

import Trigger from '../vc-trigger/index';

export default defineComponent({
  name: 'TsxTemplate',

  props: {
    title: PropTypes.VNodeChild
  } as any,

  render() {
    const { $slots, $props, $attrs } = this;
    const triggerProps = {
      ...$props,
      ...$attrs
    };

    return (
      <Trigger props = {triggerProps}>{$slots.default}</Trigger>
    );
  }
});

import { defineComponent, inject } from '@vue/composition-api';
import PropTypes from '@web/utils/vue-types';

import Tooltip from '../tooltip/Tooltip';

export default defineComponent({
  name: 'Popover',
  props: {
    title: PropTypes.string
  } as any,

  setup() {
    return {
      configProvider: inject('configProvider') as any
    };
  },

  render() {
    const { $slots, configProvider } = this;
    const { theme } = configProvider;
    console.log('configProvider=========================>', theme);

    const title = (
      <div>
        <div>{ $slots.title }</div>
        <div>{ $slots.content }</div>
      </div>
    );

    const tooltipProps = {
      title
    };

    return (
      <Tooltip props={tooltipProps}>{ $slots.default }</Tooltip>
    );
  }
});

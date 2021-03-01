import { defineComponent, ExtractPropTypes, inject } from '@vue/composition-api';
import PropTypes from '@web/utils/vue-types';
import abstractTooltipProps from './abstractTooltipProps';
import getPlacements from './placements';

import VcTooltip from '../vc-tooltip/index';

const props = abstractTooltipProps();

const tooltipProps: any = {
  ...props,
  title: PropTypes.VNodeChild
};

export type TooltipProps = Partial<ExtractPropTypes<typeof tooltipProps>>;

export default defineComponent({
  name: 'ZTooltip',
  inheritAttrs: false,
  props: tooltipProps,

  setup(props) {
    const getContextPlacements = () => {
      const { builtinPlacements, arrowPointAtCenter, autoAdjustOverflow } = props;
      return (
        builtinPlacements ||
        getPlacements({
          arrowPointAtCenter,
          verticalArrowShift: 8,
          autoAdjustOverflow
        })
      );
    };

    return {
      configProvider: inject('configProvider') as any,
      getContextPlacements
    };
  },

  data() {
    return {
      sVisible: !!this.$props.visible || !!this.$props.defaultVisible
    };
  },

  methods: {
    getPopupDomNode() {
      return (this.$refs.tooltip as any).getPopupDomNode();
    },
    getOverlay() {
      console.log('=========================>');
    }
  },

  render() {
    const { $props, $data, $attrs, $slots } = this;
    const {
      getPopupContainer
    } = $props;
    const { getPopupContainer: getContextPopupContainer } = this.configProvider;
    const sVisible = $data.sVisible;

    const vcTooltipProps = {
      ...$attrs,
      ...$props,
      getTooltipContainer: getPopupContainer || getContextPopupContainer,
      builtinPlacements: this.getContextPlacements(),
      overlay: this.getOverlay(),
      visible: sVisible,
      ref: 'tooltip',
      onVisibleChange: this.handleVisibleChange,
      onPopupAlign: this.onPopupAlign
    };
    return (
      <VcTooltip props={ vcTooltipProps }>
        {$slots.default}
      </VcTooltip>
    );
  }
});

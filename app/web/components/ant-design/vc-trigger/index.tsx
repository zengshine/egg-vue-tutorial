import { defineComponent, ref } from '@vue/composition-api';
import PropTypes from '@web/utils/vue-types';

export default defineComponent({
  name: 'VcTrigger',
  props: {
    title: PropTypes.VNodeChild
  } as any,

  setup() {
    const isPopupVisible = ref(false);
    const togglePopupVisible = () => {
      isPopupVisible.value = !isPopupVisible.value;
    };

    return {
      isPopupVisible,
      togglePopupVisible
    };
  },

  methods: {
    onClick() {
      this.togglePopupVisible();
      console.log('onclick=========================>');
    }
  },

  render() {
    const { $slots, $props, onClick, isPopupVisible } = this;
    const { title } = $props;
    const cProps = {
      click: onClick
    };
    return (
      <div on = { cProps }>
        { isPopupVisible ? title : null }
        {$slots.default}
      </div>
    );
  }
});

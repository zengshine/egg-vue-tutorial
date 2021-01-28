<template>
  <div class="c-cubism_wrapper">
    <div class="js-cubism__wrapper" />
  </div>
</template>

<script lang="ts">
import { LAppDelegate } from '@/cubism/src/lappdelegate';

const CUBISM_SCRIPT_URL = '/public/assets/cubism/core/live2dcubismcore.min.js';

export default {
  name: 'Cubism',

  data() {
    return {

    };
  },

  created() {
    this.loadCubismCoreScript();
  },

  beforeDestroy() {
    this.releaseCubism();
  },

  methods: {
    initCubism() {
      const cubismInstance = LAppDelegate.getInstance();
      const options = {
        selector: '.js-cubism__wrapper',
        width: 400,
        height: 350
      };

      if (!cubismInstance.initialize(options)) {
        return;
      }

      cubismInstance.run();
    },

    releaseCubism() {
      LAppDelegate.releaseInstance();
    },

    loadCubismCoreScript() {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.onload = () => {
        this.initCubism();
      };
      script.src = CUBISM_SCRIPT_URL;
      document.body.appendChild(script);
    }
  }
};
</script>
<style lang='scss' scoped>
.c-cubism_wrapper {

}

.js-cubism__wrapper {
  position: absolute;
  right: 0;
  bottom: 0;
}
</style>

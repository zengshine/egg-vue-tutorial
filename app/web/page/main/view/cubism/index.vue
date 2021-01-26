<template>
  <div class="c-cubism_wrapper">
    <div class="js-cubism__wrapper"></div>
  </div>
</template>

<script lang="ts">
import { LAppDelegate } from '@/cubism/src/lappdelegate';

const CUBISM_SCRIPT_URL = '/public/assets/cubism/core/live2dcubismcore.min.js'

export default {
  name: 'Cubism',

  data() {
    return {

    };
  },

  created() {
    this.loadCubismCoreScript()
  },

  mounted() {
    // this.initCubism();
  },

  beforeDestroy() {
    this.releaseCubism()
  },

  methods: {
    initCubism() {
      if (LAppDelegate.getInstance().initialize({selector: '.js-cubism__wrapper'}) === false) {
        return;
      }

      LAppDelegate.getInstance().run();
    },

    releaseCubism() {
      LAppDelegate.releaseInstance();
    },

    loadCubismCoreScript() {
      const script = document.createElement('script')
      script.type = "text/javascript"
      script.onload = () => {
        this.initCubism()
      }
      script.src = CUBISM_SCRIPT_URL
      document.body.appendChild(script)
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

<template>
  <div class="canvas__wrapper js-three-scene-container" />
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
// import { startup as cubeStartup } from './cube';
// import { startup as parkStartup } from './tokyo';
const parkStartup = import('./tokyo');

const startUpMap = {
  cubeStartup: {
    path: './cube'
  },

  parkStartup
};

let container;

export default defineComponent({
  name: 'Three',

  setup(props) {
    console.log('props=========================>', props);
  },

  data() {
    return {

    };
  },

  mounted() {
    this.startUp('parkStartup');
  },

  methods: {
    async startUp(type) {
      container = document.querySelector('.js-three-scene-container');
      const options = {
        container
      };

      const module = await startUpMap[type];
      module.startup(options);
    }
  }
});
</script>

<style lang='scss' scoped>
.canvas__wrapper {
  height: 100%;
}
</style>

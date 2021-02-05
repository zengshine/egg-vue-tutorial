<template>
  <div>
    <popover title="tsx">
      <template #title>
        <div>title</div>
      </template>
      <template #content>
        <div>content</div>
      </template>
    </popover>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'VueNext',

  setup(props) {
    console.log('props=========================>', props);
  }
});
</script>

<style lang='scss' scoped>

</style>

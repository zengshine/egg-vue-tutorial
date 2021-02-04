<template>
  <section class="column-wrapper">
    <div v-if="isNavVisible"
         class="nav">
      <slot name="nav" />
    </div>
    <div class="content">
      <slot name="content" />
    </div>
  </section>
</template>

<script lang="ts">
import { mapState } from 'vuex';
export default {
  name: 'Column',

  data() {
    return {

    };
  },

  computed: {
    ...mapState([ 'isNavVisible' ])
  }
};
</script>
<style lang='scss' scoped>
.column-wrapper {
  display: flex;
  align-items: stretch;
}

.content {
  flex: 1 1 auto;
}
</style>

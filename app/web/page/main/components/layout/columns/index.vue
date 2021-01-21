<template>
  <section class="column-wrapper">
    <div class="nav">
      <slot name="nav" />
    </div>
    <div class="content">
      <slot name="content">
        <router-view />
      </slot>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Column',

  data() {
    return {

    };
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

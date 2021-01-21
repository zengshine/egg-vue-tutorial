<template>
  <svg class="icon"
       aria-hidden="true">
    <use :xlink:href="'#'+ id" />
  </svg>
</template>
<script>

export default {
  name: 'VIcon',

  props: {
    id: {
      type: String,
      default: ''
    }
  }
};
</script>
<style lang='scss' scoped>

</style>

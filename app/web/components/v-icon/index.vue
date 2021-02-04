<template>
  <svg class="icon"
       aria-hidden="true">
    <use :xlink:href="'#'+ prefix + id" />
  </svg>
</template>
<script>

export default {
  name: 'VIcon',

  props: {
    id: {
      type: String,
      default: ''
    },

    prefix: {
      type: String,
      default: 'icon-'
    }
  }
};
</script>
<style lang='scss' scoped>

</style>

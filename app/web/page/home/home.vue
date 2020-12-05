<template>
  <layout>
    <div v-html="message"> {{message}}</div>
  </layout>
</template>
<style>
</style>

<script type="ts">
  export default {
    data() {
      return {
        message: 'home.vue'
      }
    }
  }
</script>
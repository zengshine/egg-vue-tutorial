<template>
  <Layout>
    <div class="app-wrapper">
      <router-view />
    </div>
  </Layout>
</template>

<script lang="ts">
export default {
  name: 'App',
};
</script>

<style lang="scss" scoped>
.app-wrapper {
  height: 100%;
}
</style>

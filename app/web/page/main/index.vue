<template>
  <Layout>
    <main class="main-wrapper h-p-100">
      <nav class="main-nav">
        <navigation />
      </nav>
      <nav class="main-content">
        <router-view />
      </nav>
    </main>
  </Layout>
</template>

<script lang="ts">
import Navigation from '@view/main/view/navigation/index.vue';
export default {
  name: 'App',

  components: {
    Navigation,
  },
};
</script>

<style lang="scss" scoped>
.main-wrapper {
  display: flex;
  align-items: stretch;
}

.main-nav {
  width: 100px;
}

.main-content {
  width: calc( 100% - 100px );
}
</style>

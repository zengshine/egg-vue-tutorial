<template>
  <Layout v-bind="meta">
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
import Navigation from '@page/main/view/navigation/index.vue';
export default {
  name: 'App',

  components: {
    Navigation
  },

  data() {
    return {
      meta: {
        title: '企知道'
      }
    };
  }
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

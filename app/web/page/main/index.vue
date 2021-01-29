<template>
  <Layout v-bind="meta">
    <main class="main-wrapper h-p-100">
      <nav v-if="isNavVisible"
           class="main-nav">
        <navigation />
      </nav>
      <nav class="main-content">
        <router-view />
      </nav>
    </main>
  </Layout>
</template>

<script lang="ts">
import Navigation from '@web/page/main/view/navigation/index.vue';

import { mapState } from 'vuex';
export default {
  name: 'App',

  components: {
    Navigation
  },

  data() {
    return {
      meta: {
        title: 'NO-UNKNOW'
      }
    };
  },

  computed: {
    ...mapState({
      isNavVisible: (state:any) => state.isNavVisible
    })
  },

  mounted() {
    this.initDomListener();
  },

  beforeDestroy() {
    this.removeDomListener();
  },

  methods: {
    initDomListener() {
      this.removeDomListener();
      document.addEventListener('keydown', this.handleKeyDown);
    },

    removeDomListener() {
      document.removeEventListener('keydown', this.handleKeyDown);
    },

    handleKeyDown(evt) {
      const { keyCode } = evt;
      // Escape
      if (keyCode === 27) {
        this.toggleNav();
      }
    },

    toggleNav() {
      const { isNavVisible } = this;
      this.$store.commit('SET_NAV_VISIBILITY', !isNavVisible);
    }
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
  flex: 1 1 auto;
}
</style>

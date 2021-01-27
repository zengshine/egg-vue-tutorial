<template>
  <!-- 服务端渲染 -->
  <server-tpl v-if="isNodeEnv"
              v-bind="$attrs">
    <slot />
  </server-tpl>
  <!-- 客户端渲染 -->
  <client-tpl v-else
              v-bind="$attrs">
    <slot />
  </client-tpl>
</template>

<script lang="ts">
import ClientTpl from './client-tpl.vue';
import ServerTpl from './server-tpl.vue';

// eslint-disable-next-line no-undef
const isNodeEnv = EASY_ENV_IS_NODE;

export default {
  name: 'Layout',

  components: {
    ClientTpl,
    ServerTpl
  },

  data() {
    return {
      isNodeEnv
    };
  },

  created() {
    console.log('>>EASY_ENV_IS_NODE create', isNodeEnv);
  }
};
</script>

<style lang="scss" src="@web/style/atom.scss"></style>
<style lang="scss" src="@web/style/common.scss"></style>
<style lang="scss" src="@web/style/reset.scss"></style>

<template>
  <!-- 服务端渲染 -->
  <server-tpl v-if="isNodeEnv"
              v-bind="$attrs">
    <slot />
  </server-tpl>
  <!-- 客户端渲染 -->
  <client-tpl v-else>
    <slot />
  </client-tpl>
</template>

<script lang="ts">
import ClientTpl from './client-tpl.vue';
import ServerTpl from './server-tpl.vue';
export default {
  name: 'Layout',

  components: {
    ClientTpl,
    ServerTpl,
  },

  data() {
    return {
      isNodeEnv: EASY_ENV_IS_NODE,
    };
  },

  created() {
    console.log('>>EASY_ENV_IS_NODE create', EASY_ENV_IS_NODE);
  },
};
</script>

<style lang="scss" src="@web/style/atom.scss"></style>
<style lang="scss" src="@web/style/common.scss"></style>

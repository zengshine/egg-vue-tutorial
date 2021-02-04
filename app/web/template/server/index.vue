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

const THEME_MODE = {
  dark: {
    key: 'dark',
    theme: 'dark-theme'
  },

  light: {
    key: 'light',
    theme: 'light-theme'
  }
};

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
    this.initThemeConfig();
  },

  methods: {
    initThemeConfig() {
      // 非浏览器环境，退出执行
      if (isNodeEnv) return;

      const currentTheme = localStorage.getItem('theme');
      const themeConfig = THEME_MODE[currentTheme];
      if (themeConfig) {
        document.body.classList.toggle(themeConfig.theme);
      } else {
        // 系统是否设置了暗色主题
        // const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
        // if (!prefersDarkScheme.matches) return;

        // 默认暗色主题
        document.body.classList.toggle(THEME_MODE.dark.theme);
      }
    }
  }
};
</script>

<style lang="scss" src="@web/style/atom.scss"></style>
<style lang="scss" src="@web/style/common.scss"></style>
<style lang="scss" src="@web/style/reset.scss"></style>
<style lang="scss" src="@web/style/theme.scss"></style>

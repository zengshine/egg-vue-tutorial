<template>
  <section class="nav-wrapper">
    <ul class="nav-top">
      <li class="nav-top-item__wrapper flex-column flex-center">
        <v-icon id="icon-app-menu"
                class="nav-top-item__icon" />
        <span>应用</span>
      </li>
    </ul>
    <div class="nav-bottom" />
  </section>
</template>

<script>
import $api from '@page/main/service/menu';

export default {
  name: 'Navigation',

  data() {
    return {

    };
  },

  create() {
    this.init();
  },

  methods: {
    getMenuList() {
      const res = $api.getMenuList({});
      console.log('getMenuList', res);
    }
  }
};
</script>
<style lang='scss' scoped>
.nav-wrapper {
  height: 100%;
  background: #26292b;
}

.nav-top {
  padding: 10px 0;
}

.nav-top-item__wrapper {
  font-size: 12px;
}

.nav-top-item__icon {
  width: 24px;
  height: 24px;
  margin-bottom: 5px;
  color: bisque;
}
</style>

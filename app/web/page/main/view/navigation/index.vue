<template>
  <section class="nav-wrapper">
    <ul class="nav-top">
      <li v-for="menu of mainMenuList"
          :key="menu.id"
          class="nav-top-item__wrapper flex-column flex-center">
        <v-icon :id="menu.icon"
                class="nav-top-item__icon nav-top-item__animation" />
        <span class="nav-top-item__animation">{{ menu.name }}</span>
      </li>
    </ul>
    <div class="nav-bottom">
      <div class="logout__wrapper"
           @click="handleLogout">
        logout
      </div>
    </div>
  </section>
</template>

<script>
import $api from '@web/page/main/service/menu';
import $userApi from '@web/page/main/service/user';

export default {
  name: 'Navigation',

  data() {
    return {
      mainMenuList: []
    };
  },

  created() {
    this.getMenuList();
  },

  methods: {
    async getMenuList() {
      const res = await $api.getMenuList({});
      this.mainMenuList = res;
    },

    async handleLogout() {
      const { code, data } = await $userApi.logout();
      if (!code) return;

      window.location.href = data.redirectUrl;
    }
  }
};
</script>
<style lang='scss' scoped>
.nav-wrapper {
  height: 100%;
  background: var(--bg-color-l1);
}

.nav-top {
  padding: 10px 0;
}

.nav-top-item__wrapper {
  padding: 15px 0;
  color: bisque;
  cursor: pointer;
  font-size: 12px;
}

.nav-top-item__wrapper:hover {
  background: #111;
  color: #fff;

  & .nav-top-item__animation {
    transform: scale(1.1);
    transition: all 0.1s;
  }
}

.nav-top-item__icon {
  width: 24px;
  height: 24px;
  margin-bottom: 5px;
}

.logout__wrapper {
  cursor: pointer;
  line-height: 50px;
  text-align: center;
}
</style>

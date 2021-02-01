<template>
  <Layout>
    <main class="main-wrapper h-p-100">
      <header class="login-head__wrapper">
        nounknow
      </header>
      <div class="login-body__wrapper">
        <div>
          <ul>
            <li v-for="(authItem, index) of authMethodList"
                :key="index"
                @click="handleAuthenticate(authItem)">
              <v-icon :id="authItem.icon" />
              {{ authItem.name }}
            </li>
          </ul>
        </div>
        <section class="login-form__wrapper">
          <div class="login-form-item__wrapper">
            <input v-model="form.username"
                   type="text">
          </div>
          <div class="login-form-item__wrapper">
            <input v-model="form.password"
                   type="password">
          </div>
          <div class="login-form-item__wrapper">
            <button @click="submit">
              提交
            </button>
          </div>
        </section>
      </div>
    </main>
  </Layout>
</template>

<script lang="ts">
import $api from '@web/page/login/service/login';
const authMethodList = [
  { name: 'github', path: '/passport/github', icon: 'icon-weibo' },
  { name: 'yuque', path: '/passport/yuque' },
  { name: 'weibo', path: '/passport/weibo' },
  { name: 'twitter', path: '/passport/twitter' }
];

export default {
  name: 'App',

  components: {
    // Navigation,
  },

  data() {
    return {
      authMethodList,
      form: {
        username: 'admin',
        password: 'admin'
      }
    };
  },

  methods: {
    async submit() {
      const { data } = await $api.login(this.form);
      const { redirectUrl } = data;
      window.location.href = redirectUrl;
    },

    handleAuthenticate(authInfo) {
      const { path } = authInfo;
      window.location.href = path;
    }
  }
};
</script>

<style lang="scss" scoped>
.main-wrapper {
}

.login-head__wrapper {
  height: 55px;
  line-height: 55px;
}

.login-body__wrapper {
  display: flex;
  justify-content: center;
}

.login-form__wrapper {
  padding: 0 8px;
}

.login-form-item__wrapper {
  padding: 8px 0;
}
</style>

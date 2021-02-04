<template>
  <Layout>
    <main class="main-wrapper h-p-100">
      <header class="login-head__wrapper">
        <div class="login-header__left">
          <v-icon id="known"
                  class="header__left-icon" />
          <span class="header__left-text">NOUNKNOW</span>
        </div>
      </header>
      <div class="login-body__wrapper">
        <ul class="auth-method__wrapper">
          <li v-for="(authItem, index) of authMethodList"
              :key="index"
              class="auth-method-item__wrapper"
              @click="handleAuthenticate(authItem)">
            <v-icon :id="authItem.icon"
                    class="auth-method-icon" />
            <!-- {{ authItem.name }} -->
          </li>
        </ul>
        <section class="login-form__wrapper">
          <div class="login-form-item__wrapper">
            <input v-model="form.username"
                   placeholder="username"
                   class="input--text"
                   type="text">
          </div>
          <div class="login-form-item__wrapper">
            <input v-model="form.password"
                   placeholder="password"
                   class="input--text"
                   type="password">
          </div>
          <div class="login-form-item__wrapper">
            <button class="login-btn"
                    @click="submit">
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
  { name: 'github', path: '/passport/github', icon: 'github' },
  { name: 'github', path: '/passport/weixin', icon: 'weixin' },
  { name: 'yuque', path: '/passport/yuque', icon: 'yuque' },
  { name: 'weibo', path: '/passport/weibo', icon: 'weibo' },
  { name: 'twitter', path: '/passport/twitter', icon: 'twitter' }
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
  --border-color: gainsboro;
}

.login-head__wrapper {
  display: flex;
  height: 60px;
}

.login-header__left {
  display: flex;
  align-items: center;
}

.login-body__wrapper {
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-top: 75px;
}

.header__left-icon {
  margin: 0 5px 0 10px;
  font-size: 35px;
}

.header__left-text {
  font-size: 20px;
  font-weight: bold;
}

.login-form__wrapper {
  padding: 0 8px;
}

.login-form-item__wrapper {
  padding: 8px 0;
}

.input--text {
  width: 220px;
  box-sizing: border-box;
  padding: 0 10px;
  border: 1px solid var(--border-color);
  border-radius: 5px;
  line-height: 32px;
}

.login-btn {
  min-width: 75px;
  box-sizing: border-box;
  padding: 0px 10px;
  border: 1px solid var(--border-color);
  background: transparent;
  border-radius: 5px;
  cursor: pointer;
  line-height: 30px;
}

.login-btn:hover {
  background: ghostwhite;
}

.auth-method__wrapper {
  display: flex;
  margin-bottom: 30px;
}

.auth-method-item__wrapper {
  margin: 0 8px;
  cursor: pointer;
}

.auth-method-item__wrapper:hover {
  transform: scale(1.05);
}


.auth-method-icon {
  font-size: 50px;
}
</style>

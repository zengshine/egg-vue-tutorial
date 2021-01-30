<template>
  <Layout>
    <main class="main-wrapper h-p-100">
      <div>
        <div>
          <input v-model="form.username"
                 type="text">
        </div>
        <div>
          <input v-model="form.password"
                 type="text">
        </div>
        <button @click="submit">
          提交
        </button>
      </div>
    </main>
  </Layout>
</template>

<script lang="ts">
import $api from '@web/page/login/service/login';
export default {
  name: 'App',

  components: {
    // Navigation,
  },

  data() {
    return {
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
  width: calc( 100% - 100px );
}
</style>

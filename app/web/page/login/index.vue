<template>
  <Layout>
    <main class="main-wrapper h-p-100">
      <div>
        <input v-model="form.userName"
               type="text">
        <input v-model="form.password"
               type="text">
        <button @click="submit">
          提交
        </button>
      </div>
    </main>
  </Layout>
</template>

<script lang="ts">
// import Navigation from '@view/main/view/navigation/index.vue';
import $api from '@page/login/service/login';
export default {
  name: 'App',

  components: {
    // Navigation,
  },

  data() {
    return {
      form: {
        userName: '',
        password: '',
      },
    };
  },

  methods: {
    submit() {
      $api.login(this.form);
    },
  },
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

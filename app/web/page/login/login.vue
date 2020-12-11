<template>
  <div class="login">
    <div class="login-form">
      <div class="login-header">
        <img
          src=""
          height="100"
          alt="">
        <p>easyjs</p>
      </div>
      <div class="login-info">
        <input
          v-model="username"
          placeholder="请输入用户名"
          suffix-icon="fa fa-user"
          style="margin-bottom: 18px">

        <input
          v-model="password"
          placeholder="请输入密码"
          suffix-icon="fa fa-keyboard-o"
          type="password"
          style="margin-bottom: 18px">
      </div>

      <button
        type="button"
        style="width: 100%;margin-bottom: 18px"
        onclick="javascript: location.href='/admin/'">
        登录
      </button>
      <div>
        <input
          v-model="remenber"
          type="checkbox"
          class="login-remember">记住密码
        <a
          href="/admin/"
          style="float: right;color: #3C8DBC;font-size: 14px">注册</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Login',
  data() {
    return {
      username: 'admin',
      password: 'admin',
      remenber: false,
    };
  },
};
</script>

<template>
  <div>
    <router-link to="/client">
      客户端渲染
    </router-link>
    <div @click="handleClick">
      点击事件
    </div>
  </div>
</template>

<script>
export default {
  name: 'Server',
  data() {
    return {
      url: '/server',
    };
  },

  methods: {
    handleClick() {
      console.log('handleClick');
    },
  },
};
</script>

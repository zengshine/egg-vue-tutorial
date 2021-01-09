<template>
  <div class="chat-card-wrapper flex-center">
    <img src=""
         class="logo"
         alt="">
    <div class="profile">
      <div class="name single-line-ellipsis">
        {{ data.name }}
      </div>
      <div class="message single-line-ellipsis">
        {{ data.message }}
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ChatCard',

  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },

  data() {
    return {

    };
  }
};
</script>
<style lang='scss' scoped>
.chat-card-wrapper {
  padding: 10px;
}

.logo {
  width: 45px;
  height: 45px;
}

.profile {
  width: calc(100% - 45px);
  height: 45px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  padding-left: 8px;
  line-height: 20px;
}

.message {
  color: gray;
}
</style>

<template>
  <column class="h-p-100">
    <template #nav>
      <div class="chat-box__wrapper page__wrapper h-p-100">
        <chat-card v-for="(item, index) of chatList"
                   :key="index"
                   :data="item" />
      </div>
    </template>
  </column>
</template>

<script>
import Column from '@view/main/components/layout/columns';
import ChatCard from '@view/main/view/chat/components/chat-card/index.vue';
export default {
  name: 'Chat',

  components: {
    Column,
    ChatCard
  },

  data() {
    return {
      chatList: []
    };
  },

  created() {
    this.initComponent();
  },

  methods: {
    initComponent() {
      this.getChatList();
    },

    getChatList() {
      this.chatList = Array(1).fill({
        name: '知云网络',
        message: '深圳知云网络科技有限公司信息'
      });
    }
  }
};
</script>


<style lang="scss">
.page__wrapper {
  background: url("~@assets/images/main/bg-black.jpg") no-repeat left center / cover;
}

.chat-box__wrapper {
  width: 300px;
}
</style>

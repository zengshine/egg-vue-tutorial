<template>
  <column class="h-p-100">
    <!-- 左侧导航 -->
    <template #nav>
      <div class="chat-box__wrapper page__wrapper h-p-100">
        <chat-card v-for="(item, index) of dataList"
                   :key="index"
                   :data="item"
                   @click.native="handleCardClick(item)" />
      </div>
    </template>

    <!-- 二级路由容器 -->
    <template #content>
      <router-view />
    </template>
  </column>
</template>

<script>
import Column from '@web/page/main/components/layout/columns';
import ChatCard from '@web/page/main/view/sub-nav/components/chat-card/index.vue';

import { subNavList } from './const/index';

export default {
  name: 'Chat',

  components: {
    Column,
    ChatCard
  },

  data() {
    return {
      dataList: []
    };
  },

  created() {
    this.initComponent();
  },

  methods: {
    initComponent() {
      this.getDataList();
    },

    getDataList() {
      this.dataList = subNavList;
    },

    handleCardClick({ path }) {
      this.$router.push(path);
    }
  }
};
</script>


<style lang="scss">
.page__wrapper {
  // background: url('~@assets/images/main/bg-black.jpg') no-repeat left center / cover;
}

.chat-box__wrapper {
  width: 300px;
}
</style>

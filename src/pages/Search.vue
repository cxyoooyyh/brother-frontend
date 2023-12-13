<template>
  <form action="/">
    <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
    />
  </form>


  <van-tag v-for="tag in activeIds" :show="true" closeable size="medium" type="primary" @close="close(tag)">
    {{ tag }}
  </van-tag>

  <van-tree-select
      v-model:active-id="activeIds"
      v-model:main-active-index="activeIndex"
      :items="tagList"
  />

  <div style="padding: 0 20px;">
    <van-button type="primary" block @click="ByTagsUserList">搜索</van-button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { showToast } from 'vant';
import {useRouter} from "vue-router";

const value = ref('');
const router =  useRouter();
const ByTagsUserList = () => {
 router.push({
   path: '/userList',
   query: {
     tags: activeIds.value
   }
 })
}

const originTagList = [
  {
    text: '性别',
    children: [
      { text: '男', id: '男' },
      { text: '女', id: '女' },
      { text: '中性', id: '中性' },
    ],
  },
  {
    text: '爱好',
    children: [
      { text: '玩游戏', id: '玩游戏' },
      { text: '跳舞', id: '跳舞' },
      { text: '打球', id: '打球' },
    ],
  }
];
const onSearch = (val) => {
  tagList.value = originTagList.map(item => {
      const parentTag = {...item};
      parentTag.children = item.children.filter(tag => tag.text.includes(val));
      return parentTag;
  })
  console.log(tagList.value)
};
const onCancel = () => showToast('取消');

const close = (tag) => {
  console.log(tag)
  activeIds.value = activeIds.value.filter(item => {
    return item !== tag;
  })
};

const activeIds = ref([]);
const activeIndex = ref(0);

const tagList = ref(originTagList);


</script>

<style scoped>

</style>
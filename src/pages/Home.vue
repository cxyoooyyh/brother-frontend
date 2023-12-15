<template>
  <van-card v-for="item in userList"
            :desc="item.email"
            :title="`${item.userAccount}（${item.planetCode}）`"
            thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg"
  >
    <template #tags>
      <van-tag plain type="primary" v-for="tagItem in item.tags">{{ tagItem }}</van-tag>
    </template>
    <template #footer>
      <van-button size="mini">联系我</van-button>
    </template>
  </van-card>
  <van-empty image="search" description="空" v-if="!userList || userList.length === 0"/>
</template>

<script setup>

import {onMounted, ref} from "vue";
import axios from '../request/request'


const userList = ref([]);

onMounted(() => {
  axios.get('/user/recommend', {
    params: {
        currentPage: 1,
        sizePage: 10
    }
  }).then(function (response) {
    console.log(response.data);
    let data = response.data?.records;
    if (data) {
      data.forEach(item => {
        item.tags = JSON.parse(item.tags);
      });
    }
    userList.value = data;
  })
      .catch(function (error) {
        // 处理错误情况
        console.log(error);
      })
})
</script>

<style scoped>

</style>
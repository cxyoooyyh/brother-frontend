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
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import axios from '../request/request'
import qs from 'qs'

const route = useRoute();

console.log(route.query.tags)


const userList = ref([]);

onMounted(() => {
  console.log(axios)
  axios.get('/user/getTagList', {
    params: {
      tags: route.query.tags
    },
    paramsSerializer: function (params) {
      return qs.stringify(params, { arrayFormat: 'repeat' })
    }
  }).then(function (response) {
        console.log(response.data);
        let data = response.data;
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
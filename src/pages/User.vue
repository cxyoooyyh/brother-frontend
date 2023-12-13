<template>
  <template v-if="user">
    <van-cell-group>
      <van-cell title="昵称" :value="user.username" @click="toEdit('username', '昵称', user.username)"/>
      <van-cell title="账号" :value="user.userAccount" @click="toEdit('userAccount', '账号', user.userAccount)"/>
      <van-cell title="头像" >
        <img style="height: 50px" :src="user.avatarUrl"/>
      </van-cell>
      <van-cell title="性别" :value="user.gender" @click="toEdit('gender', '性别', user.gender)"/>
      <van-cell title="电话" :value="user.phone" @click="toEdit('phone', '电话', user.phone)"/>
      <van-cell title="邮箱" :value="user.email" @click="toEdit('email', '邮箱', user.email)"/>
      <van-cell title="星球编号" :value="user.planetCode"/>
      <van-cell title="注册时间" :value="user.createTime"/>
    </van-cell-group>
  </template>
</template>

<script setup >
import {onMounted, ref} from 'vue';

import {useRouter} from "vue-router";
import {getCurrentUser} from "../server/server.js";

const user = ref({});
const router = useRouter();
const toEdit = (key, c ,value) => {
  router.push({
    path: '/edit',
    query: {
      key,
      niki: c,
      value
    }
  })
}
onMounted(async () => {
  const {data} = await getCurrentUser();
  if(data) {
    user.value = data;
  } else {
    router.push('/login');
  }
})
</script>

<style scoped>

</style>
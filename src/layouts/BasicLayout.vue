<template>
  <van-nav-bar
      title="标题"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
  >
    <template #right>
      <van-icon name="search" size="18" />
    </template>
  </van-nav-bar>

  <router-view />


  <van-tabbar v-model="active" route>
    <van-tabbar-item icon="home-o" name="index" to="/">主页</van-tabbar-item>
    <van-tabbar-item icon="search" name="search" to="/friend">队伍</van-tabbar-item>
    <van-tabbar-item icon="friends-o" name="user" to="/user">个人</van-tabbar-item>
  </van-tabbar>
</template>

<script setup>
import {ref} from "vue";
import {useRouter} from "vue-router";
const router = useRouter();
const onClickLeft = () => router.back();
const onClickRight = () => router.push('/search');
const active = ref("index");

</script>

<style scoped>

</style>
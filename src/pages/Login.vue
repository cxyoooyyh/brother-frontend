<template>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
          v-model="userAccount"
          name="userAccount"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
          v-model="userPassword"
          type="userPassword"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
      />
    </van-cell-group>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>
</template>

<script setup>
import {ref} from "vue";
import axios from "../request/request";
import {useRoute, useRouter} from "vue-router";

const userAccount = ref('');
const userPassword = ref('');
const router = useRouter();
const route = useRoute();
const onSubmit = async () => {
  const { data } = await axios.post("/user/login", {
    userAccount: userAccount.value,
    userPassword: userPassword.value
  })
  if(data.code == 200) {
    router.back();
  }
}
</script>

<style scoped>

</style>
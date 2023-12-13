<template>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
          v-model="currentUser.value"
          :name="currentUser.key"
          :label="currentUser.niki"
          :rules="[{ required: true, message: '请填写用户名' }]"
      />
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
    </van-cell-group>
  </van-form>
</template>

<script setup>
import {ref} from "vue";
import {useRoute, useRouter} from "vue-router";
import axios from "../request/request";

import {showToast,showSuccessToast} from "vant";
import 'vant/es/toast/style'

const route = useRoute();
const router = useRouter();
const currentUser = ref(route.query)
const onSubmit = async () => {
  const { data } = await axios.post("/user/update",{
    [currentUser.value.key] : currentUser.value.value,
    id: 2
  })
  if(data.code === 200) {
    showSuccessToast('成功文案');
    //showToast('修改成功！');
    await router.push('/user');
  } else {
    showToast('请先登录！');
    await router.push('/login')
  }
}
</script>

<style scoped>

</style>
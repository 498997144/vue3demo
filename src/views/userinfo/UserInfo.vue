<template>
  <div class="user-info">
    <div>{{ user.name }}</div>
    <div>{{ user.email }}</div>
    <div>
      <button @click="logout">登出</button>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue"
import {useRouter} from 'vue-router'

const router = useRouter()
import userService from '@api/user/userService.js'
import commonService from "@api/common/commonService.js"

const user = ref({})

onMounted(() => {
  getUserInfo();
});

async function getUserInfo() {
  user.value = await userService.getUserInfo()
}

async function logout() {
  try {
    await commonService.logout()
    router.replace('/login')
  } catch (error) {
    console.log(error)
  }
}

</script>

<style scoped>

</style>
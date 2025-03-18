<template>
  <div>
    <div>
      <label for="email">Email</label>
      <input v-model="loginForm.email" type="email" id="email" name="email" placeholder="email">
    </div>
    <div>
      <label for="password">password</label>
      <input v-model="loginForm.password" type="password" id="password" name="password" placeholder="password">
    </div>
    <div>
      <button @click="login">登入</button>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue"
import {useRouter} from 'vue-router'

const router = useRouter()
import commonService from "@api/common/commonService.js"

const loginForm = ref({
  email: 'test@example.com',
  password: 'password'
})

async function login() {
  alert(123)
  // try {
  //   const data = await commonService.login(loginForm.value)
  //   if (data) {
  //     router.push('/userInfo')
  //   }
  // } catch (error) {
  //   console.log(error)
  // }

}

</script>

<style scoped>

</style>
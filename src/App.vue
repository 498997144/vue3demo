<template>
  <router-view/>
</template>
<script setup>
import commonService from "@api/common/commonService.js"
try {
  commonService.getCsrfToken()
}catch (error){
  console.log(error)
}
</script>
<style scoped>
</style>

<!--
 * @Author: m
 * @Date: 2024-10-30 11:34:33
 * @LastEditTime: 2024-11-04 13:46:31
 * @Description: 
 * @FilePath: \vue3_h5\src\views\home\home.vue
-->
<template>
  <div> home
  </div>
</template>

<script setup>
import { ref, reactive ,onMounted } from "vue"
import { getApiHomeData } from '@/api/home'

const getHomeData = async param => {
    let pdata = await getApiHomeData(param)
    console.log(pdata)
}

onMounted(() => {
    getHomeData()
})
</script>

<style scoped lang="scss">

</style>

<!--
 * @Author: myp
 * @Date: 2024-10-28 14:05:28
 * @LastEditTime: 2024-10-30 11:51:48
 * @Description: 
 * @FilePath: \vue3_h5\src\views\index.vue
-->
<template>
  <main>
    <div>
      <van-tabbar v-model="index_active">
        <van-tabbar-item icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item icon="search">标签</van-tabbar-item>
        <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
        <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
      </van-tabbar>
    </div>
  </main>
</template>
<script setup>
import { ref } from 'vue';
import useLocaleStore from "../stores/localeStore.js"
const localeStore = useLocaleStore()

const index_active = ref(0);

</script>

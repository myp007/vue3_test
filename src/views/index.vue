<!--
 * @Author: myp
 * @Date: 2024-10-28 14:05:28
 * @LastEditTime: 2024-10-31 14:41:08
 * @Description: 
 * @FilePath: \vue3_h5\src\views\index.vue
-->
<template>
  <div class="tabbar">
    <tabbar :tabs='tabs'/> 
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>
<script setup>
import { onMounted } from 'vue'
import tabbar from '@/components/tabbar/index.vue';
 
const tabs = [
  { title: '首頁', path: '/home' },
  { title: '搜索', path: '/search' },
  { title: '我的', path: '/user' },
];
 
onMounted(() => {
 
})
</script>
<style scoped lang='scss'>

</style>

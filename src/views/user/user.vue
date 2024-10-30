<!--
 * @Author: myp
 * @Date: 2024-10-28 15:30:46
 * @LastEditTime: 2024-10-28 16:52:32
 * @Description: 
 * @FilePath: \block_h5\src\views\AboutView.vue
-->
<template>
  <div class="about">
    <h1>測試：{{ $t('lang.title') }}</h1>
  </div>
</template>
<script setup>
import useLocaleStore from "../stores/localeStore.js"
const localeStore = useLocaleStore()
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

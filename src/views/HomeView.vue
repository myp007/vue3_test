<!--
 * @Author: duanxin
 * @Date: 2024-10-28 14:05:28
 * @LastEditTime: 2024-10-29 17:30:47
 * @Description: 
 * @FilePath: \block_h5\src\views\HomeView.vue
-->
<template>
  <main>
    <div>多语言測試：
      <button @click="changeLocale">{{localeStore.locale==='cn'?'中文 / English':'English / 中文'}}</button>
      <h1>{{ $t('lang.title') }}</h1>
    </div>
  </main>
</template>
<script setup>
import { ref } from 'vue';
import useLocaleStore from "../stores/localeStore.js"
const localeStore = useLocaleStore()
const changeLocale = () => {
  let temp = localeStore.locale === 'cn' ? 'en' : 'cn'
  localeStore.setLocale(temp)
}
defineOptions({name: 'Locale'})

const show = ref(false);
const showPopup = () => {
  show.value = true;
};
</script>

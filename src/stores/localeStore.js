/*
 * @Author: duanxin
 * @Date: 2024-10-28 15:24:27
 * @LastEditTime: 2024-10-28 16:50:24
 * @Description: 
 * @FilePath: \block_h5\src\stores\localeStore.js
 */
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import i18n from "../vueI18n/index.js";

const useLocaleStore = defineStore('locale', {
  state: () => {
      return {
          locale: localStorage.getItem('lang') || 'cn',
      }
  },
  actions: {
      setLocale(locale) {
          console.log(locale)
          this.locale = locale
          localStorage.setItem('lang', locale)
          i18n.global.locale.value = locale
      },
  },
  getters: {},
})
export default useLocaleStore

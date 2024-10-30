/*
 * @Author: myp
 * @Date: 2024-10-28 16:05:07
 * @LastEditTime: 2024-10-28 16:15:22
 * @Description: 
 * @FilePath: \work\block_h5\src\vueI18n\index.js
 */
import { createI18n} from "vue-i18n";
import cn from './cn.js';
import en from './en.js';
import vn from './vn.js';
import kz from './kaza.js'
import br from './br.js';
import id from './ind.js';
import fr from './fr.js';
import ru from './kaza.js';

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: localStorage.getItem('lang') || 'cn',
  messages: {
    cn,
    en,
    vn,
    kz,
    br,
    id,
    fr,
    ru
  },
})

export default i18n
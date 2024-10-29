import { fileURLToPath, URL } from 'node:url'

import { defineConfig ,loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'



export default defineConfig(({command,mode}) => {  
  const config = loadEnv(mode,'./')
  console.log(config.VITE_TARGET)
  return {
    base: "./",
    server: {
      open: false, 
      host: "127.0.0.1",
      port: 3456,
      proxy: {
        "^/api/": {
          target: config.VITE_TARGET, // 从环境变量中获取
          changeOrigin: true /* 允许跨域 */,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
    plugins: [
      vue(),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  };
});

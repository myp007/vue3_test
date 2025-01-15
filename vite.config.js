/*
 * @Author: m
 * @Date: 2024-10-28 15:24:27
 * @LastEditTime: 2024-11-04 13:42:19
 * @Description: 
 * @FilePath: \vue3_h5\vite.config.js
 */
import { fileURLToPath, URL } from 'node:url'

import { defineConfig ,loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteMockServe } from 'vite-plugin-mock'



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
      viteMockServe({
        mockPath: './src/mock/', // 设置模拟数据的存储文件夹
        supportTs: false, // 是否读取ts文件模块
        logger: false, // 是否在控制台显示请求日志
        localEnabled: true, // 设置是否启用本地mock文件
        prodEnabled: false // 设置打包是否启用mock功能
    }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  };
});

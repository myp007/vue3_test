/*
 * @Author: m
 * @Date: 2024-11-02 11:02:45
 * @LastEditTime: 2024-11-04 13:58:32
 * @Description: 这是首页的接口
 * @FilePath: \vue3_h5\src\api\home.js
 */
import http from '@/utils/http/request'
import axios from 'axios'

export const getApiHomeData = param => axios.get('/home/getHomeData', { params: param })

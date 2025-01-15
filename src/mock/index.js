/*
 * @Author: m
 * @Date: 2024-11-02 10:52:42
 * @LastEditTime: 2024-11-02 11:10:16
 * @Description:
 * @FilePath: \website\src\mock\index.js
 */
import Mock from 'mockjs'
import homeApi from './data/home.js'
import userApi from './data/user.js'
Mock.mock('/home/getHomeData', homeApi.getHomeData)
Mock.mock('/user/login', userApi.userData)

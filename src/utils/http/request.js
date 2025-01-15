import axios from 'axios'
import { handleErrorResponse } from './status.js'
// 创建 axios 实例
const service = axios.create({
    baseURL: '/api', // API 基础地址
    timeout: 10000, // 请求超时时间
    withCredentials: true // 跨域请求时是否需要使用凭证
})

// 请求拦截器
service.interceptors.request.use(
    config => {
        // 在发送请求之前做一些事情，例如添加 token
        const token = localStorage.getItem('token') // 获取 token
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    error => {
        // 请求错误处理
        window.console.error('请求错误:', error)
        return Promise.reject(error)
    }
)

// 响应拦截器
service.interceptors.response.use(
    response => {
        // 对响应数据做点什么
        return response.data
    },
    error => {
        // 响应错误处理
        handleErrorResponse(error.status)
        return Promise.reject(error)
    }
)

/**
 * 发送 GET 请求
 * @param {string} url 请求 URL
 * @param {object} params 查询参数
 * @returns {Promise} 返回 Promise 对象
 * @param callback 回调方法
 */
const get = (url, params, callback) => {
    return new Promise((resolve, reject) => {
        service
            .get(url, { params })
            .then(response => {
                callback ? resolve(callback(response.data)) : resolve(response.data)
                
            })
            .catch(error => {
                reject(error)
            })
    })
}

/**
 * 发送 POST 请求
 * @param {string} url 请求 URL
 * @param {object} data 请求体数据
 * @returns {Promise} 返回 Promise 对象
 * @param callback 回调方法
 */
const post = (url, data, callback) => {
    return new Promise((resolve, reject) => {
        service
            .post(url, qs.stringify(data))
            .then(response => {
                callback ? resolve(callback(response.data)) : resolve(response.data)
            })
            .catch(error => {
                reject(error)
            })
    })
}

/**
 * 发送 PUT 请求
 * @param {string} url 请求 URL
 * @param {object} data 请求体数据
 * @returns {Promise} 返回 Promise 对象
 * @param callback 回调方法
 */
const put = (url, data, callback) => {
    return new Promise((resolve, reject) => {
        service
            .put(url, data)
            .then(response => {
                callback ? resolve(callback(response.data)) : resolve(response.data)
            })
            .catch(error => {
                handleErrorResponse(error)
                reject(error)
            })
    })
}

/**
 * 发送 DELETE 请求
 * @param {string} url 请求 URL
 * @param {object} data 请求体数据
 * @returns {Promise} 返回 Promise 对象
 * @param callback 回调方法
 */
const del = (url, data, callback) => {
    return new Promise((resolve, reject) => {
        service
            .delete(url, { data })
            .then(response => {
                callback ? resolve(callback(response.data)) : resolve(response.data)
            })
            .catch(error => {
                reject(error)
            })
    })
}

export default {
    get,
    post,
    put,
    del
}

import http from '@/utils/http/request'

export const userApi = data => {
    return http.post('/user/login', data)
}

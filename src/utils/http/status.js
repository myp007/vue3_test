export function handleErrorResponse(status) {
    // 根据不同的状态码进行处理
    switch (status) {
        case 400:
            // Bad Request
            window.console.error('请求错误:', status)
            break
        case 401:
            // Unauthorized
            window.console.error('无权限访问:', status)
            break
        case 403:
            // Forbidden
            window.console.error('无权限访问:', status)
            break
        case 404:
            // Not Found
            window.console.error('资源未找到:', status)
            break
        case 500:
            // Internal Server Error
            window.console.error('服务器内部错误:', status)
            break
        case 503:
            // Internal Server Error
            window.console.error('服务器内部错误:', status)
            break
        case 504:
            // Internal Server Error
            window.console.error('服务器内部错误:', status)
            break
        default:
            // 其他错误处理
            window.console.error('未知错误:', status)
            break
    }
}

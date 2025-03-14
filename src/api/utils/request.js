/**
 * 网络请求全局配置
 */
import axios from 'axios'
import router from "@/router"
import commonService from "@api/common/commonService.js"

// baseurl
axios.defaults.baseURL = APP_ENV === 'development' ? '/api' : BASE_URL
// 请求超时时间
axios.defaults.timeout = 30000
axios.defaults.withCredentials = true
// 状态码处理
const successCodeHandler = {
  200: (response) => {
  },
  204: (response) => {
  },
}


const errorCodeHandler = {
  // csrf token失效处理
  419: async (err) => {
    await commonService.getCsrfToken()
    const response = await axios.request(err.config)
    // 登陆接口跳转页面,其它情况不做处理
    if (response.config.url === '/login') {
      router.replace('/userinfo')
    }
    return response;
  },
  401: (err) => {
    // 未登陆状态码处理
    router.replace('/login')
  },
}

// axios请求拦截
axios.interceptors.request.use(
  (config) => {
    if (config.method === 'get') {
      // url缓存
      config.params['time'] = (new Date()).getTime()
    }
    return config
  },
  err => Promise.reject(err)
);

// 响应拦截
axios.interceptors.response.use(
  (response) => {
    successCodeHandler[response.status]?.(response)
    return response;
  },
  (err) => {
    if (err.code === "ERR_NETWORK") {
      // 处理已登陆时调用登陆接口重定向问题
      router.replace('/userinfo')
    }
    errorCodeHandler[err.status]?.(err)
    return Promise.reject(err);
  }
);
export default axios

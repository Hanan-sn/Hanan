import axios from 'axios'
import util from '../common/utils/util'

export default (url = '', data = {}, type = 'GET') => {
  const ACCESS_TOKEN = 'Access-Token'
  axios.interceptors.request.use(config => {
    const token = util.cookies.get(ACCESS_TOKEN)
    if (token && token !== 'undefined') {
      config.headers['Authorization'] = 'Bearer ' + token // 让每个请求携带自定义 token 请根据实际情况自行修改
    }
    return config
  })
  return new Promise((resolve, reject) => {
    let promise
    if (type === 'GET') {
      let dataStr = '' // 数据拼接字符串
      Object.keys(data).forEach((key) => {
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      // 发送GET请求
      promise = axios.get(url)
    } else {
      promise = axios.post(url, data)
    }
    promise.then((res) => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}

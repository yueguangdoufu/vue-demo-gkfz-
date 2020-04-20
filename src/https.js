import axios from 'axios'
// const remote = require('electron').remote
// const global = remote.getGlobal('appData')
// const { baseURL, basePORT } = require('../api/global_variable')

axios.defaults.timeout = 5000
axios.defaults.baseURL = 'http://localhost:8081/'

// http request 拦截器
// axios.interceptors.request.use(
//   config => {
//     // const token = getCookie('名称');注意使用的时候需要引入cookie方法，推荐js-cookie
//     // config.data = JSON.stringify(config.data);
//     config.headers = {
//       'Content-Type': 'application/json',
//       Authorization: (global.token === undefined || global.token === '') ? '123456789' : global.token
//     }
//     // if(token){
//     //   config.params = {'token':token}
//     // }
//     console.log('加上token: ' + config.headers.Authorization)
//     return config
//   },
//   error => {
//     return Promise.reject(err)
//   }
// )

// // http response 拦截器 未处理
// axios.interceptors.response.use(
//   response => {
//     if (response.data.status === 2002) {
//       router.push({
//         path: '/login',
//         querry: { redirect: router.currentRoute.fullPath }// 从哪个页面跳转
//       })
//     } else if (response.data.status !== 0) {
//       console.log(response.data.msg)
//       return
//     }
//     return response
//   },
//   error => {
//     return Promise.reject(error)
//   }
// )

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function get (url, params = {}) {
  return new Promise((resolve, reject) => {
    // + global.appConfig.setting.source
    axios.get(url, {
      params: params
    })
      .then(response => {
        resolve(response.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}

/**
* 封装patch请求
* @param url
* @param data
* @returns {Promise}
*/

export function patch (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.patch(url, data)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}

/**
* 封装put请求
* @param url
* @param data
* @returns {Promise}
*/

export function put (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.put(url, data)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}

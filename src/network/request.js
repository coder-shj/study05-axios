import axios from 'axios'
// 封装理由: 使用第三方框架时,最好进行封装,这样在以后第三方框架失效或者不维护时,能够更加容易的进行维护

// 方案四
export function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:8000/api/w6',
    timeout: 5000
  })

  // 2.axios的拦截器
  // 请求的拦截器  use内有两参数: 请求成功和请求失败(请求失败一般不会出现)
  instance.interceptors.request.use(config => {
    // console.log(config);
    // 拦截器的作用
    // 1.比如config中的一些信息不符合服务器的要求

    // 2.比如每次发送网络请求时,都希望在界面中显示一个请求的图标

    // 3.某些网络请求(比如登录(token)),必须携带一些特殊的信息

    // 拦截后需要return,不然会到catch中
    return config
  },err => {
    console.log(err);
  })
  // 响应的拦截器
  instance.interceptors.response.use(res => {
    console.log(res);//拿到的是请求的结果信息

    // 拦截后需要return出最终的信息,如果不返回的话,最终获取的为undefined
    return res.data
  },err => {
    console.log(err);
  })

  // 3.发送真正的网络请求
  return instance(config)
}

// 方案三
// export function request(config) {
//   return new Promise((resolve, reject) => {
//     // 1.创建axios的实例
//     const instance = axios.create({
//       baseURL: 'http://152.136.185.210:8000/api/w6',
//       timeout: 5000
//     })

//     // 发送真正的网络请求
//     instance(config)
//       .then(res => {
//         resolve(res)
//       })
//       .catch(err => {
//         reject(err)
//       })
//   })
// }

// 方案二
// export function request(config) {
//   // 1.创建axios的实例
//   const instance = axios.create({
//     baseURL: 'http://152.136.185.210:8000/api/w6',
//     timeout: 5000
//   })

//   // 发送真正的网络请求
//   instance(config.baseConfig)
//     .then(res => {
//       config.success(res);
//     })
//     .catch(err => {
//       config.failure(err)
//     })
// }

// 方案一
// export function request(config, success, failure) {
//   // 1.创建axios的实例
//   const instance = axios.create({
//     baseURL: 'http://152.136.185.210:8000/api/w6',
//     timeout: 5000
//   })

//   // 发送真正的网络请求
//   instance(config)
//     .then(res => {
//       success(res);
//     })
//     .catch(err => {
//       failure(err)
//     })
// }

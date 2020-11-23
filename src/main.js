import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

import axios from 'axios'

// 1、axios的基本使用
// axios({
//   url: 'http://123.207.32.32:8000/home/multidata',
//   method: 'get' //请求方式  也可以直接用axios.get做开头直接表示类型  默认为get请求
// }).then(res => {
//   console.log(res)
// })

// axios({
//   //url: 'http://123.207.32.32:8000/home/data?type=sell&page=3'  //一种写法
//   //另一种写法  专门针对get请求的参数拼接
  // url: 'http://123.207.32.32:8000/home/data',
  // params: {
  //   type: 'sell',
  //   page: 3
  // }
// }).then(res => {
//   console.log(res);
// })


// 2、使用axios发送并发请求
// axios.all([
//   axios({
//     url: 'http://123.207.32.32:8000/home/multidata'
//   }),
//   axios({
//     url: 'http://123.207.32.32:8000/home/data',
//     params: {
//       type: 'sell',
//       page: 3
//     }
//   })
// ])
// // .then(results => {  //数组方式
// //   console.log(results);
// // })
// .then(axios.spread((res1, res2) => {  //展开方式
//   console.log(res1)
//   console.log(res2);
// }))


// 3、使用全局的axios和对应的配置进行网络请求
// 配置全局基本信息
// axios.defaults.baseURL = 'http://123.207.32.32:8000'  //根URL，会自动加在URL之前
// axios.defaults.baseURL = 'http://152.136.185.210:8000/api/w6'
// axios.defaults.timeout = 5000  //设置超时时间,单位为毫秒  也可在内部单独设置

// axios.all([
//   axios({
//     url: '/home/multidata'
//   }),
//   axios({
//     url: '/home/data',
//     params: {
//       type: 'sell',
//       page: 3
//     }
//   })
// ])
// .then(axios.spread((res1, res2) => {  //展开方式
//   console.log(res1)
//   console.log(res2);
// }))


// 4、创建对应的axios的实例
// const instance1 = axios.create({//可以在其内配置实力内的配置信息
//   baseURL: 'http://152.136.185.210:8000/api/w6',
//   timeout: 5000
// })

// instance1({
//   url: '/home/multidata'
// })
// .then(res => {
//   console.log(res)
// })

// instance1({
//   url: '/home/data',
//   params: {
//     type: 'pop',
//     page: 3
//   }
// })
// .then(res => {
//   console.log(res);
// })

// const instance2 = axios.create({
//   baseURL: 'http://123.207.32.32:8000',
//   timeout: 5000,
//   // headers: {}//也可以配置header的信息
// })


// 5.封装request模块
import {request} from './network/request'

// 方案一
// request({
//   url: '/home/multidata'
// },
// success => {
//   console.log(success);
// },
// failure => {
//   console.log(failure);
// })

// 方案二
// request({
//   baseConfig: {
//     url: '/home/multidata'
//   },
//   success: suc => {
//     console.log(suc);
//   },
//   failure: fail => {
//     console.log(fail);
//   }
// })

// 方案三/四
request({
  url: '/home/multidata'
}).then(res => {
  console.log(res);
})
.catch(err => {
  console.log(err);
})

import axios from 'axios'
import Vue from 'vue'
import { Message } from 'element-ui'

const instance = axios.create({
  baseURL: process.env.API_HOST,
  timeout: 6500,
  // headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'}
});
// 通过instance.defaults重新设置超时时间为2.5s，因为优先级比系统默认高
// instance.defaults.timeout = 2500;
// instance.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

// 添加一个响应拦截器
// 添加一个请求拦截器
instance.interceptors.request.use(function (config) {
  // Do something before request is sent
  // const toast = Toast.loading({
  //   duration: 0,       // 持续展示 toast
  //   forbidClick: true, // 禁用背景点击
  //   loadingType: 'spinner',
  // });
  return config;
}, function (error) {
  // Do something with request error
  console.log(error);
  return Promise.reject(error);
});

instance.interceptors.response.use(function (response) {
// Toast.clear();
const res = response.data;
return res;
}, function (error) {
  // Do something with response error
  // Toast.clear();
  Message({
    message: '请求超时',
    type: 'error'
  })
  return Promise.reject(error);
});

export default instance
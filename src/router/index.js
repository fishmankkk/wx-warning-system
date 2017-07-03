import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import routes from '../router/routes'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(Router)
Vue.use(require('vue-wechat-title'))

const router = new Router({
  mode: 'hash', // 设置路由模式 可选值: "hash" | "history" | "abstract"，默认"hash"
  linkActiveClass: 'u-link--Active', // 这是链接激活时的class
  // base: '/app/', // 这个是设置根目录路径，一般用不到，默认'/'
  routes // 挂载路由集合 后面会说
})
// 导出router对象
export default router


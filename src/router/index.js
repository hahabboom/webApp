import Vue from 'vue'
import VueRouter from 'vue-router'
// import { clearLoginInfo } from '@/utils'
// import { isURL } from '@/utils/validate'

Vue.use(VueRouter)

/* 路由懒加载：https://router.vuejs.org/zh/guide/advanced/lazy-loading.html */
// const $import = view => () => import(`@/views/${view}.vue`) // error: https://stackoverflow.com/questions/59851788/import-eslint-cannot-read-property-range-of-null-occurred-while-linting
const $import = view => () => import('/src/' + view + '.vue')

/* 定义路由 */
const globalRoutes = [
  // { path: '/404', component: $import('global/404'), name: '404', meta: { title: '404 Not found' } },
  {path: '/', redirect: '/command'},
  { path: '/command', component: $import('modules/command/command'), name: 'command', meta: { title: '推荐', menuId: 10 } },
  { path: '/rank', component: $import('modules/rank/rank'), name: 'rank', meta: { title: '排行', menuId: 11 } },
  { path: '/singer', component: $import('modules/singer/singer'), name: 'singer', meta: { title: '歌手', menuId: 12 } },
  { path: '/search', component: $import('modules/search/search'), name: 'search', meta: { title: '搜索', menuId: 13 } }
  // { path: '/login', component: $import('global/login'), name: 'login', meta: { title: '登录' } },
  // { path: '/main', component: $import('main/main'), name: 'home', meta: { title: '首页' } }
] // 全局路由



// const getRouteType = (to, globalRoutes) => {
//   let temp = []
//   for (let i = 0; i < globalRoutes.length; i++) {
//     if (to.path === globalRoutes[i].path) {
//       return 'global'
//     } else if (globalRoutes[i].children && globalRoutes[i].children.length >= 1) {
//       temp = temp.concat(globalRoutes[i].children)
//     }
//   }
//   return temp.length >= 1 ? getRouteType(to, temp) : 'main'
// }
//
// function fnAddDynamicMenuRoutes (menuList = [], routes = []) {
//   var temp = []
//   for (var i = 0; i < menuList.length; i++) {
//     if (menuList[i].list && menuList[i].list.length >= 1) {
//       temp = temp.concat(menuList[i].list)
//     } else if (menuList[i].url && /\S/.test(menuList[i].url)) {
//       menuList[i].url = menuList[i].url.replace(/^\//, '')
//       var route = {
//         path: menuList[i].url.replace('/', '-'),
//         component: null,
//         name: menuList[i].url.replace('/', '-'),
//         meta: {
//           parentId: menuList[i].parentId, // 如果只有一级导航， 此值为0
//           menuId: menuList[i].menuId,
//           title: menuList[i].name,
//           isDynamic: true,
//           isTab: true,
//           iframeUrl: ''
//         }
//       }
//       // url以http[s]://开头, 通过iframe展示
//       if (isURL(menuList[i].url)) {
//         route.path = `i-${menuList[i].menuId}`
//         route.name = `i-${menuList[i].menuId}`
//         route.meta.iframeUrl = menuList[i].url
//       } else {
//         try {
//           route.component = $import(`modules/${menuList[i].url}`) || null
//         } catch (e) {}
//       }
//       routes.push(route)
//     }
//   }
//   if (temp.length >= 1) {
//     fnAddDynamicMenuRoutes(temp, routes)
//   } else {
//     mainRoutes.name = 'main-dynamic'
//     mainRoutes.children = routes
//     router.addRoutes([
//       mainRoutes,
//       { path: '*', redirect: { name: '404' } }
//     ])
//     sessionStorage.setItem('dynamicMenuRoutes', JSON.stringify(mainRoutes.children || '[]'))
//     console.log('%c!<-------------------- 动态(菜单)路由 s -------------------->', 'color:blue')
//     console.log(mainRoutes.children)
//     console.log('%c!<-------------------- 动态(菜单)路由 e -------------------->', 'color:blue')
//   }
// }
//
/* 创建 router 实例 */
const router = new VueRouter({
  // Router 构建选项：https://router.vuejs.org/zh/api/#router-%E6%9E%84%E5%BB%BA%E9%80%89%E9%A1%B9
  mode: 'hash',
  routes: globalRoutes,
  // routes: globalRoutes,
  scrollBehavior: () => ({ x: 0, y: 0 }),
  isAddDynamicMenuRoutes: false // 初始化自定义属性：是否存在动态菜单列表
})

// console.log(globalRoutes.concat(mainRoutes))

/* 导航守卫注册 */
// router.beforeEach((to, from, next) => {
//   // 注册全局前置守卫：https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#%E5%85%A8%E5%B1%80%E5%89%8D%E7%BD%AE%E5%AE%88%E5%8D%AB
//   if (router.options.isAddDynamicMenuRoutes || getRouteType(to, globalRoutes) === 'global') {
//     // 动态菜单列表（页面路由）已存在 或 当前访问的页面属于全局路由
//     next()
//   } else {
//     // 获取并保存动态菜单列表（页面路由），追加到 history 栈
//     // 添加到本地存储
//     $axios({
//       url: '/sys/menu/nav',
//       method: 'get'
//     }).then(({ data }) => {
//       console.log(data)
//       if (data && data.code === 0) {
//         fnAddDynamicMenuRoutes(data.menuList)
//         router.options.isAddDynamicMenuRoutes = true
//         sessionStorage.setItem('menuList', JSON.stringify(data.menuList || '[]'))
//         sessionStorage.setItem('permissions', JSON.stringify(data.permissions || '[]'))
//         next({ ...to, replace: true })
//       } else {
//         sessionStorage.setItem('menuList', '[]')
//         sessionStorage.setItem('permissions', '[]')
//         next()
//       }
//       // next()
//     })
//     //   .catch(error => {
//     //   router.push({ name: 'login' }).then(() => console.error(`错误信息：${error} 菜单列表和权限请求失败，跳转至登录页......`))
//     // })
//   }
// })

export default router

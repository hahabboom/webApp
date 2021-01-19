import Vue from 'vue'
import App from './App.vue'
import router from './router'
import fastclick from 'fastclick'
import '@/assets/icon/iconfont.css'
// 移动设备上的浏览器默认会在用户点击屏幕大约延迟300毫秒后才会触发点击事件，这是为了检查用户是否在做双击。为了能够立即响应用户的点击事件，才有了FastClick。


Vue.config.productionTip = false
fastclick.attach(document.body)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

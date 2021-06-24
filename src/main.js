import Vue from 'vue'
import App from './App.vue'
import 'element-ui'
Vue.config.productionTip = false
import element from './element'//将按需引入的组件构成一个单文件
Vue.use(element) //按需引入必须要使用插件的形式才能够实现将组件的引入变成单个文件
new Vue({
  render: h => h(App),
}).$mount('#app')

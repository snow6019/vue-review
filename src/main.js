import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),//渲染App组件
}).$mount('#app')//挂载到index.html中的#app元素上
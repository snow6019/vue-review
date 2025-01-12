import Vue from 'vue'
import App from './App.vue'


Vue.config.productionTip = false


new Vue({
  render: h => h(App),//渲染App组件
}).$mount('#app')//挂载到index.html中的#app元素上

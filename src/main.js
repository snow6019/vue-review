import Vue from 'vue'
import App from './修饰符.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),//渲染App组件
}).$mount('#app')//挂载到index.html中的#app元素上

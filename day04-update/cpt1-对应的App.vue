<template>
  <div>
    <!-- 父组件向子组件传参 props -->
    <cpt-1 :obj="{name:'张三',age:22}"></cpt-1>
    <cpt-1 :obj="{name:'李四',age:23}"></cpt-1>
    <cpt-1 :obj="{name:'王五',age:24}"></cpt-1>
  </div>
</template>

<script>
import cpt1 from './components/cpt-1.vue'
export default {
    data(){
        return{
            
        }
    },
    components:{
      cpt1
    }
}
</script>

<style>

</style>
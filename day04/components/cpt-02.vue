<template>
  <div>
    <h1>获取组件对象</h1>
  </div>
</template>

<script>
export default {
    data(){
        return {
            info:"我是子组件内部的数据"
        }
    },
    methods:{
        fn(){
            console.log("我是子组件内部的事件")
        }
    }
}
</script>

<style>

</style>
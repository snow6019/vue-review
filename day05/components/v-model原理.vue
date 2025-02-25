<template>
  <div>
    <h1>v-model原理</h1>
    <input type="text" v-model="msg"><br>
    <input type="text" v-bind:value="info" @input="fn">
  </div>
</template>

<script>
export default {
    data(){
        return{
            msg:"初始化数据1",
            info:"初始化数据2"
        }
    },
    methods:{
      fn(e){
        this.info = e.target.value
      }
    }
}
</script>

<style>

</style>
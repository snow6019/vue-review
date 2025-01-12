<template>
  <div ref="box">
    <p ref="p">我是子组件内的P标签</p>
    <button @click="get">get</button>
  </div>
</template>

<script>
export default {
    methods:{
        get(){
            console.log(this.$refs)
            console.log(this.$refs.p)
        }
    }
}
</script>

<style>

</style>
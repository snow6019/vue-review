<template>
  <div>
    <ul>
        <li>名称:{{obj.name}}</li>
        <li>价格:{{obj.price}}</li>
        <li>数量:{{obj.num}}</li>
        <li><button @click="sale">sale</button></li>
    </ul>
  </div>
</template>

<script>
export default {
    props:['obj'],
    methods:{
      sale(){
        this.$emit('calcNum',this.obj)
      }
    }
}
</script>

<style>

</style>
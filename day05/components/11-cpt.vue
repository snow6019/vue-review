<template>
  <div>
    <slot :row="info"></slot>
  </div>
</template>

<script>
export default {
    data(){
        return{
            info:{
                name:'张三',
                age:22
            }
        }
    }
}
</script>

<style>

</style>
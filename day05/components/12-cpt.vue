<template>
  <div>
    <slot name="t" :row="obj"></slot>
    <hr>
    <slot name="c" :row="obj"></slot>
  </div>
</template>

<script>
export default {
    data(){
        return{
            obj:{
                title:"这是标题",
                content:"这是内容"
            }
        }
    }
}
</script>

<style>

</style>
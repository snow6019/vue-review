<template>
  <div>
    <h1 v-blue="'pink'">局部自定义指令</h1>
  </div>
</template>

<script>
export default {
    directives:{
        blue:{
            inserted(el,bidding){
                el.style.backgroundColor = bidding.value
            }
        }
    }
}
</script>

<style>

</style>
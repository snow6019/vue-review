<template>
  <div>
    <slot name="title"></slot>
    <button @click="key=!key">{{key?'折叠':'展开'}}</button>
    <div v-show="key">
        <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            key:true
        }
    }
}
</script>

<style>

</style>
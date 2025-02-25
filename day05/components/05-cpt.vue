<template>
  <div>
    <button v-if="key" @click="fn">click me</button>
    <input ref="ipt" type="text" v-else>
  </div>
</template>

<script>
export default {
    data() {
        return {
            key: true
        }
    },
    methods:{
      fn(){
        this.key=false
        this.$nextTick(()=>{
          this.$refs.ipt.focus()
        })
      }
    }
}
</script>

<style>

</style>
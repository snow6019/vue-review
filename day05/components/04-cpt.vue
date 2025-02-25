<template>
  <div>
    <button v-if="key" @click="fn">click</button>
    <input v-else type="text" ref="ipt">
  </div>
</template>

<script>
export default {
    data(){
        return{
            key:true
        }
    },
    methods:{
        fn(){
            this.key=false;
            this.$nextTick(()=>{
                this.$refs.ipt.focus();
            })
        }
    }
}
</script>

<style>

</style>
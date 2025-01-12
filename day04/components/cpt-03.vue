<template>
  <div>
    <p ref="p">{{num}}</p>
    <button @click="fn">+1</button>
    <hr>
    <button v-if="key" @click="btn">btn</button>
    <input v-else type="text" ref="ipt">
  </div>
</template>

<script>
export default {
    data(){
        return{
            num:10,
            key:true
        }
    },
    methods:{
        fn(){
            this.num++
            console.log(this.$refs.p.innerHTML)
            this.$nextTick(()=>{console.log(this.$refs.p.innerHTML)})
        },
        btn(){
            this.key=false
            this.$nextTick(()=>{this.$refs.ipt.focus()})
        }
    }
}
</script>

<style>

</style>
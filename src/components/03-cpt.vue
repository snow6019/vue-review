<template>
  <div>
    <p ref="ppp">{{num}}</p>
    <button @click="fn">+1</button>
  </div>
</template>

<script>
export default {
    data(){
        return{
            num:10
        }
    },
    methods:{
        fn(){
            this.num++;
            this.$nextTick(()=>{
                console.log("num=",this.$refs.ppp.innerHTML);
            })
        }
    }
}
</script>

<style>

</style>
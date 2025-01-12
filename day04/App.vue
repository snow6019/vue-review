<template>
  <div>
    <cpt-1></cpt-1>
    <cpt-2 ref="c2"></cpt-2>
    <button @click="get">获取组件对象</button>
    <cpt-3></cpt-3>
  </div>
</template>

<script>
import cpt1 from './components/cpt-01.vue'
import cpt2 from './components/cpt-02.vue'
import cpt3 from './components/cpt-03.vue'
export default {
  components:{
    cpt1,
    cpt2,
    cpt3
  },
  methods:{
    get(){
      console.log(this.$refs.c2)
    }
  }
}
</script>

<style>

</style>
<template>
  <div>
    <!-- <cpt-1></cpt-1> -->
    <!-- 父级库存:{{num}} -->
    <!-- <cpt-2 :value="num" @input="fn"></cpt-2> -->
    <!-- <cpt-2 v-model="num"></cpt-2> -->
    <!-- <cpt-3 ref="cpt3"></cpt-3> -->
    <!-- <button @click="get">获取组件对象</button> -->
    <!-- <cpt-4></cpt-4> -->
    <!-- <cpt-5></cpt-5> -->
    <!-- <cpt-6></cpt-6> -->
    <!-- <cpt-7></cpt-7> -->
    <cpt7dt></cpt7dt>
  </div>
</template>

<script>
import cpt1 from './components/v-model原理.vue'
import cpt2 from './components/01-cpt.vue'
import cpt3 from './components/02-cpt.vue'
import cpt4 from './components/03-cpt.vue'
import cpt5 from './components/04-cpt.vue'
import cpt6 from './components/05-cpt.vue'
import cpt7 from './components/06-cpt'
import cpt7dt from './components/06-cpt-dt'
export default {
  data(){
    return{
      num: 99
    }
  },
  methods:{
    fn(a){
      this.num += a;
    },
    get(){
      this.$refs.cpt3.fn();
    }
  },
  components:{
    cpt1,
    cpt2,
    cpt3,
    cpt4,
    cpt5,
    cpt6,
    cpt7,
    cpt7dt,
  }
}
</script>

<style>
</style>
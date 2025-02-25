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
    <!-- <cpt7dt v-red></cpt7dt>
    <cpt8></cpt8> -->
    <!-- <cpt9></cpt9> -->
    <!-- <cpt10>
      <ul>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
      </ul>
    </cpt10>

    <cpt10>
      <img src="../day04/assets/logo.png" alt="">
    </cpt10> -->

    <!-- <cpt11>
      <template v-slot:title>
        <p>这是一首诗</p>
      </template>
      <template v-slot:content>
        <ul>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
        <li>xxx</li>
      </ul>
      </template>
    </cpt11>r

    <cpt11>
      <template #title>
        <p>这是一张logo</p>
      </template>
      <template #content>
        <img src="../day04/assets/logo.png" alt="">
      </template>
    </cpt11> -->

    <!-- <cpt12>
      <template v-slot="scope">
        <p>{{scope.row.name}}</p>
        <p>{{scope.row.age}}</p>
      </template>
    </cpt12> -->
    <cpt13>
      <template v-slot:t="scope">
        <h1>{{scope.row.title}}</h1>
      </template>
      <template #c="scope">
        <p>{{scope.row.content}}</p>
      </template>
    </cpt13>
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
import cpt8 from './components/07-cpt'
import cpt9 from './components/08-cpt'
import cpt10 from './components/09-cpt'
import cpt11 from './components/10-cpt'
import cpt12 from './components/11-cpt'
import cpt13 from './components/12-cpt'
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
    cpt8,
    cpt9,
    cpt10,
    cpt11,
    cpt12,
    cpt13,
  }
}
</script>

<style>
</style>
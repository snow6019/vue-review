<template>
  <div>
    <!-- 父组件向子组件传参 props -->
    <p>总库存:{{allSum}}</p>
    <cpt-2 v-for="item in goods" :key="item.id" :obj="item" @calcNum="sale"></cpt-2>
  </div>
</template>

<script>
import cpt2 from "./components/cpt-2.vue";
export default {
  data() {
    return {
      goods: [
        { id:1,name: "梦之蓝", price: 999, num: 100 },
        { id:2,name: "海之蓝", price: 666, num: 200 }
      ],
    };
  },
  methods:{
    sale(data){
      let index = this.goods.findIndex(item=>data.id===item.id)
      this.goods[index].num--
    }
  },
  components: {
    cpt2,
  },
  computed:{
    allSum(){
      return this.goods.reduce((sum,item)=>sum+=item.num,0)
    }
  }
};
</script>

<style>
</style>
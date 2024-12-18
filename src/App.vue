<template>
    <div>
        <p v-for="(item,index) in goods" :key="index">{{item.name}} 库存:{{item.num}}</p>
        <!-- <cpt-3 v-for="item in goods" :key="item.id" :id="item.id" :name="item.name" :price="item.price" :sale="item.sale" :num="item.num" @buy="buy"></cpt-3> -->
        <cptt-3 v-for="item in goods" :key="item.id" :item="item"></cptt-3>
    </div>
</template>
</template>
<script>
import cpt3 from './components/cpt-3.vue'
import cptt3 from './components/cptt-3.vue'
export default {
    data(){
        return {
            goods:[
                {id:12,name:'手机',price:1000,sale:8,num:10},
                {id:23,name:'电脑',price:2000,sale:8,num:10},
                {id:34,name:'鼠标',price:3000,sale:8,num:10},
                {id:45,name:'键盘',price:4000,sale:8,num:10},
                {id:53,name:'耳机',price:5000,sale:8,num:10},
            ]
        }
    },
    components:{
        cpt3,
        cptt3
    }
    ,methods:{
        buy(id){
            let index = this.goods.findIndex(item=>item.id===id)
            this.goods[index].num--
        }
    }
}
</script>
<style scoped>

</style>
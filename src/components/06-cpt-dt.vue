<template>
  <div>
    <span @click="name='son1'" :class="{active:name=='son1'}">功能1</span>
    <span @click="name='son2'" :class="{active:name=='son2'}">功能2</span>
    <span @click="name='son3'" :class="{active:name=='son3'}">功能3</span>
    <component :is="name"></component>
  </div>
</template>

<script>
import son1 from './06-cpt-son1'
import son2 from './06-cpt-son2'
import son3 from './06-cpt-son3'
export default {
    data() {
        return {
            name:'son1'
        }
    },
    components:{
        son1,
        son2,
        son3,
    }
}
</script>

<style scoped>
    span {
        display: inline-block;
        width: 100px;
        height: 50px;
        margin: 5px;
        border: 1px solid #000;
        text-align: center;
        font-size: 22px;
        line-height: 50px;
    }
    .active {
        background-color: skyblue;
    }
</style>
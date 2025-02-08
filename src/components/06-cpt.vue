<template>
  <div>
    <span @click="tt='s1'" :class="{active:tt=='s1'}">功能1</span>
    <span @click="tt='s2'" :class="{active:tt=='s2'}">功能2</span>
    <span @click="tt='s3'" :class="{active:tt=='s3'}">功能3</span>
    <son-1 v-if="tt=='s1'"></son-1>
    <son-2 v-else-if="tt=='s2'"></son-2>
    <son-3 v-else></son-3>
  </div>
</template>

<script>
import son1 from './06-cpt-son1'
import son2 from './06-cpt-son2'
import son3 from './06-cpt-son3'
export default {
    data() {
        return {
            tt: 's1'
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
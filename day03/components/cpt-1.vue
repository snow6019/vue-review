<template>
    <div class="box">
        <h1>名称:{{name}}</h1>
        <p>价格:{{price}}元</p>
        <p>数量:{{num}}</p>
    </div>
</template>
<script>
export default {
    props:['name','price','num'],
    data(){
        return {

        }
    }
}
</script>
<style scoped>
    .box{
        width: 200px;
        height: 200px;
        border:1px solid #000;
    }
</style>>
<template>
    <div>
        // 按键修饰符 阻止默认行为
        <a @click.prevent="fn" href="https://www.itcast.cn">123</a>;
        // 按键修饰符 阻止冒泡行为
        <div class="father" @click="fn1">
            <div class="son" @click="fn2"></div>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        fn(){
            console.log("123");
        },
        fn1(){
            console.log("fn1");
        },
        fn2(){
            console.log("fn2");
        }
    }
}
</script>
<style>
    .father{
        width: 400px;
        height: 400px;
        background-color: black;
    }
    .son{
        width: 200px;
        height: 200px;
        background-color: pink;
    }
</style>
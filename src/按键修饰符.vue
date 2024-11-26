<template>
    <div>
        <h4>按键修饰符</h4>
        <input @keydown.enter="fn1" @keydown.esc="fn2" type="text">
    </div>
</template>
<script>
export default {
    methods:{
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

</style>
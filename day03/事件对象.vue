<template>
    <div id="app">
        // 获取时间对象
        <a @click="fn" href="http://www.itcast.cn">黑马程序员</a>
        <button @click="fn2(222,$event)">黑马程序员</button>
    </div>    
</template>
<script>
export default {
    methods: {
        fn(e){
            console.log(e)
            e.preventDefault()
        },
        fn2(a,e) {
            console.log(a,e);
            e.preventDefault();
        }
    }
}
</script>
<style>

</style>
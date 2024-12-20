<template>
    <div>
        <div class="k1" v-if="key">k1</div>
        <div class="k2" v-show="key">k2</div>
        <button @click="change">开闭</button>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                key: true
            }
        },
        methods:{
            change(){
                this.key = !this.key
            }
        }
    }
</script>
<style scoped>
    .k1,.k2{
        margin: 10px;
        width: 200px;
        height: 200px;
        background-color: skyblue;
    }
</style>
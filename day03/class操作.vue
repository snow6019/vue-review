<template>
    <div>
        <!-- 对象写法 -->
        <!-- <div class="box" :class="{'c1':c1,'c2':c2}"></div> -->
        <button @click="changeClass">change bgc</button>
        <!-- 数组写法 -->
        <div class="box" :class="arr"></div>
        <button @click="arr=['c1','c2','c3']">add arr</button>
    </div>    
</template>
<script>
export default {
    data(){
        return{
            c1:false,
            c2:true,
            arr:[]
        }
    },
    methods:{
        changeClass(){
            this.c1=!this.c1;
            this.c2=!this.c2;
        }
    }
}
</script>
<style>
.box{
    width: 200px;
    height: 200px;
    border: 1px solid black;
}
.c1{
    background-color: skyblue;
}
.c2{
    background-color: yellowgreen;
}
</style>
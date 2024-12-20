<template>
    <div class="father">
        <div class="left">
            <h1>{{title}}</h1>
            <h3>{{subTitle}}</h3>
            <button @click="edit">编辑</button>
        </div>
        <div class="right" v-show="show">
            标题: <input type="text" v-model="downTitle"><br>
            频道: <input type="text" v-model="downSubTitle">
            <button @click="cancel">取消</button>
            <button @click="confirm">确认</button>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            title:"标题",
            subTitle:"sdfs",
            show:false,
            downTitle:"",
            downSubTitle:""
        }
    },
    methods:{
        edit(){
            this.show=true
            this.downTitle=this.title
            this.downSubTitle=this.subTitle
        },
        cancel(){
            this.downTitle=null
            this.downSubTitle=null
        },
        confirm(){
            this.title=this.downTitle
            this.subTitle=this.downSubTitle
            this.downTitle=null
            this.downSubTitle=null
            this.show=false
        }
    }
}
</script>
<style>
.father{
    display: flex;
}
</style>
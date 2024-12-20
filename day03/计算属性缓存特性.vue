<template>
    <div>
        <ul>
            <li v-for="(item,index) in list" :key="index">{{item}}</li>
        </ul>
        <h3>总分:{{zongfen()}}</h3>
        <h3>总分:{{zongfen()}}</h3>
        <h3>总分:{{zongfen()}}</h3>
        <hr>
        <h3>总分:{{zongff}}</h3>
        <h3>总分:{{zongff}}</h3>
        <h3>总分:{{zongff}}</h3>
    </div>
</template>
<script>
export default {
    data(){
        return{
            list:[12,45,33]
        }
    },
    methods:{
        zongfen(){
            console.log("zongfen调用")
            return this.list.reduce((sum,item)=>sum+=item,0);
        }
    },
    computed:{
        zongff(){
            console.log("zongff调用")
            return this.list.reduce((sum,item)=>sum+=item,0);
        }
    }
}
</script>
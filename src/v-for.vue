<template>
    <div>
        <ul>
            <li v-for="(user,index) in users" :key="index">{{index}}--{{user.id}}--{{user.name}}--{{user.age}}</li>
        </ul>
        <hr>
        <ul>
            <li v-for="(user,index) in users" :key="user.id">{{index}}--{{user.id}}--{{user.name}}--{{user.age}}</li>
        </ul>
        <hr>
        <button @click="add">添加</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            users:[
                {id:Math.random(),name:"张三",age:20},
                {id:Math.random(),name:"李四",age:21},
                {id:Math.random(),name:"王五",age:22},
            ]
        }
    },
    methods:{
        add(){
            this.users.push({id:Math.random(),name:"张三",age:20});
        }
    }
}
</script>
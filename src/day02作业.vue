<template>
  <div>
    <div>
      计划任务：<input type="text" v-model="name">  <button @click="add">新增</button>
    </div>
    
    <table border="1">
        <thead>
          <tr>
            <th>编号</th>
            <th>任务</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in list" :key="item.id">
            <td>{{index+1}}</td>
            <td>{{item.name}}</td>
            <td><a href="#" @click.prevent="remove(index)">删除</a></td>
          </tr>
        </tbody>

    </table>


    <h3>需求：</h3>
    <p>1、把list数据渲染页面内</p>
    <p>2、新增一个计划任务</p>
    <p>3、删除任务计划</p>
    <p>4、挑战任务：数据本地化</p>
  </div>
</template>

<script>
export default {
  data(){
    return {
      list:[
        {id:1,name:"学习VUE"},
        {id:2,name:"学习摄影"},
        {id:3,name:"睡觉3天"},
      ],
      name:"打王者"
    }
  },
  methods:{
    remove(index){
        this.list.splice(index,1)
    },
    add(){
        this.list.push({id:this.list.size+1,name:this.name})
    }
  }
}
</script>

<style>

</style>
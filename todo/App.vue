<template>
  <section class="todoapp">

    <!-- 头部：输入框 -->
    <header class="header">
      <h1>todos</h1>
      <input class="new-todo" placeholder="输入新计划" autofocus v-model.trim="planInfo" @keydown.enter="addTodo">
    </header>


    <!-- 列表： -->

    <section class="main">
      <input id="toggle-all" class="toggle-all" type="checkbox" v-model="ck">
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
          
          <todo v-for="item in arr" :key="item.id" :item="item" @del="del"></todo>

      </ul>
    </section>
    

    <!-- 底部：状态栏 -->
    <footer class="footer">
      <span class="todo-count">剩余<strong>{{last}}</strong>未完成 </span>
      <ul class="filters">
        <li>
          <a :class="{'selected':num==1}" href="#/" @click="select(1)">全部</a>
        </li>
        <li>
          <a :class="{'selected':num==2}" href="#/active" @click="select(2)">未完成</a>
        </li>
        <li>
          <a :class="{'selected':num==3}" href="#/completed" @click="select(3)">已完成</a>
        </li>
      </ul>
      <button class="clear-completed" @click="clear">清除已完成</button>
    </footer>


  </section>
</template>

<script>
import './todos.css'
import todo from './components/todo.vue'
export default {
  data() {
    return {
      planInfo: '',
      todoList:JSON.parse(localStorage.getItem('todos'))||[],
      arr:JSON.parse(localStorage.getItem('todos'))||[],
      num:1
    }
  },
  components: {
    todo
  },
  methods:{
    addTodo(){
      if(this.planInfo==='') return
      this.todoList.push({id:this.todoList.length+1,name:this.planInfo,isDone:false})
      this.planInfo=''
    },
    del(id){
      this.todoList.splice(this.todoList.findIndex(item=>item.id == id),1)
    },
    clear(){
      this.todoList = this.todoList.filter(ele=>ele.isDone==false)
    },
    select(a){
        this.num = a
        console.log(this.num)
        if(this.num == 1){
          this.arr=this.todoList
        } else if(this.num == 2){
          this.arr=this.todoList.filter(ele=>ele.isDone==false)
        } else if(this.num == 3){
          this.arr=this.todoList.filter(ele=>ele.isDone==true)
        }
    }
  },
  computed:{
    last(){
      return this.todoList.filter(ele=>ele.isDone==false).length
    },
    //大小选
    ck:{
      get(){
        return this.todoList.every(ele=>ele.isDone==true)
      },
      set(val){
        this.todoList.forEach(ele=>ele.isDone=val)
      }
    }
  },
  watch:{
    todoList:{
      deep:true,
      handler(){
        localStorage.setItem('todos',JSON.stringify(this.todoList))
      }
    }
  }
}
</script>

<style>

</style>
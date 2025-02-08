<template>
  <section class="todoapp">
    <!-- 头部：输入框 -->
    <header class="header">
      <h1>todos</h1>
      <input
        class="new-todo"
        placeholder="输入新计划"
        autofocus
        v-model="name"
        @keydown.enter="add"
      />
    </header>

    <!-- 列表： -->
    <section class="main">
      <input id="toggle-all" class="toggle-all" type="checkbox" v-model="ck" />
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        <todo
          v-for="item in arr"
          :key="item.id"
          :item="item"
          @del="del"
        ></todo>
      </ul>
    </section>

    <!-- 底部：状态栏 -->
    <footer class="footer">
      <span class="todo-count"
        >剩余<strong>{{ last }}</strong
        >未完成
      </span>
      <ul class="filters">
        <li>
          <a :class="{selected: num==1}" @click="change(1)" href="#/">全部</a>
        </li>
        <li>
          <a :class="{selected: num==2}" @click="change(2)" href="#/active">未完成</a>
        </li>
        <li>
          <a :class="{selected: num==3}" @click="change(3)" href="#/completed">已完成</a>
        </li>
      </ul>
      <button class="clear-completed" @click="clear">清除已完成</button>
    </footer>
  </section>
</template>

<script>
import "./todos.css";
import todo from "./components/todo.vue";
export default {
  data() {
    return {
      list: JSON.parse(localStorage.getItem("todos"))||[],
      arr: JSON.parse(localStorage.getItem("todos"))||[],
      name: "",
      num: 1
    };
  },
  methods: {
    del(id) {
      this.list.splice(
        this.list.findIndex((item) => item.id === id),
        1
      );
    },
    add() {
      if (this.name.trim() === "") return;
      this.list.push({ id: Math.random(), name: this.name, isDone: false });
      this.name = "";
    },
    clear() {
      this.list = this.list.filter((item) => item.isDone == false);
    },
    change(a){
      this.num = a;
      if(this.num == 1){
        this.arr = this.list;
      } else if(this.num ==2 ){
        this.arr = this.list.filter(e=>e.isDone==false);
      } else if(this.num ==3 ){
        this.arr = this.list.filter(e=>e.isDone==true);
      }
    }
  },
  components: {
    todo,
  },
  computed: {
    last() {
      return this.list.filter((item) => item.isDone == false).length;
    },
    ck: {
      get() {
        return this.list.every((item) => item.isDone);
      },
      set(val) {
        this.list.forEach((item) => item.isDone = val);
      },
    },
  },
  watch: {
    list: {
      deep: true,
      handler(){
        localStorage.setItem("todos",JSON.stringify(this.list));
      }
    }
  }
};
</script>

<style>
</style>

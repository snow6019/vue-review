<template>
  <div class="score-case">
    <div class="table">
      <table>
        <thead>
          <tr>
            <th>编号</th>
            <th>科目</th>
            <th>成绩</th>
            <th>考试时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody v-if="this.list.length>0">
          <tr v-for="(item,index) in list" :key="item.id">
            <td>{{index+1}}</td>
            <td>{{item.subject}}</td>
            <td class="red">{{item.score}}</td>
            <td>{{formatDate(item.date)}}</td>
            <td><a href="#" @click="remove(item.id)">删除</a></td>
          </tr>
        </tbody>
        <tbody v-else>
          <tr>
            <td colspan="5">
              <span class="none">暂无数据</span>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="5"> 
              <span>总分：{{zf}}</span>
              <span style="margin-left:50px">平均分：{{(zf/list.length)||0}}</span>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
    <button @click="changeScore">change score</button>
    <div class="form">
      <div class="form-item">
        <div class="label">科目：</div>
        <div class="input">
          <input v-model="subject" type="text" placeholder="请输入科目" />
        </div>
      </div>
      <div class="form-item">
        <div class="label">分数：</div>
        <div class="input">
          <input v-model.number="score" type="text" placeholder="请输入分数" />
        </div>
      </div>
      <div class="form-item">
        <div class="label"></div>
        <div class="input">
          <button class="submit" @click="add">添加</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
export default {
  name: 'ScoreCase',
  data () {
    return {
      list: JSON.parse(localStorage.getItem("cj")) || [],
      subject: '',
      score: null
    }
  },
  methods:{
    add(){
        if(!this.subject||!this.score){
            return;
        }
        this.list.push({id:Math.random(),subject:this.subject,score:this.score,date:new Date()});
        this.subject='';
        this.score='';
        // localStorage.setItem("cj",JSON.stringify(this.list));
    },
    remove(id){
        this.list.splice(this.list.findIndex(item=>item.id===id),1);
        // localStorage.setItem("cj",JSON.stringify(this.list));
    },
    formatDate(date){
        return moment(date).format('yyyy-MM-DD HH:mm:ss');
    },
    changeScore(){
      this.list[0].score = Math.ceil(Math.random()*100);
    }
  },
  computed:{
    zf(){
      return this.list.reduce((sum,item)=>sum+=item.score,0);
    }
  },
  watch:{
    // 简单侦听存在一个问题 对象内部的属性的改变 不能被侦听到
    // list(newVal,oldVal){
    //   localStorage.setItem("cj",JSON.stringify(this.list));
    // }
    list:{
      deep:true,
      handler(){
        console.log("list handler...")
        localStorage.setItem("cj",JSON.stringify(this.list));
      },
      // immediate:true
    }
  }
  };
</script>

<style lang="less">
.score-case {
  width: 1000px;
  margin: 50px auto;
  display: flex;
  .table {
    flex: 4;
    table {
      width: 100%;
      border-spacing: 0;
      border-top: 1px solid #ccc;
      border-left: 1px solid #ccc;
      th {
        background: #f5f5f5;
      }
      tr:hover td {
        background: #f5f5f5;
      }
      td,
      th {
        border-bottom: 1px solid #ccc;
        border-right: 1px solid #ccc;
        text-align: center;
        padding: 10px;
        &.red {
          color: red;
        }
      }
    }
    .none {
      height: 100px;
      line-height: 100px;
      color: #999;
    }
  }
  .form {
    flex: 1;
    padding: 20px;
    .form-item {
      display: flex;
      margin-bottom: 20px;
      align-items: center;
    }
    .form-item .label {
      width: 60px;
      text-align: right;
      font-size: 14px;
    }
    .form-item .input {
      flex: 1;
    }
    .form-item input,
    .form-item select {
      appearance: none;
      outline: none;
      border: 1px solid #ccc;
      width: 200px;
      height: 40px;
      box-sizing: border-box;
      padding: 10px;
      color: #666;
    }
    .form-item input::placeholder {
      color: #666;
    }
    .form-item .cancel,
    .form-item .submit {
      appearance: none;
      outline: none;
      border: 1px solid #ccc;
      border-radius: 4px;
      padding: 4px 10px;
      margin-right: 10px;
      font-size: 12px;
      background: #ccc;
    }
    .form-item .submit {
      border-color: #069;
      background: #069;
      color: #fff;
    }
  }
}
</style>
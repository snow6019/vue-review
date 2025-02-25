<template>
  <div class="my-tag">
    <input
    class="input"
    type="text"
    placeholder="输入标签"
    v-if="key"
    ref="ipt"
    @blur="blur"
    v-model="tag"
    @keydown.enter="enter"
    />
    <div class="text" v-else @dblclick="edit">{{value}}</div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            key:false,
            tag:""
        }
    },
    props:["value"],
    methods:{
        edit(){
            this.key=true
            this.$nextTick(()=>{
                 this.$refs.ipt.focus()
            })
            this.tag=this.value
        },
        blur(){
          this.key=false
        },
        enter(){
          this.$emit("input",this.tag)
          this.key=false
        }
    }
};
</script>

<style lang="less" scoped>
.my-tag {
  cursor: pointer;
  .input {
    appearance: none;
    outline: none;
    border: 1px solid #ccc;
    width: 100px;
    height: 40px;
    box-sizing: border-box;
    padding: 10px;
    color: #666;
    &::placeholder {
      color: #666;
    }
  }
}
</style>
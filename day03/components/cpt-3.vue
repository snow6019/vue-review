<!--  -->
<template>
  <div class="box">
    <h1>商品列表</h1>
    <ul>
        <li>名称:{{name}}</li>
        <li>价格:{{price}}</li>
        <li>折扣:{{sale}}</li>
        <li>库存:{{num}}</li>
        <button @click="fn">购买</button>
    </ul>
  </div>
</template>

<script>
export default {
  props:['id','name','price','sale','num'],
  data() {
    return {};
  },
  methods: {
    fn() {
      this.$emit('buy',this.id)
    }
  },
};
</script>
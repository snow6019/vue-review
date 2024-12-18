<!--  -->
<template>
  <div class="box">
    <h1>商品列表</h1>
    <ul>
        <li>名称:{{item.name}}</li>
        <li>价格:{{item.price}}</li>
        <li>折扣:{{item.sale}}</li>
        <li>库存:{{item.num}}</li>
        <button @click="item.num--">购买</button>
    </ul>
  </div>
</template>

<script>
export default {
  props:['item'],
  data() {
    return {};
  }
};
</script>
<style scoped>
.box{
  width: 200px;
  height: 200px;
  border: 1px solid skyblue;
}
</style>
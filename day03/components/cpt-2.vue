<template>
  <div class="box">
    <h1>商品超市列表</h1>
    数量:{{num}}
  </div>
</template>

<script>
export default {
    props:{
        num:{
            type: Number,
            default: 99
        }
    },
  components: {},
  data() {
    //这里存放数据
    return {};
  },
};
</script>
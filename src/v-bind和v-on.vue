<template>
  <div id="app">
    {{ info }}
    <button v-on:click="fn">点击有惊喜1</button>
    <button @click="fn">点击有惊喜2</button>
    <button @click="fn2(5)">加法</button>
    <a v-bind:href="url">链接1</a>
    <a :href="url">链接2</a>
    {{num}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: "java",
      url: "https://www.baidu.com",
      num:1
    };
  },
  methods: {
    fn(){
      this.info = "python"
    },
    fn2(a) {
      this.num += a
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

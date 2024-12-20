<template>
   <div>
    <p>{{content}}</p>
    <button @click="fn">逆转世界</button>
    </div> 
</template>
<script>
export default{
    data(){
        return {
            content: "Hello World"
        }
    },
    methods: {
        fn(){
            this.content = this.content.split("").reverse().join("");
        }
    }
}
</script>
<style>

</style>

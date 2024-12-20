<template>
    <div>
        <h1>v-text/v-html</h1>
        <p v-text="msg"></p>
        <p v-html="msg"></p>
    </div>
</template>
<script>
export default {
    data(){
        return{
            msg:"<button>btn</button>"
        }
    }
}
</script>
<style>

</style>
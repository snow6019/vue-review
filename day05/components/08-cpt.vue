<template>
    <div>
        <input type="text" placeholder="please type something..." v-model="color">
        <div class="d1" v-changeColor="color"></div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            color:""
        }
    }
}
</script>

<style scoped>
.d1 {
    margin-top: 5px;
    width: 200px;
    height: 100px;
    background-color: #fff;
    border: 1px solid #000;
}
</style>
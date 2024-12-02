<template>
    <div>
        <input type="text" v-model.number="num"><br>
        <input type="text" v-model.trim="info"><br>
        <input type="text" v-model.lazy="price">
    </div>
</template>
<script>
export default {
    data(){
        return{
            num:10,
            info:"dfd",
            price:22
        }
    },
    methods:{

    }
}
</script>
<style>

</style>
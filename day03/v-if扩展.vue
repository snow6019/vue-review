<template>
    <div>
        <p v-if="num>550">一本</p>
        <div v-else-if="num>450">二本</div>
        <button v-else-if="num>350">三本</button>
        <h4 v-else>重读</h4>
    </div>
</template>
<script>
export default {
    data(){
        return {
            num: 60
        }
    }
}
</script>
<style>

</style>
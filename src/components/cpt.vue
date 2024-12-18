<template>
    <div>
        <div class="card">
            <h1>cpt</h1>
            <h3>title  <button @click="show=!show">收起</button></h3>
            <ul v-show="show">
                <li>xxxx</li>
                <li>xxxx</li>
                <li>xxxx</li>
                <li>xxxx</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            show: true
        }
    }
}
</script>
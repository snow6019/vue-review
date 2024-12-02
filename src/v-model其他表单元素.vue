<template>
    <div>
        <input type="checkbox" v-model="key">
        <textarea v-model="key"></textarea>
        <select v-model="key">
            <option value="1">北京</option>
            <option value="2">上海</option>
            <option value="3">广州</option>
        </select>
    </div>
</template>
<script>
export default {
    data() {
        return{
            key: "2"
        }
    },
}
</script>
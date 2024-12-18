<template>
    <div>
        <son></son>
        <son></son>
        <son></son>
        <cpt></cpt>
        <cpt></cpt>
    </div>
</template>
<script>
import cpt from './components/cpt.vue'
import son from './components/son.vue'
export default {
    data(){
        return {
            show: true
        }
    },
    components: {
        son,
        cpt
    }
}
</script>
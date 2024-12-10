<template>
    <div>
        <div :style="{'width':width,'height':height,'background-color':backgroundColor}"></div>
        <div :style="arr"></div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            width: '100px',
            height: '100px',
            backgroundColor: 'red',
            arr: [
                {width: '200px'},
                {height: '200px'},
                {backgroundColor: 'blue'}
            ]
        }
    }
}
</script>
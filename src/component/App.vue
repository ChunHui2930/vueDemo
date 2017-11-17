<template>
<main>
<p>{{ msg }}</p>   
</main>


</template>


<script>
    
    //向外导出一个组件配置
export default{
    data(){
        return{
            msg:'脚手架初搭建'
        }
    }
}

</script>
<style>
    
    p{
    font-size:30px;
    }
</style>
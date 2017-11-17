<template>
<main>
<p>{{ msg }}</p>  
  <router-view></router-view> 
</main>


</template>


<script>
    
    //向外导出一个组件配置
export default{
    data(){
        return{
            msg:'测试vue'
        }
    }
}

</script>
<style>
    
    p{
    font-size:30px;
    }
</style>
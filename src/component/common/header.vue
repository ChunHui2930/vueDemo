<template>
   <header>
      <mt-header fixed title="大甩卖"></mt-header>
      <mt-header fixed title="大甩卖">
      <!--返回按钮只在非首页-->
      <mt-button v-if="$route.path!='/index'" v-on:click="$router.go(-1)" icon="back" slot="left">
      </mt-button>
      </mt-header>      
      <div class="null"></div>
   </header>  
</template>
<script>
    export default{

    }
</script>

<style lang="less" scoped>

   .null{
       height:40px;
   }
</style>

<template>
<main>
  <app-header></app-header>
  <app-home></app-home>
  <app-footer></app-footer>
</main>
  
</template>


<script>
 import HomeComponent from './home/home.vue'   
    //向外导出一个组件配置
export default {
  components:{'app-home':HomeComponent}
}

</script>
<style>

</style>
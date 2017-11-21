<template>
<div class="mui-card">
        <div class="mui-card-header">{{ intro.title }}</div>
        <div class="mui-card-content">
            <div class="mui-card-content-inner" v-html="intro.content"></div>
        </div>
</div>
</template>
<script>
   export default{
       props:['id'],
       data() {
           return {
               intro:{}
           }
       },
       methods:{
           getIntro() {
               this.axios.get(this.api.goodsD+this.id)
                    .then(rsp=>this.intro=rsp.data.message[0])
           }
       },
       created() {
           this.getIntro();
       }
   }
</script>
<style></style>
<template>
 <main>  
    <app-header></app-header>
    <div class="mui-bar mui-bar-nav">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" v-on:click="$router.go(-1)">返回</a>
			<h1 class="mui-title">图文资讯</h1>
            </div>
       <ul class="mui-table-view">
         <li class="mui-table-view-cell mui-media" v-for="item in newsList" v-bind:key="item.id" >
         <router-link v-bind="{to:`/news/detail/${item.id}`}">
          <a href="javascript:;" class="">
            <img class="mui-media-object mui-pull-left" v-bind:src="item.img_url">
            <div class="mui-media-body">
                <p class="mui-ellipsis">{{item.zhaiyao}}</p>
                
                <span>发表时间 &nbsp;:&nbsp;{{item.add_time|changeDate}}</span><i>点击:{{item.click}}</i> 
            </div>
          </a>
        </router-link>
      </li>
	</ul>
 </main>  
</template>

<script>

    export default {
      data() {
           return {
               newsList:[]
           }
      }, 
      filters:{
           changeDate(time){
                var date=new Date(time);
             return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
           }
        },
      methods:{
          //获取新闻列表
          getNewsList(){
              this.axios.get(this.api.getNL)
              .then(rsp=>this.newsList=rsp.data.message)
          }
      },
      created() {
          this.getNewsList()
      }
    }
</script>
<style>
   .mui-bar-nav{
    margin-top:40px;
}

   li .mui-media-body span,li .mui-media-body i{
       font-size:14px;
   }
  li .mui-media-body span{
      float:left;
  }
  li .mui-media-body i{
      float:right;
      font-style:normal;
  }
  .mui-bar-nav a{
      font-size:18px !important;  
  }
  
</style>
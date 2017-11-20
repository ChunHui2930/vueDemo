<template>
<article>
    <div class="mui-bar mui-bar-nav">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" v-on:click="$router.go(-1)">返回</a>
			<h1 class="mui-title">资讯详情</h1>
            </div>
     <div class="mui-card">
				<div class="mui-card-header">{{newsDetail.title}}</div>
                <div class="mui-card-footer">
                    <span>时间：{{newsDetail.add_time|date}}</span><i>{{newsDetail.click}}次浏览</i> 
                </div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner" v-html="newsDetail.content">						
					</div>
				</div>				
	</div>
</article>     
</template>
<script> 
   export default {
        data() {
            return {
                newsDetail:[]
            }
        },
        //  filters:{
        //    changeDate(time){
        //         var date=new Date(time);
        //      return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
        //    }
        // },
        methods:{
            getNewsDetail(){
                var id=this.$route.params.id;
                this.axios.get(this.api.getND+`${id}`)
                .then(rsp=>this.newsDetail=rsp.data.message[0])
            }
        },
        created() {
            this.getNewsDetail()
        }
    }
</script>
<style>
li{
    list-style:none;
}
 .mui-bar-nav{
    margin-top:40px;
}
.mui-bar-nav h1{
    line-height:44px;
}
 .mui-bar-nav a{
     line-height:25px;
      font-size:18px !important;  
  }
  .mui-card{
      margin-top:50px;
  }
  .mui-card-footer{
      font-size:14px
  }
  .mui-card-footer i{
      font-style:normal;
  }
  .mui-card-header{
      font-size:18px;
  }
</style>
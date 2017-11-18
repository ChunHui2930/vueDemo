<template>
   <article>
      <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunbo" v-bind:key="item.url">
          <a v-bind:href="item.url">
          <img v-bind:src="item.img">
          </a>
      </mt-swipe-item>
     </mt-swipe>
    
    <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><route-link to="/newsList">
                <span class="mui-icon mui-icon-home"></span>
                <div class="mui-media-body">新闻资讯</div></route-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><route-link to="/photo">
                <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
                <div class="mui-media-body">图片分享</div></route-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><route-link href="#">
                <span class="mui-icon mui-icon-extra mui-icon-extra-cart"></span>
                <div class="mui-media-body">商品购买</div></route-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><route-link href="#">
                <span class="mui-icon mui-icon-location"></span>
                <div class="mui-media-body">留言反馈</div></route-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><route-link href="#">
                <span class="mui-icon mui-icon-search"></span>
                <div class="mui-media-body">视频专区</div></route-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><route-link href="#">
                <span class="mui-icon mui-icon-phone"></span>
                <div class="mui-media-body">联系我们</div></route-link></li>
	 </ul>
   </article>
</template>
<script>
  export default {
      data() {
          return {
              lunbo:[]
          }
      },
      methods:{
          getLunbo(){
              this.axios.get('http://vue.studyit.io/api/getlunbo')
                .then(rep=>(this.lunbo=rep.data.message))
          }
      },
      //初始化完成后  调用接口获取数据  渲染
      created(){
          this.getLunbo();
      }
  }
</script>
<style lang="less" scoped>
   @height:260px;
  article{
       height:@height;
       img{
       height:@height;
   }
   };
  
</style>
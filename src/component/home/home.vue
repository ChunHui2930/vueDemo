<template>
   <article>
      <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunbo" v-bind:key="item.url">
          <a v-bind:to="item.url">
          <img v-bind:src="item.img">
          </a>
      </mt-swipe-item>
     </mt-swipe>
    
    <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link to="/">
                <span class="mui-icon mui-icon-home"></span>
                <div class="mui-media-body">首页</div>
            </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
             <router-link to="/news/list">
                <span class="mui-icon  mui-icon-chat"><span class="mui-badge">5</span></span>
                <div class="mui-media-body">新闻资讯</div>
             </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link to="/photo/list/0">
                <span class="mui-icon mui-icon mui-icon-image"></span>
                <div class="mui-media-body">图片分享</div>
            </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/">
                <span class="mui-icon mui-icon-location"></span>
                <div class="mui-media-body">留言反馈</div></router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/">
                <span class="mui-icon mui-icon-search"></span>
                <div class="mui-media-body">视频专区</div></router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/">
                <span class="mui-icon mui-icon-phone"></span>
                <div class="mui-media-body">联系我们</div></router-link></li>
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
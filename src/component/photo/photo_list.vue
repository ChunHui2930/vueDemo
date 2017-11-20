<template>
   <main>
   <!--使用mui的列表布局-->
       <ul class="mui-table-view">
				 <li class="mui-table-view-cell">
                   <router-link v-bind:to="{ name:'pl',params:{id:0} }"> 全部</router-link>
                </li>
		         <li class="mui-table-view-cell" v-for="item in photoCategoryList" v-bind:key="item.id" >
                 <router-link v-bind:to="{name:'pl',params:{id:item.id}}">{{item.title}}</router-link>
                 </li>
		</ul>
        <div class="mui-card" v-for="item in photoList" v-bind:key="item.id">
             <router-link v-bind:to="{name:'pd',params:{id:item.id}}">
              <div class="mui-card-header mui-card-media" v-bind="{style:`height:40vw;background-image:url(${item.img_url})`}" ></div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p style="color: #333;">{{item.title}}</p>
					</div>
				</div>
             </router-link>     
		</div>
   </main>
</template>
<script>
 export default {
     data() {
         return {
             photoCategoryList:[],
             photoList:[],
         }
        
     },
     methods: {
         //获取图片分类
         getPhotoCategoryList() {
             this.axios.get(this.api.photoC)
             .then(rsp=>this.photoCategoryList=rsp.data.message);
         },
         getPhotoList() {
             this.axios.get(this.api.photoL+this.$route.params.id)
             .then(rsp=>this.photoList=rsp.data.message);
         }
     },
     created() {
         this.getPhotoCategoryList();
         this.getPhotoList();
     },
     watch:{
         $route(){
            this.getPhotoList();
         }
        
     }
 }
</script>
<style lang="less" scoped>
   .mui-table-view{
       overflow:hidden;
       li{
           float:left;
           color:deepskyblue;
       }
     
   }
</style>
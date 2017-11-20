<template>
<main>
        <!-- 使用mui的卡片视图布局, 注意: 卡片视图都是flex, 这里把他改成block -->
       <div class="mui-card">
           <div class="mui-card-header">
               <h4>{{photoDetail.title }}</h4>
              <p class="mui-ellipsis">
                    <span>创建时间: {{photoDetail.add_time | date }}</span>
                    <span>点击数: {{photoDetail.click }}</span>
             </p>
           </div>
           <ul class="mui-table-view mui-grid-view">
		        <li class="mui-table-view-cell mui-media mui-col-xs-4" v-for="item in photoThumlist" v-bind:key="item.src ">
		            <a href="#">
		                <img class="mui-media-object" v-bind:src="item.src" v-preview="item.src">		               
                    </a>
             </li>
                
		    </ul>
              <div class="mui-card-footer" v-html="photoDetail.content"></div>
       </div>    
    </main>
</template>
<script>
export default {
    data() {
        return {
            photoDetail:{},
            photoThumlist:[],
        };
    },
    methods: {
         getphotoDetail() {
             this.axios.get(this.api.photoD+this.$route.params.id)
             .then(rsp=>this.photoDetail=rsp.data.message[0]);
         },
         getphotoThumlist() {
             this.axios.get(this.api.photoT+this.$route.params.id)
             .then(rsp=>this.photoThumlist=rsp.data.message);
         }
    },
    created() {
        this.getphotoDetail();
        this.getphotoThumlist()
    }
}
</script>
<style>
.mui-card-header, .mui-card-footer{
    display:block;
}
.mui-ellipsis span:nth-child(1){
    float:left;
}
.mui-ellipsis span:nth-child(2){
    float:right;
}
</style>
  //在里面导入那些要被路由的组件
import HomeComponent from '../component/home/home.vue';
import NewsListComponent from '../component/news/news_list.vue';
import NewsDeatilComponent from '../component/news/news_detail.vue';
import PhotoListComponent from '../component/photo/photo_list.vue';
import PhotoDetailComponent from '../component/photo/photo_detail.vue';
import GoodsListComponent from '../component/goods/list_tpl.vue';
import GoodsDetailComponent from '../component/goods/detail_tpl.vue';
////对外导出路由配置对象
export default {
    routes: [
       //首页配置
       {path:'/',redirect:"/index"},
       {path:"/index",component:HomeComponent},
       //新闻路由配置
       {name:'nl',path:"/news/list",component:NewsListComponent},
       {name:'nd',path:"/news/detail/:id",component:NewsDeatilComponent},
       //图片路由配置
       {name:'pl',path:"/photo/list/:id",component:PhotoListComponent},
       {name:'pd',path:'/photo/detail/:id',component:PhotoDetailComponent},
       //商品路由配置
       {name:'gl',path:"/goods/list/:id",component:GoodsListComponent},
       {name:"gd",path:"/goods/detail/:id",component:GoodsDetailComponent}
    ]
                 
}
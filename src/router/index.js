//对外导出路由配置对象
import HomeComponent from '../component/home/home.vue';
import NewsListComponent from '../component/news/news_list.vue';
import NewsDeatilComponent from '../component/news/news_detail.vue';

//
export default {
    routes: [
       //首页配置
       {path:'/',redirect:"/index"},
       {path:"/index",component:HomeComponent},
       //新闻路由配置
       {name:'/nl',path:"/news/list",component:NewsListComponent},
       {name:'/nd',path:"/news/detail/:id",component:NewsDeatilComponent}
    ]
                 
}
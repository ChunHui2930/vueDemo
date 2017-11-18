//要把组件渲染到页面上，就必须要导入Vue这个库  之后才可以new它
//导入vue.js和vue-router.js  第三方包
import Vue from 'Vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);


//导入我们编写的组件
import App from '../component/App.vue';  //导入根组件
import Home from '../component/home/home.vue';
import News from '../component/news/views.vue';
import Photo from '../component/photo/photo.vue';

//new vue渲染根组件到视图中的占位标签
new Vue({
    el:'#app',
    render:function(c){
        return c(App); //以前这里写的是template与methods  现在这些代码都挺有放在App.vue里面了
    },
    //路由配置
    router:new VueRouter({
        //路线配置
        routes:[
            {path:"/",component:Home},
            {path:'/news',component:News},
            {path:'/photo',component:Photo},

        ]
    })
})

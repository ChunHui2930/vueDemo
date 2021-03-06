//要把组件渲染到页面上，就必须要导入Vue这个库  之后才可以new它
//导入vue.js和vue-router.js  第三方包
import Vue from 'vue';
import VueRouter from 'vue-router';
import MintUi from 'mint-ui';
import 'mint-ui/lib/style.css';
import common from '../component/common';  //
import  'mui/dist/css/mui.css';  //用于完成头部
import  'mui/examples/hello-mui/css/icons-extra.css';    //扩展图标
import less from '../less/index.less';
import axios from 'axios';
import vuePicturePreview from 'vue-picture-preview'

//导入过滤
import Filter from '../fliter/index'
//将axios添加到vue原型中实现共享
Vue.prototype.axios=axios;
Vue.prototype.api=apiConfig;


//手动启用插件
Vue.use(VueRouter);
Vue.use(MintUi);
Vue.use(common);
Vue.use(Filter);
Vue.use(vuePicturePreview);  //图片预览
//导入根组件
import App from '../component/App.vue';  
//导入配置
import apiConfig from './api_config';
import routeConfig from '../router'
//new vue渲染根组件到视图中的占位标签
new Vue({
    el:'#app',
    render:function(createNode){
        return createNode(App); //以前这里写的是template与methods  现在这些代码都挺有放在App.vue里面了
    },
    router:new VueRouter(routeConfig)
})

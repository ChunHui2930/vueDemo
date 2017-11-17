import Vue from 'Vue';
import App from '../component/App.vue';  //导入根组件

new Vue({
    el:'#app',
    render:function(c){
        return c(App); //以前这里写的是template与methods  在在这些代码都挺有放在App.vue里面了
    }
})
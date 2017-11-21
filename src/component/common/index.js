//该脚本的作用是导入所有的公共组件  把它们统一声明全局组件（可以在main.js声明 ）
import header from './header.vue';
import footer from './footer.vue';
import NumboxComponent from './numbox.vue'

//注册成全局组件
export default {
    install(Vue) {
        Vue.component('app-header', header);
        Vue.component('app-footer', footer);
        Vue.component('app-numbox',NumboxComponent)
        
    }
};
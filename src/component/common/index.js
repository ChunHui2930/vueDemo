//该脚本的作用是导入所有的公共组件  把它们统一声明全局组件（可以在main.js声明 ）
import header from './header.vue';

export default {
    install(Vue) {
        Vue.component('app-header', header);
    }
};
//导入写好的JSON和date
import DateFile from './date';
import JSONFile from './json';

export default {
    install(Vue){
        Vue.filter('date',DateFile);
        Vue.filter('json',JSONFile);
    }
}
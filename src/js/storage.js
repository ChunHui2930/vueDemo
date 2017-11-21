export default{
    //localStorage.setItem的封装
    set(key,val){
        localStorage.setItem(key,JSON.stringify(val)); //字符串形式
    },
    get(key){
        let val=localStorage.getItem(key);
        try {
            val=JSON.parse(val);
        }
        finally{
            return val;
        }
    }
}
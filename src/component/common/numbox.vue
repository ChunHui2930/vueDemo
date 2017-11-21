<template>
<div class="mui-numbox">
          	<button class="mui-btn mui-btn-numbox-minus" @click="sub">-</button>
          	<input class="mui-input-numbox" type="number" v-model="val">
          	<button class="mui-btn mui-btn-numbox-plus" @click="add">+</button>
</div>
</template>
<script>
export default{
    props:['initVal'],
    data() {
        return {
            val:this.initVal || 0   //优先使用父指定的默认值  如果不指定则默认为0
        };
    },
    methods:{
        sub(){
            this.val>0 && this.val--;   //短路运算
        },
        add(){
           this.val++;
        }
    },
    wacth:{
        //值发生变化就通过事件的方式传给父
        val(){
            this.$emit('change',this.val)
        }
    }
}
</script>
<style></style>
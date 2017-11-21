<template>
  <article class="goods-detail">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunbos" v-bind:key="item.src">        
          <img v-bind:src="item.src">   
      </mt-swipe-item>
     </mt-swipe>
  	<!-- 商品购买 -->
    <div class="mui-card">
      <!-- 名称 -->
      <div class="mui-card-header">{{goodsPrice.title}}</div>
      <!-- 价格 -->
      <div class="mui-card-content mui-card-content-inner">
        <div class="price"> <s>市场价:￥{{goodsPrice.market_price}}</s> <span>销售价:</span> <em>￥{{goodsPrice.sell_price}} </em> </div>
        <div> <span>购买数量：</span>
          <!--数字输入框 -->
          <app-numbox initVal="0" @change="getTotal"></app-numbox>
        </div>
      </div>
      <!-- 按钮 -->
      <div class="mui-card-footer">
      	<button type="button" class="mui-btn mui-btn-success mui-btn-block mui-btn-outlined">结算</button>
        <div></div>
        <button type="button" class="mui-btn mui-btn-success mui-btn-block mui-btn-outlined">加入购物车</button>
      </div>
    </div>

		<!-- 评论与介绍 -->
		<div class="mui-card">
			<!-- 选项卡 -->
		    <mt-navbar v-model="navbarSelector">
			  <mt-tab-item id="comment">商品评论</mt-tab-item>
			  <mt-tab-item id="intro">图文介绍</mt-tab-item>
			</mt-navbar>
			<!-- 内容 -->
		    <mt-tab-container v-model="navbarSelector">
			  <mt-tab-container-item id="comment">
        <p>内容1</p>
			  </mt-tab-container-item>
			  <mt-tab-container-item id="intro">
			  <app-intro v-bind:id="id"></app-intro>
			  </mt-tab-container-item>
			</mt-tab-container>
		</div>

  </article>
</template>

<script>
import IntroComponent from './son/intro.vue';
 export default{
   data() {
        return {
          id:this.$route.params.id,
          lunbos: [],
          goodsPrice: {},
          navbarSelector:'comment',
          intro:{}
        }
   },
   methods: {
     //获取轮播缩略图
      getLunbos() {
        this.axios.get(this.api.goodsT+this.id)
            .then(rsp=>this.lunbos=rsp.data.message);
      },
      getGoodsPrice() {
        this.axios.get(this.api.goodsP+this.id)
            .then(rsp=>this.goodsPrice=rsp.data.message[0]);
      },
      getTotal(total) {
        console.log(total);
      }
   },
   created() {
      this.getLunbos();
      this.getGoodsPrice();
      // this.getIntro();
   },
   components: {
     'app-intro':IntroComponent
   }
 }
</script>

<style lang="less">

  .goods-detail {
    .mui-card-content {
      .price {
        color: rgb(51, 51, 51);
        margin-bottom: 4px;
        span {
          margin-left: 6px;
        }
        em {
          font-size: 18px;
          color: red;
        }
      }
    }
    .mui-card-footer {
      div {
        width: 100%;
      }
      .mui-btn {
        padding: 8px 0;
        font-size: 16px;
      }
    }
    .mint-tab-item {
    	&.is-selected {
    		margin-bottom: 0;
    		border-bottom: 3px solid #2ce094;
    		color: #2ce094;
    	}
    }
    .mint-tab-item-label {
    	font-size: 18px;
    	color: #2ce094;
    }
  }
  .mint-swipe{
    height:260px;
     background:#fff;
  img{
    display:block;
    height:260px;
    max-width:100%;
    margin:0 auto;
  }
}
</style>
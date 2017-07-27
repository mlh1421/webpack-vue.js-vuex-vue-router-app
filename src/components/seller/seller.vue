<template>
  <div class="seller" ref="seller">
    <div class="seller-wrapper">
      <div class="seller-header">
        <div class="seller-title">
          <div class="name">
            {{seller.name}}
          </div>
          <star :score="seller.score"></star>
          <div class="ratingCount">
            ({{seller.ratingCount}})
          </div>
          <div class="sellCount">
            月售{{seller.sellCount}}单
          </div>
          <div class="favorite">
            <span class="icon-favorite" :class="{on:aass}" @click="ff"></span>
            <span class="text" @click="ff"><span v-show="aass">已</span>收藏</span>
          </div>
        </div>
        <div class="remark">
          <ul>
            <li>
              <p class="title">起送价</p>
              <p class="content">{{seller.minPrice}}<span>元</span></p>
            </li>
            <li>
              <p class="title">商家配送</p>
              <p class="content">{{seller.deliveryPrice}}<span>元</span></p>
            </li>
            <li>
              <p class="title">平均配送时间</p>
              <p class="content">{{seller.deliveryTime}}<span>分钟</span></p>
            </li>
          </ul>
        </div>
      </div>
      <div class="bulletin">
        <h1>公告与活动</h1>
        <div class="content">
          {{seller.bulletin}}
        </div>
        <div class="supports" v-if="seller.supports">
          <ul>
            <li v-for="item in seller.supports">
              <span class="icon" :class="classMap[item.type]"></span>
              <span class="text">{{item.description}}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="pics">
        <div class="pics-wrapper">
          <h1>商家实景</h1>
          <div class="wrapper">
            <ul>
              <li v-for="item in seller.pics">
                <img :src="item" alt="">
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="sellerInfo">
        <h1>商家信息</h1>
        <ul>
          <li v-for="item in seller.infos">
            {{item}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import star from '../star/star.vue'
  import BScroll from 'better-scroll'
  import style from './style.less'
  export default {
    name: 'seller',
    props:{
      seller:{
        type:Object
      }
    },
    data:function () {
      return {
        classMap:['decrease','discount','guarantee','invoice','special'],
        aass:true
      }
    },
    created:function(){
      this.$nextTick(function(){
        this.initScroll();
      })
    },
    methods:{
      initScroll:function(){
        this.scroll=new BScroll(this.$refs.seller,{
          click:true
        });
      },
      ff:function (event) {
        if(!event._constructed){
          return;
        }
        this.aass=!this.aass;
      }
    },
    components:{
      star
    }
  }
</script>

<style>

</style>

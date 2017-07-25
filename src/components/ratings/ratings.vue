<template>
  <div class='ratings'>
    <div class="ratings-content">
      <div class="overview">
        <div class="overview-left">
          <h1 class="score">{{seller.score}}</h1>
          <div class="title">综合评分</div>
          <div class="rank">高于周边商家{{seller.rankRate}}</div>
        </div>
        <div class="overview-right">
          <div class="score-wrapper">
              <span class="title">服务态度</span>
              <star :size='36' :score='seller.serviceScore'></star>
          </div>
          <div class="score-wrapper">
              <span class="title">商品评分</span>
              <star :size='36' :score='seller.foodScore'></star>
          </div>
          <div class="delivery-wrapper">
            <span class="title">送达时间</span>
            <div class="deliveryTime">{{seller.deliveryTime}}分钟</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import style from './style.less'
  import star from '../star/star.vue'
  export default{
    name: 'ratings',
    props:{
      seller:{
        type:Object
      }
    },
    data:function(){
      return {
        ratings:{}
      }
    },
    created:function(){
      this.$http.get('api/ratings').then(function(response){
        if(response.body.errno==0){
          this.ratings=response.body.data;
        }
      })
    },
    components:{
      star
    }
  }
</script>

<style>

</style>

<template>
  <div class='ratings' ref="ratingsScroll">
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
      <div class="content">
        <div class="select">
          <router-link to="/all" class="aa">全部{{ratings.length}}</router-link>
          <router-link to="/satisfaction" class="bb">满意{{satisfactionLength}}</router-link>
          <router-link to="/dissatisfaction" class="cc">不满意{{disSatisfactionLength}}</router-link>
        </div>
        <router-view :ratings='ratings'></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import style from './style.less'
  import BScroll from 'better-scroll'
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
        ratings:[]
      }
    },
    computed:{
        satisfactionLength:function () {
          let i=0;
          this.ratings.forEach(function (item) {
              if(item.score>=4){
                  i++;
              }
          });
          return i;
        },
      disSatisfactionLength:function () {
        let i=0;
        this.ratings.forEach(function (item) {
          if(item.score<4){
            i++;
          }
        });
        return i;
      }
    },
    created:function(){
      this.$http.get('api/ratings').then(function(response){
        if(response.body.errno==0){
          this.ratings=response.body.data;
          this.$nextTick(function () {
              var This=this;
            addEventListener('hashchange',function () {
              This.Scroll.refresh();
            });
            this.initScroll();
          });
        }
      })
    },
    methods:{
        aabb:function () {
            console.log(1);
          this.Scroll.refresh();
        },
      initScroll:function () {
        this.Scroll=new BScroll(this.$refs.ratingsScroll,{
          click:true,
          probeType:3
        });
      }
    },
    components:{
      star
    }
  }
</script>

<style lang="less">
  .star{
    .star-item{
      width: 10px;
      height: 10px;
      margin-right: 10px;
    }
  }

</style>

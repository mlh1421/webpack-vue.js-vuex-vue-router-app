<template>
  <div class="goods">
    <div class="menu-wrapper" ref="menuWrap">
      <ul>
        <li v-for="(item,index) in goods" :class="{'current':currentIndex==index}" @click='selectMenu(index,$event)'>
          <span class="text">
          <span v-show="item.type>0" :class="classMap[item.type]" class="icon"></span>
            {{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper" ref='foodWrapper'>
      <ul>
        <li v-for="item in goods" class="food-list" ref='foodList'>
          <h1>{{item.name}}</h1>
          <ul>
            <li v-for="food in item.foods" class="food-item" @click="show(food,$event)">
              <div class="icon">
                <img :src="food.icon" alt="#">
              </div>
              <div class="content">
                <h2 class="name">{{food.name}}</h2>
                <p class="desc">{{food.description}}</p>
                <div class="extra">
                  <span class="sellCount">月售{{food.sellCount}}分</span><span class="rating">好评率{{food.rating}}%</span>
                  <div class="price">
                    <span class='newPrice'>￥{{food.price}}</span>
                    <span class="oldPrice" v-if="food.oldPrice">
                  ￥{{food.oldPrice}}
                  </span>
                  </div>
                </div>
                <cartcontrol :food='food'></cartcontrol>
              </div>
              <!--<div :class="{foodWrapper:food.ck}">-->
              <!--<food :selectedfood="selectedfood" :ck="ck"></food>-->
              <!--</div>-->
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <shopcart :selectFoods='selectFoods' :deliveryPrice='seller.deliveryPrice' :min-price='seller.minPrice'></shopcart>
  </div>
</template>

<script>
  import style from './style.less'
  import BScroll from 'better-scroll'
  import shopcart from '../shopcart/shopcart.vue'
  import cartcontrol from './cartcontrol.vue'
  import food from '../food/food.vue'
  export default {
    name: 'goods',
    props:{
      seller:{
        type:Object
      }
    },
    data:function () {
      return {
        goods:[],
        classMap:['decrease','discount','guarantee','invoice','special'],
        listHeight:[],
        scrollY:0,
        total:0,
        ck:false,
        selectedfood:{}
      }
    },
    computed:{
      currentIndex(){
        for (let i = 0; i < this.listHeight.length; i++) {
          let height1 = this.listHeight[i];
          let height2 = this.listHeight[i + 1];
          if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
            return i;
          }
        }
        return 0;
      },
      selectFoods:function(){   //筛选被选中的食物，是一个数组
        let foods=[];
        this.goods.forEach(function(good){
          good.foods.forEach(function(food){
            if(food.count){
              foods.push(food);
            }
          })
        })
        return foods;
      }
    },
    created:function () {
//      this.$http.get('api/seller').then(function(response){
//        if(response.body.errno==0){
//          this.seller=response.body.data;
//        }
//      })
      this.$http.get('api/goods').then(function (response) {
        if(response.body.errno==0){
          this.goods=response.body.data;
          this.$nextTick(function(){
            this._initScroll();
            this.calcHeight();
          });
        }else{
          alert(0);
        }
      })
    },
    methods:{
      show:function (food,event) {
        if(!event._constructed){      //取消原生事件
          return;
        }
        this.ck=!this.ck;
        food.ck=this.ck;
        this.selectedfood=food;
      },
      selectMenu:function(index,event){
        if(!event._constructed){      //取消原生事件
          return;
        }
        let foodList=this.$refs.foodList;
        let el=foodList[index];
        this.foodScroll.scrollToElement(el,300);
      },
      _initScroll:function(){
        var This=this;    //注意this的指向
        this.menuScroll=new BScroll(this.$refs.menuWrap,{
          click:true
//          probeType:3
        });
        this.foodScroll=new BScroll(this.$refs.foodWrapper,{
          click:true,
          probeType:3
        });
        this.foodScroll.on('scroll',function (pos) {
          This.scrollY=Math.abs(Math.round(pos.y));
        });
      },
      calcHeight:function(){
        let foodList=this.$refs.foodList;
        let height=0;
        this.listHeight.push(height);
        for(let i=0;i<foodList.length;i++){
          height+=foodList[i].clientHeight;
          this.listHeight.push(height);
        }
      }
    },
    components:{
      shopcart,
      cartcontrol,
      food
    }
  }
</script>

<style>
  .foodWrapper{
    display: none;
  }
</style>

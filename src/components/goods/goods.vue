<template>
  <div class="goods">
    <div class="menu-wrapper" ref='menuWrapper'>
      <ul>
        <li v-for="item in goods">
          <span class="text">
          <span v-show="item.type>0" :class="classMap[item.type]" class="icon"></span>
            {{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper" ref='foodWrapper'>
      <ul>
        <li v-for="item in goods" class="food-list">
          <h1>{{item.name}}</h1>
          <ul>
            <li v-for="food in item.foods" class="food-item">
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
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import style from './style.less'
  import BScroll from 'better-scroll'
  export default {
    name: 'goods',
    data:function () {
      return {
        goods:[],
        classMap:['decrease','discount','guarantee','invoice','special']
      }
    },
    methods:{
      _initScroll:function(){
        this.menuScroll=new BScroll(this.$refs.menuWrapper,{});
        // console.log(this.$refs.food);
        this.foodScroll=new BScroll(this.$refs.foodWrapper,{});
      }
    },
    created:function () {
      this.$http.get('api/goods').then(function (response) {
//          console.log(response.body.errno);
        if(response.body.errno==0){
          this.goods=response.body.data;
          console.log(this.goods);
          this.$nextTick(function(){
            this._initScroll();
          })
        }else{
          alert(0);
        }
      })
    }
  }
</script>

<style>

</style>

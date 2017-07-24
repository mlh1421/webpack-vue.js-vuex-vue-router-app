<template>
  <div class="goods">
    <div class="menu-wrapper" ref='menuWrapper'>
      <ul>
        <li v-for="(item,index) in goods" :class="{'current':currentIndex==index}">
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
        classMap:['decrease','discount','guarantee','invoice','special'],
        listHeight:[],
        scrollY:0
      //  currentIndex:0
      }
    },
    computed:{
//      currentIndex:function () {
//        console.log(this.scrollY);
//        for(let i=0;i<this.listHeight.length;i++){
//          let height1=this.listHeight[i];
//          let height2=this.listHeight[i+1];
//          if(this.scrollY>height1&&this.scrollY<height2){
//            console.log("i:"+i);
//          console.log("height1:"+height1+" scrollY:"+this.scrollY);
//            return i;
//          }
//        }
//        return 0;
//      }
      currentIndex(){
//        console.log(this.scrollY);
        for (let i = 0; i < this.listHeight.length; i++) {
          let height1 = this.listHeight[i];
          let height2 = this.listHeight[i + 1];
//          console.log(i);
          if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
//            console.log(i);
            return i;
          }
        }
        return 0;
      }
    },
    created:function () {
      this.$http.get('api/goods').then(function (response) {
//          console.log(response.body.errno);
        if(response.body.errno==0){
          this.goods=response.body.data;
          // console.log(this.goods);
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
      _initScroll:function(){
          var This=this;    //注意this的指向
        this.menuScroll=new BScroll(this.$refs.menuWrapper,{});
        this.foodScroll=new BScroll(this.$refs.foodWrapper,{
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
    }
  }
</script>

<style>

</style>

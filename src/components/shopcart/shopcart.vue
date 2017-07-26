<template>
  <div class="shopcart">
    <div class="content">
      <div class="content-left">
        <div class="logo-wrapper">
          <div class="logo">
            <span class="icon-shopping_cart"></span>
          </div>
        </div>
        <div class="price">￥{{totalPrice}}</div>
        <div class="description">另需配送费￥{{deliveryPrice}}元</div>
      </div>
      <div class="content-right">
        <div class="pay" :class="payClass">{{payDesc}}</div>
      </div>
    </div>
  </div>
</template>
<script>
  import style from './style.less'
  export default {
    name:'shopCart',
    props:{
      deliveryPrice:{
        type:Number
      },
      minPrice:{
        type:Number
      },
      selectFoods:{     //被选中的食物
        type:Array,
        default(){      //默认值
          return [
            {
              price:3,
              count:1
            }
          ];
        }
      }
    },
    computed:{
      payClass:function () {
        if(this.totalPrice<this.minPrice){
          return 'not-enough';
        }else{
          return 'enough';
        }
      },
      totalPrice:function(){
        let total=0;
        this.selectFoods.forEach(function(food){    //food是数组selectFoods的元素
          total+=food.price*food.count;
        });
        return total;
      },
      totalCount(){
        let count =0;
        this.selectFoods.forEach(function(food){
            this.food.count++;
        });
        return this.food.count;
      },
      payDesc:function(){
        if(this.totalPrice===0){
          return '￥'+this.minPrice+'元起送';
        }else if(this.totalPrice<this.minPrice){
          let diff=this.minPrice-this.totalPrice;
          return '还差'+diff+'元起送';
        }else{
          return '结算'
        }
      }
    }

  }
</script>
<style>

</style>

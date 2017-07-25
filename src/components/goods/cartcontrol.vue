<template>
  <div class="cartcontrol">
  <transition name='move'>
    <span v-show="food.count>0"  transition='move' class="icon-remove_circle_outline cart-decrease" @click="toLower"></span>
  </transition>
    <span v-show="food.count>0" class="cart-count">{{food.count}}</span>
    <span class="icon-add_circle cart-add" @click="toUpper"></span>
  </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    name: 'cartcontrol',
    data:function () {
      return {
        total:0
      }
    },
    props:{
      food:{
        type:Object
      }
    },
    methods:{
      toUpper:function (event) {
          if(!event._constructed){
              return;
          }
          if(!this.food.count){
              Vue.set(this.food,'count',1);
          }else{
            this.food.count+=1;
          }
      },
      toLower:function (event) {
          if(!event._constructed){
              return;
          }
          if(this.food.count>0){
        this.food.count--;
          }else{
            return;
          }
      }
    }

  }

</script>

<style>
  .cartcontrol{
    position: absolute;
    bottom:10px;
    right:18px;
  .icon-add_circle{
    color:rgb(0,160,220);
    line-height: 24px;
    font-size: 24px;
  }
  }
  .cart-count{
    width: 24px;
    display: inline-block;
    vertical-align: top;
    text-align: center;
    /*border:1px solid red;*/
    font-size: 10px;
    line-height:24px;
    color: rgb(147,153,159);
  }
  .icon-remove_circle_outline{
    font-size: 24px;
    color:rgb(0,160,220);
    line-height:24px;
  }
  .move-enter-active, .move-leave-active{
      transition:all 1s;
  }
  .move-enter, .move-leave-to{
    opacity:0;
  }
</style>

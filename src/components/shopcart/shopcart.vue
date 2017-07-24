<template>
  <div class="shopcart">
    <div class="content">
      <div class="content-left">
        <div class="logo-wrapper">
          <div class="logo">
            <span class="icon-shopping_cart"></span>
          </div>
        </div>
        <div class="price">￥{{deliveryPrice}}</div>
        <div class="description">另需配送费￥{{minPrice}}元</div>
      </div>
      <div class="content-right">
      ￥{{minPrice}}起送
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
          selectFoods:{
              type:Array,
              default(){
                  return [];
              }
          }
      }

  }
</script>
<style>

</style>

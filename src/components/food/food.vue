<template>
  <div class="food" :class="{aa:selectedfood.ck}">

    food
  </div>
</template>

<script>
  export default {
    name:'food',
    props:{
      selectedfood:{
        type:Object
      },
      ck:{
          type:Boolean
      }
    },
    created:function () {
//        alert(this.selectedfood.ck);
//      alert(food.ck);
//      console.log(this.se)
    }
  }
</script>

<style lang="less">
  .food{
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    background: #eee;
    opacity: 0.5;
    bottom: 50px;
    z-index: 4100;
  }
</style>

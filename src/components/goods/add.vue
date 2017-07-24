<template>
  <div class="add">
    <span v-show="total>0" class="icon-remove_circle_outline" @click="toLower"></span>
    <span v-show="total>0" class="num">{{total}}</span>
    <span class="icon-add_circle" @click="toUpper"></span>
  </div>
</template>

<script>
  export default {
    name: 'add',
    data:function () {
      return {
        total:0
      }
    },
    methods:{
      toUpper:function () {
          this.total+=1;
      },
      toLower:function () {
        this.total-=1;
      }
    }

  }

</script>

<style>
.num{
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
</style>

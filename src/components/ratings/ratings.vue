<template>
  <div class='ratings'>
    <div class="ratings-header">
      <div class="header-left">
        <span class="a">4.2</span>
        <span class="b">综合评分</span>
        <span class="c">高于周边商家69.2%</span>
      </div>
      <div class="header-right">
        <div class="server">
          <span>服务态度</span>
          <star :score="4"></star>
        </div>
        <div class="server2">
          <span>服务态度</span>
          <star :score="3"></star>
        </div>
        <div class="server3">
          <span>送达时间</span>
          <star :score="2.6"></star>
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

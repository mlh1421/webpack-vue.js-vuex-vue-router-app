<template>
  <div>
    <h1>
      <span @click="greet" class="icon-check_circle" :class="{on:!ck}"></span>
      <span @click='greet' class="text">只看有内容的评价</span>
    </h1>
    <ul>
      <li v-for="item in my" v-show="item.text!=ck">
        <div class="avatar">
          <img :src="item.avatar" alt="">
        </div>
        <div class="content">
        <div class="username">
          {{item.username}}
        </div>
          <star :score="item.score"></star>
          <div class="deliveryTime">
            {{item.deliveryTime}}
          </div>
          <p class="ratingText">{{item.text}}</p>
          <div class="rateTime">
            {{new Date(item.rateTime).getFullYear()+"-"+(new Date(item.rateTime).getMonth()+1)+"-"+new Date(item.rateTime).getDate()+"-"+new Date(item.rateTime).getHours()+"-"+new Date(item.rateTime).getMinutes()}}
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  import star from '../star/star.vue'
  export default {
    name: 'all',
    props:{
      ratings:{
        type:Array
      }
    },
    data:function () {
      return {
        ck:true
      }
    },
    computed:{
      my:function(){
        var temp=[];
        this.ratings.forEach(function(item){
          if(item.score>=4){
            temp.push(item);
          }
        });
        return temp;
      }
    },
    methods:{
      greet:function(event){
//        if(!event._constructed){
//          return;
//        }
        this.ck=!this.ck;
      }
    },
    components:{
      star
    }
  }
</script>
<style lang="less">
  h1{
    display:block;
    padding:0 18px;
  span{
    display: inline-block;
    padding: 12px 0;
    vertical-align: middle;
    color:rgb(147,153,159);
  }
  .text{
    font-size: 12px;
    line-height: 24px;
  }
  .icon-check_circle{
    font-size:24px;
  }
  .on{
    display: inline-block;
    color:#00c850;
  }
  }
</style>

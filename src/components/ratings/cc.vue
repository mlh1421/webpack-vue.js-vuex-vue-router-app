<template>
  <div>
    <h1>
      <span class="icon-check_circle" @click="greet" :class="{on:!ck}"></span>
      <span @click='greet'>只看有内容的评价</span>
    </h1>
    </h1>
    <ul>
      <li v-for="item in bmy" v-show="item.text!=ck">
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
    computed:{
      bmy:function(){
        var temp=[];
        if(this.ratings){
          this.ratings.forEach(function(item){
            if(item.score<4){
              temp.push(item);
            }
          })
        }
        return temp;
      }
    },
    data:function () {
      return {
        ck:true
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
    font-size: 12px;
  }
  .text{
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

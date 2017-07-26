<template>
  <div>
    <h1>
      <span class="icon-check_circle" :class="{on:!ck}"></span>
      <span @click='greet'>只看有内容的评价</span>
    </h1>
    <ul>
      <li v-for="item in ratings" v-if="item.text!=ck">
        <div class="avatar">
          <img :src="item.avatar" alt="">
        </div>
        <div class="content">
          {{item.username}}
          <star :score="item.score"></star>
          <div>
            {{item.deliveryTime}}
          </div>
          <p>{{item.text}}</p>
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
    data:function(){
      return {
        ck:true
      }
    },
    components:{
      star
    },
    methods:{
      greet:function(event){
        if(!event._constructed){
          return;
        }
        this.ck=!this.ck
        console.log(this.ch);
      }
    }
  }
</script>
<style>
  h1{
    margin:10px 0;
  }
</style>

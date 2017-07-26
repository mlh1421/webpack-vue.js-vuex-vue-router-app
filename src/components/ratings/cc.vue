<template>
  <div>
    <h1>
      <span class="icon-check_circle" :class="{on:!ck}"></span>
      <span @click='greet'>只看有内容的评价</span>
    </h1>
    <ul>
      <li v-for="item in bmy" v-show="item.text!=ck">
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
    data:function () {
      return {
        ck:true
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
    methods:{
      greet:function(event){
        if(!event._constructed){
          return;
        }
        this.ck=!this.ck;
      }
    },
    components:{
      star
    }
  }
</script>
<style>
  .on{
    /*display: inline-block;*/
    /*width: 10px;*/
    /*height: 10px;*/
    /*background:red;*/
    /*color:red;*/
  }

</style>

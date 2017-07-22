<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import header from './components/header/head.vue'
  export default {
    name: 'App',
    data:function () {
      return {
        seller:{}
      }
    },
    created:function () {
      this.$http.get('/api/seller').then(function (response) {
        response=response.body;   //body与json()返回的数据不一样
        if(response.errno==0){
          this.seller=response.data;
        }else{
          alert(0);
        }
      })
    },
    components:{
      'v-header':header
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    .tab
      display flex
      width: 100%
      height: 40px
      line-height: 40px
      border-bottom: 1px solid rgba(7,17,27,0.1)
      .tab-item
        flex 1
        text-align center
        &> a
          display:block
          font-size:14px
          color rbg(77,85,93)
        .router-link-active
          color:rgb(240,20,20)
</style>

<template>
  <div class="detail-wrapper clearfix">
    <div class="detail-main">
      <h1>{{seller.name}}</h1>
      <div class="star-wrapper">
        <star :size="40" :score="seller.score"></star>
      </div>
      <div class="title">
        <div class="line">
          <div></div>
        </div>
        <div class="text">优惠信息</div>
        <div class="line">
          <div></div>
        </div>
      </div>
      <div class="content">
        <div v-if="seller.supports" class="support">
          <template v-for='i in seller.supports.length'>
            <div class="item">
              <span class="icon" :class="classMap[seller.supports[i-1].type]"></span>
              <span class="text">{{seller.supports[i-1].description}}</span>
            </div>
          </template>
        </div>
      </div>
      <div class="title">
        <div class="line">
          <div></div>
        </div>
        <div class="text">商家公告</div>
        <div class="line">
          <div></div>
        </div>
      </div>
      <div class="bulletin-content">
        <p>{{seller.bulletin}}</p>
      </div>
    </div>
    <div class="detail-close" @click="showDetail">
      <span class="icon-close"></span>
    </div>
  </div>
</template>
<script>
  import star from '../star/star.vue'
  import store from './vuex.js'
  export default  {
    name: 'detail',
    props:{
        seller:{
            type:Object
        },
      classMap:{
            type:Array
      }
    },
    created:function () {
//      this.seller=seller;   //只有第一次调用ajax才有效
    },
    methods:{
      showDetail:function () {
        store.commit('increment');
      }
    },
    components:{
      star
    }
  }
</script>




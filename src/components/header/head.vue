<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img class="img" :src="seller.avatar" alt="">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}}分钟送达
          <!--{{seller}}-->
        </div>
        <div v-if="seller.supports" class="support">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div  v-if="seller.supports" class="supports-count" @click="showDetail">
        <span>{{seller.supports.length}}个</span>
        <span class="icon-keyboard_arrow_right"></span>
      </div>
    </div>
    <div class="bulletin-wrapper">
      <span class="bulletin-icon"></span>
      <span class="bulletin-text">{{seller.bulletin}}</span>
      <span class="icon-keyboard_arrow_right"></span>
    </div>
    <div class="background">
      <img :src="seller.avatar" alt="#">
    </div>
      <div class="detail" v-show="detailShow" >
        <detail :seller="seller" :classMap="classMap"></detail>
      </div>
  </div>
</template>

<script>
import Vuex from 'vuex'
import store from './vuex.js'
import Vue from 'vue'
  import style from './header.less'
  import icomon from '../../common/style.css'
  import star from '../star/star.vue'
  import detail from './detail.vue'
//import
  export default {
    name:'head',
    data:function () {
      return {
//        detailShow:false
      }
    },
    props:{
      seller:{
        type:Object
      }
    },
    computed:{
        detailShow:function () {
          return store.state.detailShow;
        }
    },
    methods:{
      showDetail:function () {
//        this.detailShow=store.state.detailShow;
        store.commit('increment');
      }
    },
    created:function () {
      this.classMap=['decrease','discount','guarantee','invoice','special'];
    },
    components:{
      star,
      detail
    }

    //    data:function () {
    //      return {
    //        seller:seller
    //      }
    //    }
  }
</script>

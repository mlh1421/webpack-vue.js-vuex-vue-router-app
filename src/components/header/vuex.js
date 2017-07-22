  import Vue from 'vue'
  import Vuex from 'vuex'
  Vue.use(Vuex);
export default new Vuex.Store({
    state:{
      detailShow:false
    },
    mutations:{
      increment:function (state) {
        state.detailShow=!state.detailShow;
      }
    }
  })


import Vue from 'vue'
import Router from 'vue-router'
import goods from '../components/goods/goods.vue'
import seller from '../components/seller/seller.vue'
import ratings from '../components/ratings/ratings.vue'
import all from '../components/ratings/all.vue'
import satisfaction from '../components/ratings/bb.vue'
import dissatisfaction from '../components/ratings/cc.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: goods
    },
    {
      path: '/goods',
      component: goods
    },
    {
      path: '/seller',
      component: seller
    },
    {
      path: '/ratings',
      component: ratings,
      redirect:'/all',
      children: [
        {
          path: '',
          component: all
        },
        {
          path: '/all',
          component: all
        },
        {
          path: '/satisfaction',
          component: satisfaction
        },
        {
          path: '/dissatisfaction',
          component:dissatisfaction
        }
      ]
    }
  ]
})

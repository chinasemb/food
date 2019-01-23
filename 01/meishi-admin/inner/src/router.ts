import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/views/main.vue'
import Category from '@/views/category.vue'
import User from '@/views/user.vue'
import Recommend from '@/views/recommend.vue'
import Food from '@/views/food.vue'
import Catemenu from '@/views/catemenu.vue'
import Comment from '@/views/comment.vue'
import Favorite from '@/views/favorite.vue'
import store from './store';

Vue.use(Router)

const router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: '/',
      component: Main
    },
    {
      path: '/category',
      name: '/category',
      component: Category
    },
    {
      path: '/user',
      name: '/user',
      component: User
    },
    {
      path: '/recommend',
      name: '/recommend',
      component: Recommend
    },
    {
      path: '/food',
      name: '/food',
      component: Food
    },
    {
      path: '/catemenu',
      name: '/catemenu',
      component: Catemenu
    },
    {
      path: '/comment',
      name: '/comment',
      component: Comment
    },
    {
      path: '/favorite',
      name: '/favorite',
      component: Favorite
    },
  ]
})

router.beforeEach( (to, from , next) => {
  // console.log(to.name);
  store.commit('setRouterName', to.name)  

  next();
} )

export default router

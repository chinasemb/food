import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    router: {},
    menus:  [
      {
        "text": '首页',
        "name": '/',
        "icon": 'iconfont icon-shouye'
      },
      {
        "text": '精选推荐',
        "name": '/recommend',
        "icon": 'iconfont icon-tuijian'
      },
      {
        "text": '分类',
        "name": '/category',
        "icon": 'iconfont icon-fenlei'
      },
      {
        "text": '美食',
        "name": '/food',
        "icon": 'iconfont icon-Food-Icons-'
      },
      {
        "text": '菜单',
        "name": '/catemenu',
        "icon": 'iconfont icon-caidan'
      },
      {
        "text": '用户',
        "name": '/user',
        "icon": 'iconfont icon-yonghu-tianchong'
      },
      {
        "text": '评论',
        "name": '/comment',
        "icon": 'iconfont icon-pinglun'
      },
      {
        "text": '收藏',
        "name": '/favorite',
        "icon": 'iconfont icon-star'
      },
    ]
  },
  mutations: {
    setRouterName(state, payload) {

      let router = state.menus.find(menu => menu.name == payload)

      if (router) {
        state.router = router
      }else{
        state.router = state.menus[0]
      }

    }
  },
  actions: {

  }
})

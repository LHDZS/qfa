import Vue from 'vue'
import App from './App'
import MpvueRouterPatch from 'mpvue-router-patch'
import {post, get, del, put, http} from '../src/utils/requestMethod'
Vue.prototype.$post = post
Vue.prototype.$get = get
Vue.prototype.$del = del
Vue.prototype.$put = put
Vue.prototype.url = http

Vue.config.productionTip = false
App.mpType = 'app'

Vue.use(MpvueRouterPatch)

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: [
      '^pages/index/main',
      'pages/publish/main',
      'pages/mine/main'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#52b0ff',
      navigationBarTitleText: '圈粉儿',
      navigationBarTextStyle: 'white'
    },
    tabBar: {
      color: '#999999',
      selectedColor: '#1296db',
      backgroundColor: '#fff',
      borderStyle: 'black',
      list: [
        {
          pagePath: 'pages/index/main',
          iconPath: '/static/img/fujin.png',
          selectedIconPath: '/static/img/fujinl.png',
          text: '发现'
        },
        {
          pagePath: 'pages/publish/main',
          iconPath: '/static/img/fabu.png',
          selectedIconPath: '/static/img/fabul.png',
          text: '发布'
        },
        {
          pagePath: 'pages/mine/main',
          iconPath: '/static/img/wode.png',
          selectedIconPath: '/static/img/wodel.png',
          text: '个人中心'
        }
      ]
    }
  }
}

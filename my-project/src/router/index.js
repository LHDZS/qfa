import Vue from 'vue'
import Router from 'mpvue-router-patch'
import writing from '../writing/main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '../writing/mian',
      name: 'writing',
      component: writing
    }
  ]
})

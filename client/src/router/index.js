import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import calculateaqi from '@/components/calculateaqi'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/calculateaqi',
      name: 'calculateaqi',
      component: calculateaqi
    }
  ]
})

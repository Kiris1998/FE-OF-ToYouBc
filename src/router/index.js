import Vue from 'vue'
import Router from 'vue-router'
import Daily from '@/components/Daily'
import Designer from '@/components/Designer'
import Other from '@/components/Other'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {
        name: 'Daily'
      }
    },
    {
      path: '/daily',
      name: 'Daily',
      component: Daily
    },
    {
      path: '/designer',
      name: 'Designer',
      component: Designer
    },
    {
      path: '/other',
      name: 'Other',
      component: Other
    }
  ]
})

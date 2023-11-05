import Vue from 'vue'
import Router from 'vue-router'




//North
import NorthIndex from '@/components/biomes/Index/IndexNorth'
import NorthCreate from '@/components/biomes/Create/CreateNorth'
import NorthEdit from '@/components/biomes/Edit/EditNorth'
import NorthShow from '@/components/biomes/Show/ShowNorth'

Vue.use(Router)

export default new Router({
  routes: [
   

    //central
    {
      path: '/',
      name: 'norths',
      component: NorthIndex
    },
    {
      path: '/north/create',
      name: 'north-create',
      component: NorthCreate
    },
    {
      path: '/north/edit/:northId',
      name: 'north-edit',
      component: NorthEdit
    },
    {
    path: '/north/:northId',
    name: 'nort',
    component: NorthShow
    },

    // {
    //   path: '/index',
    //   name: 'index',
    //   component: Index
    // }
    

    // {
    //   path: '/login',
    //   name: 'login',
    //   component: Login
    //  },
  ]
})

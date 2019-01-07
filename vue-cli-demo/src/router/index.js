import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/index'
//子路由
import IndexPhone from '../components/index/phone/phoFlex'
import IndexRecommend from '../components/index/recommend/indexFlex'
import IndexCapacity from '../components/index/capacity/capaFlex'
import IndexTcl from '../components/index/tcl/tclFlex'
import IndexNote from '../components/index/note/noteFlex'
import IndexAround from '../components/index/around/aroFlex'
import IndexHouse from '../components/index/house/housFlex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      redirect:"/IndexRecommend",
      children:[
        {
          path:"IndexRecommend",
          name:'IndexRecommend',
          component: IndexRecommend
        },
        {
          path:"IndexPhone",
          name:'IndexPhone',
          component: IndexPhone
        },
        {
          path:"IndexCapacity",
          name:"IndexCapacity",
          component:IndexCapacity
        },
        {
          path:"IndexTcl",
          name:"IndexTcl",
          component:IndexTcl
        },
        {
          path:"IndexNote",
          name:"IndexNote",
          component:IndexNote
        },
        {
          path:"IndexAround",
          name:"IndexAround",
          component:IndexAround
        },
        {
          path:"IndexHouse",
          name:"IndexHouse",
          component:IndexHouse
        }
      ],
    }
  ]
})

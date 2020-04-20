import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Index from '../components/Index.vue'
import Diqu from '../components/xuexiao/Diqu.vue'
import Xuexiao from '../components/xuexiao/Xuexiao.vue'
import Zoushi from '../components/xuexiao/Zoushi.vue'
import Zhongdian from '../components/fenlei/Zhongdian.vue'
import Putong from '../components/fenlei/Putong.vue'
import Qita from '../components/fenlei/Qita.vue'
import Tuijianyh from '../components/yonghu/Tuijian_yh.vue'
import Xiugaiyh from '../components/yonghu/Xiugai_yh.vue'
import Xuexiaogl from '../components/guanli/Xuexiao_gl.vue'
import Help from '../components/Help.vue'
import Zhuce from '../components/Zhuce.vue'
import Bianji from '../components/guanli/Bianji.vue'
import Xuexiaoadd from '../components/guanli/Xuexiao_add.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/index' },
  { path: '/login', component: Login },
  { path: '/index', component: Index },
  { path: '/xuexiao', component: Xuexiao },
  { path: '/diqu', component: Diqu },
  { path: '/zoushi', component: Zoushi },
  { path: '/zhongdian', component: Zhongdian },
  { path: '/putong', component: Putong },
  { path: '/qita', component: Qita },
  { path: '/tuijian_yh', component: Tuijianyh },
  { path: '/xiugai_yh', component: Xiugaiyh },
  { path: '/xuexiao_gl', component: Xuexiaogl },
  { path: '/help', component: Help },
  { path: '/zhuce', component: Zhuce },
  { path: '/bianji', component: Bianji },
  { path: '/xuexiao_add', component: Xuexiaoadd }
]

const router = new VueRouter({
  routes
})

export default router

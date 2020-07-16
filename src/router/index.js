import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import News from '../views/News.vue'
import newsDetail from '../components/news/newsDetail.vue'
import Careers from '../components/careers/Careers.vue'
import JobDetail from '../components/careers/JobDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/news',
    name: 'News',
    component: News,
  },
  {
    path: '/news/:newsId',
    name: 'newsDetail',
    component: newsDetail
  },
  {
    path: '/careers',
    name: 'careers',
    component: Careers,
  },
  {
    path: "/careers/:jobsId",
    name: "jobsDetail",
    component: JobDetail
  },
  {
    path: '/contact',
    name: 'contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/contact/Contact.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

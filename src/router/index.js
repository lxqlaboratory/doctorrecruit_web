import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/register',
    component: () => import('@/views/login/register'),
    hidden: true
  },
  {
    path: '/forgetPassword',
    component: () => import('@/views/login/forgetPassword'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '/dashboard',
    component: Layout,
    redirect: '/dashboard/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '系统通知', icon: 'dashboard' }
    }]
    // meta: { title: '首页', icon: 'dashboard',roles: ['18'] }
  },
  { path: '/', redirect: '/login', hidden: true },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true },
  {
    path: '/doctor',
    component: Layout,
    children: [{
      path: 'ChangePassword',
      name: 'ChangePassword',
      component: () => import('@/views/doctor/changePassword'),
      meta: { title: '修改密码', icon: 'example'}
    }],
    meta: { title: '修改密码', icon: 'dashboard',roles: ['2848'] }
  },
  {
    path: '/doctor',
    component: Layout,
    children: [{
      path: 'PerfectInfo',
      name: 'PerfectInfo',
      component: () => import('@/views/doctor/perfectInfo'),
      meta: { title: '完善信息', icon: 'example'}
    }],
    meta: { title: '完善信息', icon: 'dashboard',roles: ['2847'] }
  },
  {
    path: '/doctor',
    component: Layout,
    children: [{
      path: 'DoctorPayment',
      name: 'DoctorPayment',
      component: () => import('@/views/doctor/doctorPayment'),
      meta: { title: '临床博士网银缴费', icon: 'example'}
       },
      {
        path: 'RecruitFeeEbankPaymentRequest',
        name: 'RecruitFeeEbankPaymentRequest',
        component: () => import('@/views/doctor/recruitFeeEbankPaymentRequest'),
        hidden:true
      },
      {
        path: 'RecruitFeeEbankPaymentReturn',
        name: 'RecruitFeeEbankPaymentReturn',
        component: () => import('@/views/doctor/recruitFeeEbankPaymentReturn'),
        hidden:true
      },
    ],

    meta: { title: '临床博士网银缴费', icon: 'dashboard',roles: ['2850'] }
  },
  {
    path: '/doctor',
    component: Layout,
    children: [{
      path: 'downloadQualificationChecklist',
      name: 'downloadQualificationChecklist',
      component: () => import('@/views/doctor/downloadQualificationChecklist'),
      meta: { title: '下载资格审查表', icon: 'example'}
    }],
    meta: { title: '下载资格审查表', icon: 'dashboard',roles: ['2851'] }
  },
  {
    path: '/doctor',
    component: Layout,
    children: [{
      path: 'QueryExamRoom',
      name: 'QueryExamRoom',
      component: () => import('@/views/doctor/queryExamRoom'),
      meta: { title: '考场信息查询', icon: 'example'}
    }],
    meta: { title: '考场信息查询', icon: 'dashboard',roles: ['2852'] }
  },
  {
    path: '/doctor',
    component: Layout,
    children: [{
      path: 'clinicPrintAdmission',
      name: 'clinicPrintAdmission',
      component: () => import('@/views/doctor/clinicPrintAdmission'),
      meta: { title: '打印准考证', icon: 'example'}
    }],
    meta: { title: '打印准考证', icon: 'dashboard',roles: ['2849'] }
  },
  {
    path: '/doctor',
    component: Layout,
    children: [{
      path: 'QueryResults',
      name: 'QueryResults',
      component: () => import('@/views/doctor/queryResults'),
      meta: { title: '成绩查询', icon: 'example'}
    }],
    meta: { title: '成绩查询', icon: 'dashboard',roles: ['2924'] }
  },
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router

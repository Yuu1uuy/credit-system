import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import store from '@/store'
Vue.use(VueRouter)
if (localStorage.getItem('token')) {
  store.dispatch('getMenuList')
}

const routes = [
  {
    path: '/',
    redirect: '/login',
    component: LoginView
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginView.vue')
  },
  {
    path: '/',
    redirect: '/home',
    //下面这两个页面按照层级自行创建
    component: () => import('@/layout/layout.vue'),
    children: [
      {
        meta: {
          title: '首页'
        },
        path: '/home',
        component: () => import('@/views/HomeView')
      }
    ]
  },
  // {
  //   path: "/loan",
  //   redirect: "/loan-input/index",
  //   component: () => import('@/layout/layout.vue'),
  //   meta: {
  //     title: "贷款管理"
  //   },
  //   children: [
  //     {
  //       name: "loan-input",
  //       path: "/loan-input/index",
  //       component: () => import("@/views/loan/IndexView.vue"),
  //       meta: {
  //         title: "贷款申请"
  //       }
  //     }
  //   ]
  // },
  // {
  //   path: "/application-manage",
  //   component: () => import('@/layout/layout.vue'),
  //   redirect: "/application-manage/index",
  //   meta: {
  //     roles: [
  //       "input"
  //     ],
  //     title: "申请管理"
  //   },
  //   children: [
  //     {
  //       path: "/application-manage/index",
  //       component: () => import("@/views/application-manage/index.vue"),
  //       name: "/application-manage",
  //       meta: {
  //         title: "申请列表"
  //       }
  //     }
  //   ]
  // },
  // {
  //   path: "/loan-approve",
  //   component: () => import('@/layout/layout.vue'),
  //   redirect: "/loan-approve/first",
  //   meta: {
  //     roles: [
  //       "approve"
  //     ],
  //     title: "贷款审批"
  //   },
  //   children: [
  //     {
  //       path: "/loan-approve/first",
  //       component: () => import("@/views/loan-approve/first.vue"),
  //       name: "first",
  //       meta: {
  //         title: "初审"
  //       }
  //     },
  //     {
  //       path: "/loan-approve/end",
  //       component: () => import("@/views/loan-approve/end.vue"),
  //       name: "end",
  //       meta: {
  //         title: "终审"
  //       }
  //     }
  //   ]
  // },
  // {
  //   path: '/contract-manage',
  //   redirect: '/contract-manage/index',
  //   meta: {
  //     title: '合同管理'
  //   },
  //   component: () => import('@/layout/layout.vue'),
  //   children: [
  //     {
  //       path: '/contract-manage/index',
  //       name: 'contract-manage',
  //       meta: {
  //         title: '合同列表'
  //       },
  //       component: () => import('@/views/contract-manage/IndexView.vue'),
  //     },
  //   ]
  // },
  // {
  //   path: "/permission",
  //   component: () => import('@/layout/layout.vue'),
  //   redirect: "/permission/create",
  //   meta: {
  //     title: "权限管理"
  //   },
  //   children: [
  //     {
  //       path: "/permission/create",
  //       component: () => import("@/views/permission/create.vue"),
  //       name: "create",
  //       meta: {
  //         title: "创建管理员"
  //       }
  //     },
  //     {
  //       path: "/permission/list",
  //       component: () => import("@/views/permission/list.vue"),
  //       name: "list",
  //       meta: {
  //         title: "列表展示"
  //       }
  //     }
  //   ]
  // }
]

const router = new VueRouter({
  routes
})

export default router

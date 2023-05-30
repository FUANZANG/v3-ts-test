// 对外暴露配置路由(常量路由)
export const constantRoute = [
  {
    path: "/login",
    component: () => import("@/views/login/index.vue"),
    name: "login", // 命名路由
    meta: {
      title: "登录",
      hidden: true,
    },
  },
  {
    path: "/",
    component: () => import("@/layout/index.vue"),
    name: "layout", //
    children: [
      {
        path: "/home",
        component: () => import("@/views/home/index.vue"),
        meta: {
          title: "首页",
          hidden: false,
        },
      },
    ],
  },
  {
    path: "/404",
    component: () => import("@/views/404/index.vue"),
    name: "404", //
    meta: {
      title: "404",
      hidden: true,
    },
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
    name: "Any",
    meta: {
      title: "任意路由",
      hidden: true,
    },
  },
];

// 路由鉴权
import router from "@/router";
import setting from "./setting";
// @ts-ignore
import nprogress from "nprogress";
// 引入进度条样式
import "nprogress/nprogress.css";
nprogress.configure({ showSpinner: false });
// 用户相关的仓库
import useUserStore from "./store/modules/user";
import pinia from "./store";
const userStore = useUserStore(pinia);

// 全局前置守卫
router.beforeEach(async (to, from, next) => {
  // 顶部进度条
  nprogress.start();
  const token = userStore.token;
  const username = userStore.username;
  if (token) {
    if (to.path == "/login") {
      next({ path: "/" });
    } else {
      // 登录成功访问其余路由
      // 判断是否有用户信息
      if (username) {
        next();
      } else {
        try {
          // 获取用户信息
          await userStore.userInfo();
          next({ ...to });
        } catch (e) {
          // token过期或被修改
          await userStore.userLogout();
          next({ path: "/login", query: { redirect: to.path } });
        }
      }
    }
  } else {
    if (to.path == "/login") {
      next();
    } else {
      next({ path: "/login", query: { redirect: to.path } });
    }
    nprogress.start();
  }
});
// 全局后置守卫
router.afterEach((to) => {
  document.title = `${setting.title}-${to.meta.title}`;
  nprogress.done();
});

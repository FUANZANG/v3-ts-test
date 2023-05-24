// 通过vue-router 插件实现路由配置
import { createRouter, createWebHashHistory } from "vue-router";
import { constantRoute } from "./routes";

// 创建路由器
const router = createRouter({
  // 路由模式 hash
  history: createWebHashHistory(),
  routes: constantRoute,
  // 滚动行为
  scrollBehavior() {
    return {
      left: 0,
      top: 0,
    };
  },
});

export default router;

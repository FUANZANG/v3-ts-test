import { createApp } from "vue";
import App from "./App.vue";
// 引入模板的全局样式
import "@/styles/index.scss";
// 引入element-plus
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
// 配置element国际化
// @ts-expect-error忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
// SVG插件
import "virtual:svg-icons-register";
import globalComponent from "@/components";
// 引入路由
import router from "./router";
// 引入仓库
import pinia from "./store";
// 引入路由鉴权文件
import "./permission";
// 获取应用实例对象
const app = createApp(App);
// 安装插件
app.use(ElementPlus, {
  locale: zhCn,
});
// 安装自定义插件
app.use(globalComponent);
// 注册路由
app.use(router);
// 注册仓库
app.use(pinia);
// 挂载应用
app.mount("#app");

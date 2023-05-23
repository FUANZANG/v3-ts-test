import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
// 引入element-plus
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
// 配置element国际化
// @ts-expect-error忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
// 获取应用实例对象
const app = createApp(App);
// 安装插件
app.use(ElementPlus, {
  locale: zhCn,
});
import globalComponent from "@/components";
// 安装自定义插件
app.use(globalComponent);
// SVG插件
import "virtual:svg-icons-register";
// 引入模板的全局样式
import "@/styles/index.scss";
// 挂载应用
app.mount("#app");
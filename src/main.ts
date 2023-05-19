import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
// 引入element-plus
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
// 配置element国际化
// @ts-ignore忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
// 获取应用实例对象
const app = createApp(App);
// 安装插件
app.use(ElementPlus, {
  locale: zhCn,
});
// 挂载应用
app.mount("#app");

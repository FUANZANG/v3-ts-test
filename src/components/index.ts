// 引入项目种全部的全局组件
import SvgIcon from "./SvgIcon/index.vue";

// 全局对象
const allGlobalComponents = { SvgIcon };

// 对外暴露插件对象
export default {
  install(app) {
    Object.keys(allGlobalComponents).forEach((key) => {
      // 注册为全局组件
      app.component(key, allGlobalComponents[key]);
    });
  },
};

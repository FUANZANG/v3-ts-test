// 引入项目种全部的全局组件
import SvgIcon from "./SvgIcon/index.vue";
//引入element-plus提供全部图标组件
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

// 全局对象
const allGlobalComponents = { SvgIcon };

// 对外暴露插件对象
export default {
  install(app: any) {
    Object.keys(allGlobalComponents).forEach((key) => {
      // 注册为全局组件
      app.component(key, allGlobalComponents[key]);
    });
    //将element-plus提供图标注册为全局组件
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component);
    }
  },
};

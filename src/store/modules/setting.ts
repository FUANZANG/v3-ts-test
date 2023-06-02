// layout组件的相关配置仓库
import { defineStore } from "pinia";

const useLayoutSettingStore = defineStore("SettingStore", {
  state: () => {
    return {
      fold: false, /// 菜单折叠
    };
  },
});

export default useLayoutSettingStore;

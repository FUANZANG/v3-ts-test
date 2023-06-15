// 创建用户相关的仓库
import { defineStore } from "pinia";
// 引入接口
import { reqLogin, reqUserInfo } from "@/api/user/index";
// 引入数据类型
import type { loginFormType, loginResponseData } from "@/api/user/type";
import type { UserState } from "./types/types";
// 引入操作本地存储的工具
import { SET_TOKEN, GET_TOKEN, REMOVE_TOKEN } from "@/utils/token";
// 引入常量路由
import { constantRoute } from "@/router/routes";
const useUserStore = defineStore("User", {
  // 小仓库存数据的地方
  state: (): UserState => {
    return {
      token: GET_TOKEN(), // 用户标识
      menuRoutes: constantRoute, // 仓库存储生成菜单的数组(路由)
      username: "",
      avatar: "",
    };
  },
  // 异步 逻辑的地方
  actions: {
    // 用户登录的方法
    async userLogin(data: loginFormType) {
      // 用户登录的方法
      const result: loginResponseData = await reqLogin(data);
      // 成功返回 200 && token
      if (result.code == 200) {
        this.token = result.data.token as string;
        SET_TOKEN(result.data.token as string);
      }
      // 失败返回 201 && error msg
    },
    // 获取用户信息方法
    async userInfo() {
      const result = await reqUserInfo();
      if (result.code == 200) {
        this.username = result.data.checkUser.username;
        this.avatar = result.data.checkUser.avatar;
        return "ok";
      } else {
        return Promise.reject("获取用户信息失败");
      }
    },
    // 退出登录
    userLogout() {
      this.token = "";
      this.username = "";
      this.avatar = "";
      REMOVE_TOKEN();
    },
  },
  //
  getters: {},
});

export default useUserStore;

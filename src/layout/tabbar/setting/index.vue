<template>
  <el-button
    size="small"
    icon="Refresh"
    circle
    @click="updateRefresh"
  ></el-button>
  <el-button
    size="small"
    icon="FullScreen"
    circle
    @click="fullScreen"
  ></el-button>
  <img
    :src="userStore.avatar"
    style="width: 24px; height: 24px; margin: 0px 10px; border-radius: 50%"
  />
  <!-- 下拉菜单 -->
  <el-dropdown>
    <span class="el-dropdown-link">
      {{ userStore.username }}
      <el-icon class="el-icon-right">
        <arrow-down></arrow-down>
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
// 获取用户相关的小仓库
import useUserStore from "@/store/modules/user";
import useLayoutSettingStore from "@/store/modules/setting";
let userStore = useUserStore();
let layoutSettingStore = useLayoutSettingStore();
// 获取路由器对象
let $router = useRouter();
// 获取路由对象
let $route = useRoute();
// 刷新
const updateRefresh = () => {
  layoutSettingStore.refresh = !layoutSettingStore.refresh;
};
// 全屏
const fullScreen = () => {
  // DOM 对象的属性可以判断当前是否为全屏模式：true:全屏/false:非全屏
  let full = document.fullscreenElement;
  // requestFullscreen/exitFullscreen文档根节点的方法
  if (!full) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
};
// 退出登录
const logout = async () => {
  await userStore.userLogout();
  // 重新登录重定向到退出前的页面
  $router.push({ path: "/login", query: { redirect: $route.path } });
};
</script>

<script lang="ts">
export default {
  name: "Setting",
};
</script>

<style scoped></style>

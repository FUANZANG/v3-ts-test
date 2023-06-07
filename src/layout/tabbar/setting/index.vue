<template>
  <el-button
    size="small"
    icon="Refresh"
    circle
    @click="updateRefresh"
  ></el-button>
  <el-button size="small" icon="FullScreen" circle></el-button>
  <img src="" alt="" />
  <!-- 下拉菜单 -->
  <el-dropdown>
    <span class="el-dropdown-link">
      admin
      <el-icon class="el-icon-right">
        <arrow-down></arrow-down>
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item> 退出登录 </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import useLayoutSettingStore from "@/store/modules/setting";
let layoutSettingStore = useLayoutSettingStore();
const updateRefresh = () => {
  layoutSettingStore.refresh = !layoutSettingStore.refresh;
};
</script>

<script lang="ts">
export default {
  name: "Setting",
};
</script>

<style scoped></style>

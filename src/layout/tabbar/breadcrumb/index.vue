<template>
  <!-- 左侧图标 -->
  <el-icon style="margin-right: 10px" @click="changeIcon">
    <component :is="layoutSettingStore.fold ? 'Expand' : 'Fold'"></component>
  </el-icon>
  <!-- 面包屑 -->
  <el-breadcrumb separator-icon="ArrowRight">
    <el-breadcrumb-item>xxx</el-breadcrumb-item>
    <el-breadcrumb-item>xxx</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
// 折叠图标切换
import useLayoutSettingStore from "@/store/modules/setting";
let layoutSettingStore = useLayoutSettingStore();
const changeIcon = () => {
  layoutSettingStore.fold = !layoutSettingStore.fold;
};
</script>

<script lang="ts">
export default {
  name: "Breadcrumb",
};
</script>

<style scoped></style>

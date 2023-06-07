<template>
  <!-- 路由组件出口的位置 -->
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <!-- 渲染layout一级路由的子路由 -->
      <component :is="Component" v-if="flag"></component>
    </transition>
  </router-view>
</template>

<script setup lang="ts">
import { watch, ref, nextTick } from "vue";
import useLayoutSettingStore from "@/store/modules/setting";
let layoutSettingStore = useLayoutSettingStore();
// 控制是否销毁组件
let flag = ref(true);
// 监听判断是否点击刷新
watch(
  () => layoutSettingStore.refresh,
  () => {
    // 点击刷新路由组件销毁
    flag.value = false;
    nextTick(() => {
      flag.value = true;
    });
  }
);
</script>

<script lang="ts">
export default {
  name: "Main",
};
</script>

<style scoped>
.fade-enter-from {
  opacity: 0;
  transform: scale(0);
}
.fade-enter-active {
  transition: all 0.3s;
}
.fade-enter-to {
  opacity: 1;
  transform: scale(1);
}
</style>

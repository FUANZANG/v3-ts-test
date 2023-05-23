<template>
  <div class="login-container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login_form" :model="loginForm">
          <h1>Hello</h1>
          <h2>欢迎</h2>
          <el-form-item>
            <el-input
              :prefix-icon="User"
              v-model="loginForm.username"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              :prefix-icon="Lock"
              type="password"
              v-model="loginForm.password"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              class="login_btn"
              type="primary"
              @click="login"
              :loading="loading"
              >登 录</el-button
            >
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { User, Lock } from "@element-plus/icons-vue";
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { ElNotification } from "element-plus";
import { getTime } from "@/utils/time";
// 引入用户相关的小仓库
import useUserStore from "@/store/modules/user";
let userStore = useUserStore();
// 获取路由
let $router = useRouter();
let loading = ref(false);
let loginForm = reactive({
  username: "admin",
  password: "123456",
});
const login = async () => {
  loading.value = true;
  try {
    // 保证登录成功进行
    await userStore.userLogin(loginForm);
    // 编程式导航跳转到首页
    $router.push("/");
    // 成功提示
    ElNotification({
      type: "success",
      title: `${getTime()}好`,
      message: "欢迎回来",
    });
    loading.value = false;
  } catch (e) {
    loading.value = false;
    ElNotification({
      type: "error",
      message: (e as Error).message || "登录失败",
    });
  }
};
</script>

<style scoped lang="scss">
.login-container {
  width: 100%;
  height: 100vh;
  background: url("@/assets/images/background.jpg") no-repeat;
  background-size: cover;
}
.login_form {
  position: relative;
  width: 80%;
  top: 30vh;
  background: url("@/assets/images/login_form.png") no-repeat;
  background-size: cover;
  padding: 40px;
  h1 {
    color: #fff;
    font-size: 40px;
  }
  h2 {
    color: #fff;
    font-size: 20px;
    margin: 20px 0;
  }
  .login_btn {
    width: 100%;
  }
}
</style>

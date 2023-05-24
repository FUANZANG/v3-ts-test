<template>
  <div class="login-container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form
          class="login_form"
          :model="loginForm"
          :rules="rules"
          ref="loginForms"
        >
          <h1>Hello</h1>
          <h2>欢迎</h2>
          <el-form-item prop="username">
            <el-input
              :prefix-icon="User"
              v-model="loginForm.username"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
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
// 获取el-form组件
let loginForms = ref();
// 自定义校验规则
const validatorUserName = (rule: any, value: any, callback: any) => {
  if (value.length >= 5) {
    callback();
  } else {
    callback(new Error("账号长度不小于5位"));
  }
};
const validatorPassword = (rule: any, value: any, callback: any) => {
  if (value.length >= 5) {
    callback();
  } else {
    callback(new Error("密码长度不小于5位"));
  }
};
// 登录按钮点击事件
const login = async () => {
  await loginForms.value.validate();
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
const rules = {
  username: [
    // {
    //   required: true,
    //   min: 6,
    //   max: 10,
    //   message: "账号长度在6-10位之间",
    //   trigger: "blur",
    // },
    { trigger: ["blur", "change"], validator: validatorUserName },
  ],
  password: [
    // {
    //   required: true,
    //   min: 6,
    //   max: 15,
    //   message: "密码长度在6-15位之间",
    // },
    { trigger: ["blur", "change"], validator: validatorPassword },
  ],
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

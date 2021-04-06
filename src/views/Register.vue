<template>
  <div class="register">
    <!-- 导入头部组件 -->
    <div>
      <topTitle />
    </div>

    <!-- 主体部分 -->
    <div class="main">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm widform"
      >
        <el-form-item prop="userphone">
          <el-input
            v-model="ruleForm.userphone"
            placeholder="请输入手机号"
            prefix-icon="el-icon-user"
          ></el-input>
        </el-form-item>

        <el-form-item prop="pass">
          <el-input
            type="password"
            v-model="ruleForm.pass"
            autocomplete="off"
            placeholder="请输入登录密码"
            prefix-icon="el-icon-goods"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item prop="checkPass">
          <el-input
            type="password"
            v-model="ruleForm.checkPass"
            autocomplete="off"
            placeholder="请确认登录密码"
            prefix-icon="el-icon-goods"
            show-password
          ></el-input>
        </el-form-item>

        <el-form-item prop="验证码" class="code">
          <el-input
            v-model="ruleForm.sendcode"
            placeholder="请输入验证码"
            class="checknum"
          ></el-input>
          <el-button
            type="button"
            @click="sendcode"
            :disabled="disabled"
            v-if="disabled == false"
            >发送验证码
          </el-button>
          <el-button
            type="button"
            @click="sendcode"
            :disabled="disabled"
            v-if="disabled == true"
            >{{ btntxt }}
          </el-button>
        </el-form-item>

        <el-form-item>
          <el-button
            type="primary"
            class="regisbtn"
            @click="submitForm('ruleForm')"
            v-loading="loading"
            >立即注册</el-button
          >
        </el-form-item>
      </el-form>
    </div>
    <!-- 导入底部 -->
    <div>
      <bottomTitle />
    </div>
  </div>
</template>
<script>
import topTitle from "../components/topTitle";
import bottomTitle from "../components/bottomTitle";

export default {
  components: {
    topTitle,
    bottomTitle,
  },

  // 监听
  watch: {
    "ruleForm.userphone": function (curVal, oldVal) {
      if (!curVal) {
        this.ruleForm.userphone = "";
        return false;
      }
      // 实时把非数字的输入过滤掉
      this.ruleForm.userphone = curVal.match(/\d/gi)
        ? curVal.match(/\d/gi).join("")
        : "";
    },
  },
  data() {
    var validatephone = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入手机号"));
      } else {
        if (!/^1[3456789]\d{9}$/.test(value)) {
          callback(new Error("请输入正确的手机号"));
        } else {
          callback();
        }
      }
    };

    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        userphone: "",
        pass: "",
        checkPass: "",
        sendcode: "",
      },
      disabled: false,
      time: 0,
      btntxt: "重新发送",
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        userphone: [{ validator: validatephone, trigger: "blur" }],
      },
      loading: false,
    };
  },

  // 设置全局背景颜色
  mounted() {
    document.body.style.backgroundColor = "#F5F5F5";
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.loading = true;
          this.$http.get("http://localhost:8081/api/login").then((res) => {
            console.log(res.data);
            for (var i = 0; i < res.data.length; i++) {
              if (this.ruleForm.userphone == res.data[i].userid) {
                this.$message("此账号已注册，请输入其他账号");
                return;
              }
            }

            this.$http.post("http://localhost:8081/api/register",this.ruleForm.userphone).then((res) => {
              console.log(res.data);
console.log("123");
              this.$message("注册成功");
            });
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    sendcode() {
      if (this.ruleForm.userphone == "") {
        this.$message({
          message: "手机号不能为空",
          center: true,
        });
        return;
      } else {
        this.$message({
          message: "发送成功",
          type: "success",
          center: true,
        });
        this.time = 60;
        this.disabled = true;
        this.timer();
      }
    },
    timer() {
      if (this.time > 0) {
        this.time--;
        this.btntxt = this.time + "s后重新获取";
        setTimeout(this.timer, 1000);
      } else {
        this.time = 0;
        this.btntxt = "获取验证码";
        this.disabled = false;
      }
    },
  },
};
</script>
<style scoped>
.main {
  width: 700px;
  height: 300px;
  margin: 50px auto;
  padding: 40px 130px 40px 90px;
  background-color: white;
}
.widform {
  width: 90%;
}
.checknum {
  width: 400px;
  margin-right: 70px;
}
.regisbtn {
  width: 100%;
}
</style>

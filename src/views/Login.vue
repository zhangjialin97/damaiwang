<template>
  <div class="login">
    <!-- 导入头部组件 -->
    <div>
      <topTitle title="账户登录" />
    </div>
    <!-- 主体部分 -->
    <div class="main">
      <div class="imgLeft">
        <img src="img/base/loginImg.jpg" alt="" />
      </div>
      <div class="loginRight">
        <el-tabs
          v-model="activeName"
          type="border-card"
          @tab-click="handleClick"
        >
          <el-tab-pane label="账户登录" name="first">
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

              <el-form-item>
                <el-button
                  type="primary"
                  class="regisbtn"
                  @click="submitForm('ruleForm')"
                  v-loading="loading"
                  >登录</el-button
                >
              </el-form-item>
            </el-form>
            <p>
              <input type="checkbox" /> <span>下次自动登录</span>
              <span class="fr"
                >忘记密码?
                <router-link to="/register" style="color: #ff3c1b"
                  >立即注册</router-link
                ></span
              >
            </p>
            <p class="bianju">
              其他登录：<img src="img/base/weixin.png" alt="" class="weixin" />
            </p>
          </el-tab-pane>
          <el-tab-pane label="短信快捷登录" name="second">
            <div>
              <p class="duanxinTitle2">
                验证即登录，未注册将自动创建大麦网账号
              </p>
              <el-form
                :model="ruleForm"
                status-icon
                :rules="rules"
                label-width="100px"
                class="demo-ruleForm widform2"
              >
                <el-form-item prop="userphone">
                  <el-input
                    v-model="ruleForm.userphone"
                    placeholder="请输入手机号"
                    prefix-icon="el-icon-user"
                  ></el-input>
                </el-form-item>
                <el-form-item prop="验证码" class="code">
                  <el-input
                    v-model="ruleForm.sendcode"
                    placeholder="请输入验证码"
                    class="checknum2"
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
                    >登录</el-button
                  >
                </el-form-item>
              </el-form>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
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
  // 设置全局背景颜色
  mounted() {
    document.body.style.backgroundColor = "#F5F5F5";
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
    return {
      activeName: "first",
      ruleForm: {
        userphone: "",
        pass: "",
        sendcode: "",
      },
      disabled: false,
      time: 0,
      btntxt: "重新发送",
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        userphone: [{ validator: validatephone, trigger: "blur" }],
      },
      loading: false,
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.loading = true;
          this.$http.get("http://localhost:8081/api/login").then((res) => {
            console.log(res.data);

            for (var i = 0; i < res.data.length; i++) {
              if (this.ruleForm.userphone == res.data[i].userid) {
                if (this.ruleForm.pass == res.data[i].password) {
                  this.$message("登陆成功");
                  setTimeout(() => {
                    // 加载延迟
                    this.loading = false;

                    // 跳转页面
                    this.$router.push({ path: "/home" });

                    // 向store里传递数据
                    this.$store.state.user = this.ruleForm.userphone;
                    this.$store.state.pass = this.ruleForm.pass;
                    // 页面缓存
                    // sessionStorage.setItem("user", this.numberValidateForm);
                  }, 3000);
                  return;
                } else {
                  this.loading = false;
                  this.$message("密码不正确");
                  return;
                }
              }
            }
            this.$message("此账号未注册，请注册后使用");
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
  width: 1000px;
  height: 500px;
  margin: 50px auto;
}
.imgLeft img {
  width: 440px;
  margin-top: 30px;
  float: left;
}
.loginRight {
  width: 440px;
  height: 332px;
  float: right;
  margin: 30px 60px 0 50px;
}
.regisbtn {
  width: 100%;
  background-color: #ff3c1b;
}
.weixin {
  vertical-align: middle;
}
.bianju {
  margin-top: 10px;
}
.duanxinTitle2 {
  margin-top: 20px;
  margin-left: 20px;
}
.widform2 {
  width: 380px;
  margin-top: 20px;
  margin-left: 20px;
}
.checknum2 {
  width: 180px;
  margin-right: 50px;
}
</style>
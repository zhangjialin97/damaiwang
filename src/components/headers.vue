<template>
  <div class="header">
    <ul class="head_left fl">
      <li>Hi 欢迎来到大麦网</li>
      <li>
        [
        <span class="login"
          ><router-link to="/Login">登录&nbsp;</router-link></span
        >
        <span><router-link to="/Register">&nbsp;注册</router-link></span> ]
      </li>
      <li>
        <!-- //show-timeout=number  number下拉菜单的显示时间 -->
        <el-dropdown :show-timeout="num">
          <span
            class="el-dropdown-link"
            @mousemove="fn('damai')"
            @mouseout="fn2('damai')"
            >我的大麦<i
              :class="{
                'el-icon-arrow-down': bb,
                'el-icon-arrow-up': !bb,
                'el-icon--right': true,
              }"
            ></i
          ></span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item disabled>双皮奶</el-dropdown-item>
            <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </li>
    </ul>
    <ul class="head_right fr">
      <li>大麦网微信</li>
      <li>手机版</li>
      <li>
        <el-dropdown :show-timeout="num">
          <span
            class="el-dropdown-link"
            @mousemove="fn('kefu')"
            @mouseout="fn2('kefu')"
            >客户服务<i
              :class="{
                'el-icon-arrow-down': cc,
                'el-icon-arrow-up': !cc,
                'el-icon--right': true,
              }"
            ></i
          ></span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item disabled>双皮奶</el-dropdown-item>
            <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </li>
      <li>
        <el-dropdown :show-timeout="num">
          <span
            class="el-dropdown-link"
            @mousemove="fn('nav')"
            @mouseout="fn2('nav')"
            >网站导航
            <i
              :class="{
                'el-icon-arrow-down': dd,
                'el-icon-arrow-up': !dd,
                'el-icon--right': true,
              }"
            ></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item disabled>双皮奶</el-dropdown-item>
            <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </li>
      <li>EngLish</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bb: true,
      cc: true,
      dd: true,
      num: 10,
    };
  },
  methods: {
    fn(i) {
      if (i == "damai") {
        this.bb = false;
      }
      if (i == "kefu") {
        this.cc = false;
      }
      if (i == "nav") {
        this.dd = false;
      }
    },
    fn2(i) {
      if (i == "damai") {
        this.bb = true;
      }
      if (i == "kefu") {
        this.cc = true;
      }
      if (i == "nav") {
        this.dd = true;
      }
    },
  },
};
</script>
<style scoped>
.header:after {
  content: "";
  display: block;
  clear: both;
}
.header {
  width: 100%;
  height: 30px;
  margin: 0 auto;
}
.head_left > li span,
a {
  font-size: 12px;
}
.head_left > li {
  float: left;
  font-size: 12px;
  line-height: 36px;
}
.head_left > li .login > a {
  color: rgb(254, 127, 127);
}
.el-dropdown-link {
  padding-left: 3px;
}
.head_right > li {
  float: left;
  font-size: 12px;
  line-height: 36px;
  padding: 0 8px;
}
.head_right > li span,
a {
  font-size: 12px;
}
</style>
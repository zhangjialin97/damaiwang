<template>
  <div class="manage">
    <!-- 引入头部 -->
    <div class="top">
      <headerNav></headerNav>
    </div>
    <!-- 引入导航 -->
    <div class="navmenu">
      <navmenu></navmenu>
    </div>
    <!-- 显示路由 -->
    <div class="main">
      <router-view />
    </div>
  </div>
</template>
<script>
import navmenu from "../components/navmenu";
import banner from "../components/banner";
import headerNav from "../components/header_nav";

export default {
  components: {
    headerNav,
    navmenu,
    banner,
  },

  // 设置全局背景颜色
  mounted() {
    document.body.style.backgroundColor = "#F5F5F5";
  },
};
</script>
<style scoped>
</style>

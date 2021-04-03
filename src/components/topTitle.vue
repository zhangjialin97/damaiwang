<template>
  <!-- 注册页顶部导航 -->
  <div class="topTitle">
    <img src="img/logo.png" alt="" />
    <span class="txt">{{ txt }}账户注册</span>
  </div>
</template>
<script>
export default {
  props: ["txt"],
};
</script>
<style scoped>
.topTitle {
  height: 70px;
  padding: 20px;
  position: relative;
  background-color: #ffffff;
}

.topTitle img {
  border-right: 2px gray solid;
  margin-left: 400px;
  vertical-align: middle;
  width: 210px;
  height: 70px;
  float: left;
}
.txt {
  float: left;
  font-size: 24px;
  margin: 25px;
}
</style>
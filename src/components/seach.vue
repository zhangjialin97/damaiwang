<template>
  <div class="seach">
    <ul class="drop">
      <li>
        <img src="/img/logo.png" alt="" />
      </li>
      <li class="address">
        <el-dropdown :hide-on-click="false">
          <span class="el-dropdown-link">
            北京<i class="el-icon-arrow-down el-icon--right"></i>
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
      <li class="search">
          <div>
              <input type="text" placeholder="请输入演出、艺人、场馆名称..." class="fl">
              <button class="fl">搜索</button>
          </div>
      </li>
    </ul>
  </div>
</template>
<script>

export default {};
</script>
<style scoped>
.drop {
    width: 100%;
}
.drop>li {
    float: left;
}
.drop .search {
    width: 80%;
    position: relative;
}
.drop .search>div {
    position: absolute;
    left: 100px;
    top: 5px;
}
.drop .search>div input {
    width: 700px;
    height: 40px;
    border: 2px solid rgb(255,60,27);
    text-indent: 2em;
}
.drop .search>div button {
  width: 100px;
  height: 44px;
  color: #fff;
  font-size: 16px;
  background: rgb(255,60,27);
}
.address {
  margin-left: 30px;
}
</style>
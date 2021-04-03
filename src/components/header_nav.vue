<template>
  <div>
    <div class=" top">
      <el-row :gutter="20">
        <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="18">
          <div class="grid-content bg-purple layoutWidth">
            <!-- 顶部导航 -->
            <headersVue />
          </div>
        </el-col>
        <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
    </div>
    <el-row :gutter="20">
      <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="18">
        <div class="grid-content bg-purple layoutWidth">
          <div class="seach">
              <!-- 搜索+logo -->
            <seachVue />
          </div>
        </div>
      </el-col>
      <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
  </div>
</template>
<script>
import headersVue from "../components/headers";
import seachVue from "../components/seach.vue";
export default {
  components: {
    headersVue,
    seachVue,
  },
};
</script>
<style scoped>
.grid-content {
  min-height: 36px;
}
.top {
  border-bottom: 1px rgb(231, 231, 231) solid;
}
.seach {
    margin-top: 20px;
}
</style>
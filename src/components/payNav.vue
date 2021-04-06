<template>
  <div>
    <div class="top">
      <el-row :gutter="20">
        <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="18">
          <div class="grid-content bg-purple layoutwidth">
            <!-- 顶部导航 -->
            <orderNavheader />
          </div>
        </el-col>
        <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import orderNavheader from './orderNavheader'

export default {
  components:{
    orderNavheader
  }
}
</script>
<style scoped>
.grid-content {
  min-height: 36px;
}
.top {
  border-bottom: 1px rgb(231, 231, 231) solid;
}
</style>
<template>
  <div class="2">
    <el-row :gutter="20">
      <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="18"
        ><div class="grid-content bg-purple layoutWidth">
          <Seatend></Seatend></div
      ></el-col>
      <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
  </div>
</template>
<script>
import Seatend from "../components/seat/Seatend";
export default {
  components: {
    Seatend,
  },
};
</script>
<style scoped>
.grid-content {
  min-height: 36px;
}
</style>
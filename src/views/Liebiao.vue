<template>
  <div id="tebtop">
    <header_navVue></header_navVue>
    <el-row :gutter="20">
      <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="18">
        <liebiaozxc-vue></liebiaozxc-vue>
        <liebiaozhong></liebiaozhong>
      </el-col>
      <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
    <div class='button'>
       <setBottomVue></setBottomVue>
    </div>
  </div>
</template>

<script>
import liebiaozxcVue from '../components/liebiaozxc.vue'
import liebiaozhong from '../components/liebiaozhong.vue'
import header_navVue from '../components/header_nav.vue'
import setBottomVue from '../components/setBottom.vue'

export default {
    components:{
      setBottomVue,
      liebiaozxcVue,
      liebiaozhong,
      header_navVue
    }
}
</script>

<style scoped>
  .el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    /* background: #d3dce6; */
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .button{
    margin-top:750px;
  }
</style>
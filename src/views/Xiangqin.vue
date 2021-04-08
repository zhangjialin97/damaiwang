<template>
    <div id="xqin">
      <div>
      <header_navVue></header_navVue>
    </div>
    <el-row :gutter="20">
      <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="18">
        <div class="grid-content bg-purple">
          <xiangqinVue></xiangqinVue>
          <xiangqinjianVue></xiangqinjianVue>
          <xiangqindibuVue></xiangqindibuVue>
          <xiangqinjieshaoVue></xiangqinjieshaoVue>
        </div>
      </el-col>
      <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
    </el-row>

    <div>
      <setBottomVue></setBottomVue>
    </div>

  </div>
</template>

<script>
import header_navVue from '../components/header_nav.vue'
import setBottomVue from '../components/setBottom.vue'
import xiangqinVue from '../components/xiangqin.vue'
import xiangqindibuVue from '../components/xiangqindibu.vue'
import xiangqinjianVue from '../components/xiangqinjian.vue'
import xiangqinjieshaoVue from '../components/xiangqinjieshao.vue'

export default {
    components:{
        xiangqinVue,
        xiangqinjianVue,
        xiangqindibuVue,
        xiangqinjieshaoVue,
        header_navVue,
        setBottomVue
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
</style>
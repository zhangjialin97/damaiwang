<template>
  <div class="home">
    <el-row :gutter="20">
      <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="18">
        <div class="grid-content bg-purple layoutwidth">
            <!-- 选座信息提示 -->
            <div class="checkhint">
              <!-- 选座开始 -->
              <div class="checkinfo">
                  <checkDatainfoVue />
              </div>
            </div>
            
        </div>
      </el-col>
      <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
  </div>
</template>
<script>
import checkDatainfoVue from './checkDatainfo.vue'

export default {
    components:{
        checkDatainfoVue
    }
}
</script>
<style scoped>
.grid-content {
  min-height: 36px;
}
</style>
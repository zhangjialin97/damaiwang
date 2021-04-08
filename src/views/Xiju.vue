<template>
  <div id="box">
    <el-row :gutter="20">
      <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="18">
        <div>
          <bannerVue></bannerVue>
        </div>
        <listVue></listVue>
        <zhongjianVue></zhongjianVue>
        <yingVue></yingVue>
        <rmenVue></rmenVue>
        <cale></cale>
        <bottomVue></bottomVue>
      </el-col>
      <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
    <div>
              <set></set>
    </div>
  </div>
</template>

<script>
import listVue from '../components/list.vue';
import rmenVue from '../components/rmen.vue';
import yingVue from '../components/ying.vue';
import zhongjianVue from '../components/zhongjian.vue';
import cale from '../components/Calendar/CalendarSwitch.vue'
import bottomVue from '../components/bottom.vue';
import set from '../components/setBottom.vue'
import bannerVue from '../components/banner.vue';
export default {
  components:{
    listVue,
    zhongjianVue,
    yingVue,
    rmenVue,
    cale,
    bottomVue,
    set,
    bannerVue
  },
};
</script>


<style scoped>
.bg-purple {
  /* background: darkcyan; */
  /* border: 1px solid red; */
  
}
</style>    
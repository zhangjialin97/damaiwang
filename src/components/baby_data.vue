<template>
  <div class="home">
    <el-row :gutter="20">
      <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="18">
        <div class="grid-content bg-purple layoutWidth">
          <!-- 轮播组件 -->
          <div class="layoutWidth">
            <banner :banners="imgarr"></banner>
          </div>

          <!-- <slot name="banner"></slot> -->
          <!-- 中心内容 -->
          <div class="gurss">
            <babyGguessVue />
          </div>
          <!-- 底部内容 -->
          <div class="footerTOP">
            <bottomVue/>
          </div>
        </div>
      </el-col>
      <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
    <div class="footer">
        <setBottomVue/>
    </div>
  </div>
</template>
<script>
import banner from "./banner.vue";
import babyGguessVue from "./baby_guess.vue";
import bottomVue from './bottom.vue';
import setBottomVue from './setBottom.vue';

export default {
  components: {
    banner,
    babyGguessVue,
    bottomVue,
    setBottomVue
  },
  data() {
    return {
      imgarr: [
        "/img/qinzi/img_03.png",
        "/img/base/pic1.jpg",
        "/img/base/pic2.jpg",
        "/img/base/pic3.jpg",
      ],
    };
  },
};
</script>
<style scoped>
.grid-content {
  min-height: 36px;
}
.bg {
  background: #fff;
}
</style>
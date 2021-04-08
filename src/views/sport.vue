<template>
  <div>
    <div v-title data-title="大麦网-体育">
      <el-row :gutter="20">
        <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="18">
          <div class="grid-content bg-purple layoutWidth">
            <div>
              <bannerVue></bannerVue>
            </div>
            <!-- 引入猜你喜欢子组件 -->
            <div>
            <likeVue>
              <div slot="like-img">
              <img class="like-img" v-for="index in imgSrc " :key="index.imgSrc" :src="index.imgSrc" slot="like-img"  alt="">
              </div>
            </likeVue>
              </div>
            <!-- 子组件精彩聚集 -->
            <WonderfulVue>
              <!--左侧-->
                <div slot="wd">
                <img   class="wd-img1" src="../../public/img/base/cardimg3.jpg" alt="">
              </div>
              <!--中间-->
              <div slot="wd" class="Wonder-li">
                  <ul>
                    <li><img class="like-img" v-for="index in imgSrc " :key="index.imgSrc" :src="index.imgSrc" slot="like-img"  alt=""></li>
                  </ul>
              </div>
              <!--右侧-->
               <div slot="wd">
                <img   class="wd-img1" src="../../public/img/base/cardimg3.jpg" alt="">
              </div>
            </WonderfulVue>  
            <!--海底-->
            <div >
              <span class="idex">
                <img src="../../public/img/qinzi/img_16.png" alt="">
              </span>
              <span class="idex">
                 <img src="../../public/img/qinzi/img_17.png" alt="">
              </span>
               <span class="idex">
                 <img src="../../public/img/qinzi/img_18.png" alt="">
              </span>
            </div>
            <!--引入Tabs-->
            <div>
            <TabsVue></TabsVue>
            </div>
            <!-- 引入Hot-->
            <div>
            <HotVue></HotVue>
            </div>
            <div>
            <CalendarSwitchVue></CalendarSwitchVue>
            </div>
            <div class="dibu">
              <bottom></bottom>
            </div>
          </div>
        </el-col>
        <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
       <setBottomVue></setBottomVue>
    </div>
  </div>
</template>
<script>
//引入轮播图
import bannerVue from '../components/banner.vue'
//引入子组件Wonderful.vue
//引入猜你喜欢css样式
import'../../src/assets/css/Like.css'
//引入精彩聚集css样式
import'../../src/assets/css/Wonderful.css'
// 猜你喜欢
import likeVue from '../../src/components/sportcomponents/like.vue'
// 
import WonderfulVue from '../../src/components/sportcomponents/Wonderful.vue'
// 引入热点聚集组件
import HotVue from '../components/sportcomponents/Hot.vue'
// 引入tab切换
import TabsVue from'../components/sportcomponents/Tabs.vue'
//引入日历组件
import CalendarSwitchVue from '../components/Calendar/CalendarSwitch.vue'
// 引入底部组件
import bottom from '../components/bottom.vue'
// 引入底部
import setBottomVue from '../components/setBottom.vue'
setBottomVue
//导入图片
export default {
  // 注册
  data(){
     return{
        imgSrc:[]
     }
  },
  //图片 Mock 数据
    mounted() {
    this.$http.get("/api/sport/getDaet").then((res) => {
      // console.log(res.data);
      var datas = res.data;
      this.imgSrc = datas;
    });
  },
  components: {
    bottom,
    setBottomVue,
    CalendarSwitchVue,
    TabsVue,
    HotVue,
    bannerVue,
    likeVue,
    WonderfulVue
  },
};
</script>
<style scoped>
.idex{
  margin-left:60px;
}
/* 公共样式 */
.el-row {
  margin: 0px !important;
  margin-bottom: 20px;
}
.bg-purple {
  background: white;
}
.grid-content {
  height:2000px;
  background:#f5f5f5;
  border-radius: 4px;
  min-height: 36px;
}
</style>
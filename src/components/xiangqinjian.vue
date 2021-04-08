<template>
  <div id="zhongjian">
       <xiangqinyouVue></xiangqinyouVue>
    <div class="accc">
      <img src="../../public/img/base/img_01.png" class="ailishi" />
      <span class="djia">大型多媒体励志互动儿童剧 《奇门遁甲》 《11月》</span>
      <span class="yue">"奇门遁甲"</span>
      <div class="wancheng">
        <el-steps :space="200" :active="1" finish-status="success">
          <el-step title="项目待定"></el-step>
          <el-step title="预售/预定"></el-step>
          <el-step title="售票中"></el-step>
          <el-step title="演出开始"></el-step>
        </el-steps>
        <div class="yuanchu">
          <span>演出时间:</span>
          <div class="anniu">
            <el-row>
              <el-button type="primary" plain>1999-11-09 09:44:55</el-button>
              <el-button type="success" plain>2000-06-22 06:46:36</el-button>
              <el-button type="info" plain>2000-07-16 07:19:01</el-button>
              <el-button class="annnnn" type="warning" plain
                >2002-09-22 04:43:40</el-button
              >
            </el-row>
          </div>
          <div class="piao">
            <span>选择票价:</span>
            <div class="yuan">
              <el-row>
                <el-button plain disabled>80元</el-button>
                <el-button type="success" plain>90元</el-button>
                <el-button type="info" plain>100元</el-button>
              </el-row>
              <div class="zuowen">
                <el-button type="info" plain><router-link to="/check">选座购买</router-link></el-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import xiangqinyouVue from './xiangqinyou.vue';

export default {
  components:{
    xiangqinyouVue,
  }
};
</script>

<style scoped>
#zhongjian {
  width: 100%;
  height: 400px;
  /* border: 1px solid blue; */
  position: relative;
  margin-top: 10px;
}
.ailishi {
  width: 280px;
  height: 380px;
  margin-top: 10px;
}
.djia {
  margin-left: 10px;
  font-size: 16px;
  position: absolute;
  top: 5px;
}
.yue {
  font-size: 10px;
  margin-left: 5px;
  position: absolute;
  top: 60px;
}
.accc {
  height: 400px;
  width: 70%;
  /* border: 1px solid red; */
}
.wancheng {
  width: 70%;
  height: 55px;
  float: right;
  margin-top: 100px;
  /* background-color: #f7f7f7; */
  /* border: 1px solid fuchsia; */
}
.yuanchu {
  margin-top: 50px;
  font-size: 15px;
}
.anniu {
  margin-left: 80px;
  margin-top: -30px;
}
.annnnn {
  margin-top: 10px;
  margin-left: 1px;
}
.piao {
  margin-top: 35px;
}
.yuan{
    margin-top: -30px;
    margin-left: 80px;
}
.zuowen{
  margin-top: 5px;
  margin-left: 50px;
}
</style>
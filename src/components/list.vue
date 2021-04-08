<template>
  <div class="grid-content bg-purple">
    <h1 class="top">猜你喜欢</h1>
    <img src="../../public/img/base/ribbon-totem.png" class="img1" />
    <router-link to="/xiangqin"><img src="../../public/img/base/cardimg2.jpg" class="img2" /></router-link>
    <img src="../../public/img/base/cardimg2.jpg" class="img3" />
    <img src="../../public/img/base/cardimg3.jpg" class="img4" />
    <img src="../../public/img/base/cardimg2.jpg" class="img5" />
    <img src="../../public/img/base/cardimg2.jpg" class="img6" />
    <img src="../../public/img/base/cardimg4.jpg" class="img7" />
    <div class="mock">
      <p class="xijudewde" v-for="(item, index) in tableData" :key="index">
        <span class="RMD">
          <p>{{ item.name }}</p>
          <span class="shou">售价</span>
        </span>
        {{ item.RMB | addPriceIcon }}
        <span class="RMB">起</span>
      </p>
    </div>
    <!-- 中间部分 -->
    <div class="zhongjian">
      <h1 class="jicai">精彩聚集</h1>
      <img src="../../public/img/base/ribbon-totem.png" class="bufeng" />
      <img src="../../public/img/base/big5.jpg" class="zhong1" />
      <img src="../../public/img/base/cardimg1.jpg" class="zhong2" />
      <img src="../../public/img/base/cardimg6.jpg" class="zhong3" />
      <img src="../../public/img/base/cardimg1.jpg" class="zhong4" />
      <img src="../../public/img/base/cardimg6.jpg" class="zhong5" />
      <img src="../../public/img/base/cardimg5.jpg" class="zhong6" />
      <img src="../../public/img/base/cardimg4.jpg" class="zhong7" />
      <img src="../../public/img/base/calendar08.png" class="zhong8" />
      <img src="../../public/img/base/big5.jpg" class="zhong9" />
      <img src="../../public/img/base/calendar07.png" class="zhong10" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
    };
  },
  mounted() {
    this.$http.get("/api/getData").then((res) => {
      // console.log(res.data);
      var datas = res.data;
      this.tableData = datas;
    });
  },
  filters: {
    //处理函数
    addPriceIcon(value) {
      return "￥" + value;
    },
  },
};
</script>

<style>
.grid-content {
  /* height: 1250px; */
  border-radius: 4px;
  min-height: 36px;
  /* border: 1px solid red; */
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
  margin: 0 auto;
}
#box {
  /* width: 100%; */
  /* height: 450px; */
  /* margin: 0 auto; */
  /* border: 1px solid red; */
}
.top {
  text-align: center;
}
.img1 {
  position: absolute;
  left: 640px;
  top: 470px;
}
.img2 {
  width: 10%;
  position: absolute;
  left: 280px;
  top: 550px;
}
.img3 {
  width: 10%;
  position: absolute;
  left: 500px;
  top: 550px;
}
.img4 {
  width: 10%;
  position: absolute;
  left: 730px;
  top: 550px;
}
.img5 {
  width: 10%;
  position: absolute;
  left: 965px;
  top: 550px;
}
.img6 {
  width: 10%;
  position: absolute;
  left: 1200px;
  top: 550px;
}
.img7 {
  width: 10%;
  height: 257px;
  position: absolute;
  left: 1435px;
  top: 550px;
}
.mock {
  height: 450px;
  /* border: 1px solid red; */
  margin-top: 100px;
}
.xijudewde {
  padding: 20px;
  margin-left: 1px;
  float: left;
  margin-top: 251px;
  font-size: 10px;
}
.mock-title {
  font-size: 10px;
  float: left;
}
.RMB {
  font-size: 10px;
  color: #999;
}
.shou {
  color: #999;
}
.bufeng {
  position: absolute;
  left: 640px;
  top: 1050px;
}
.jicai {
  text-align: center;
}
.zhongjian {
  /* border: 1px red solid; */
  height: 597px;
  width: 100%;
}
.zhong1 {
  width: 220px;
  height: 500px;
  margin-top: 55px;
}
.zhong2 {
  height: 40%;
  margin-left: 32px;
  margin-bottom: 10px;
}
.zhong3 {
  height: 40%;
  margin-left: 32px;
  margin-bottom: 10px;
}
.zhong4 {
  height: 40%;
  margin-left: 32px;
  margin-bottom: 10px;
}
.zhong5 {
  height: 40%;
  margin-left: 38px;
  margin-bottom: 10px;
}
.zhong6 {
  width: 220px;
  height: 500px;
  margin-left: 121px;
}
.zhong7 {
  position: absolute;
  top: 1125px;
  left: 500px;
  height: 220px;
}
.zhong8 {
  position: absolute;
  top: 1125px;
  left: 709px;
  width: 180px;
  height: 220px;
}
.zhong9 {
  width: 180px;
  position: absolute;
  top: 1125px;
  left: 920px;
  height: 220px;
}
.zhong10 {
  width: 180px;
  position: absolute;
  top: 1125px;
  left: 1133px;
  height: 220px;
}
</style>
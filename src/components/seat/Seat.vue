<template>
  <div class="choose-seat-container">
    <!-- 头部 -->
    <div class="choose-seat-head">
      <div class="head-first">1 选择区域</div>
      <div class="head-second">2 选择座位</div>
      <div class="head-third">3 结账付钱</div>
    </div>
    <!-- 中间选座区域 -->
    <div
      id="seatMap"
      class="'choose-seat-body"
    >

    </div>
    <!-- 右侧结算区域 -->
    <div class="choose-seat-right">

    </div>
    <!-- 左下角图例部分 -->
    <div class="choose-seat-bottom">

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@top: 50px;
@red: #d8000b;

.choose-seat-container {
  height: 50px;
  position: relative;
  .choose-seat-head {
    height: 50px;
    width: 100%;
    position: absolute;
    border: 1px solid #eeeeee;
    top: 0;
    z-index: 1;
    div {
      float: left;
      width: 33.333%;
      height: 50px;
      color: #fff;
      text-align: center;
      line-height: 50px;
      font-size: 18px;
      background: linear-gradient(#565656, #484848, #3e3e3e, #484848, #565656);
    }

    .head-second {
      background: @red;
      position: relative;
      height: 52px;
      top: -1px;
    }
    .head-second:before {
      content: "";
      position: absolute;
      display: block;
      top: -1px;
      width: 60px;
      border: 25px solid @red;
      border-bottom: 27px solid @red;
      border-top: 26px solid @red;
      // height: 50px;
      z-index: 1;
    }
    .head-second:after {
      content: "";
      position: absolute;
      display: block;
      top: -1px;
      width: 60px;
      border: 27px solid @red;
      border-left: 30px solid @red;
      z-index: 1;
    }
    .head-second:before {
      left: -26px;
      border-left-color: transparent;
    }
    .head-second:after {
      right: -117px;
      border-top-color: transparent;
      border-bottom-color: transparent;
      border-right-color: transparent;
    }
  }

  /* 右侧结算 */
  .choose-seat-right {
    width: 200px;
    position: absolute;
    background-color: #efefef;
    overflow: auto;
    text-align: center;
    right: 0;
    top: @top;
  }
  /* 左下角图例 */
  .choose-seat-bottom {
    width: 180px;
    height: 160px;
    position: absolute;
    background-color: #ffffff;
    border-radius: 5px;
    border: 2px solid #ccc;
    bottom: 5px;
    left: 5px;
    padding-top: 5px;
  }
  /* 中间选座区域 */
  .choose-seat-body {
    top: @top;
    padding-top: 130px;
    width: 1000px;
    position: absolute;
    overflow: hidden;
  }
}
</style>

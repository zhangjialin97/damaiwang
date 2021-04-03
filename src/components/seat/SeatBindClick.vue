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
      :class="'choose-seat-body'+chartsSeatArea.join(' ')"
    >
      <div
        class="seat-charts-row"
        v-for="(item,x) in seatOrder"
      >
        <div
          class=""
          v-for="(subItem,y) in getItems(item)"
        >
          <div
            v-if="subItem != '_'"
            :class="'seat-charts-cell seat-charts-seat '+ icons[subItem]"
            :ref="(x+1)+'_'+(y+1)"
            @click="clickCell"
          >
          </div>
          <div
            v-if="subItem == '_'"
            :class="'seat-charts-cell ' + 'seat-charts-'+icons[subItem]"
          >
          </div>
        </div>

      </div>

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
      icons: {
        a: "seat-charts-a ",
        b: "seat-charts-b ",
        c: "seat-charts-c",
        _: "space"
      },
      chartsSeatArea: [],
      seatOrder: [
        "_____aaaaa_____aaaa_____aaaa____",
        "___ccccccc____cccccc____ccccc___",
        "__aaaaaaaa___aaaaaaaa___aaaaaa__",
        "__cccccccc__bbbbbbbbbb__ccccccc_",
        "_aaccccccc_bbbbbbbbbbbb_ccccccca",
        "_aaccccccc_bbbbbbbbbbbb_ccccccca",
        "________________________________",
        "_aaaaaaaaa__cccccccccc__aaaaaaaa",
        "_aaaaaaaaa__cccccccccc__aaaaaaaa",
        "__aaaaaaaa___aaaaaaaa___aaaaaaa_",
        "__aaaaaaaa___aaaaaaaa___aaaaaaa_"
      ],
      size: 0,
      price: 0
    };
  },
  methods: {
    //   对字符串拆分返回数组对象
    getItems(item) {
      return item.match(/[a-z_]{1}(\[[0-9a-z_]{0,}(,[0-9a-z_ ]+)?\])?/gi);
    },
    bindScroll() {
      //  添加鼠标点下和移动事件，通过这两个事件进行监听，通过修改position的top和left值进行界面的移动。
      var oImg = document.getElementById("seatMap");
      oImg.onmousedown = function(ev) {
        var ev = ev || event;
        var disX = ev.clientX - oImg.offsetLeft;
        var disY = ev.clientY - oImg.offsetTop;
        if (oImg.setCapture) {
          oImg.setCapture();
        }
        document.onmousemove = function(ev) {
          var ev = ev || event;
          oImg.style.left = ev.clientX - disX + "px";
          oImg.style.top = ev.clientY - disY + "px";
        };
        document.onmouseup = function() {
          document.onmousemove = document.onmouseup = null;
          //释放全局捕获 releaseCapture();
          if (oImg.releaseCapture) {
            oImg.releaseCapture();
          }
        };
        return false;
      };
      // 监听滚轮滚动事件，并使用scale 对页面进行操作，实现界面的放大和缩小。
      oImg.onmousewheel = fn;
      if (oImg.addEventListener) {
        oImg.addEventListener("DOMMouseScroll", fn, false);
      }
      //   缩放值为1 也就是不缩放
      var scaleSize = 1;

      function fn(ev) {
        var ev = ev || event;
        var b = true;
        if (ev.wheelDelta) {
          b = ev.wheelDelta > 0 ? true : false;
        } else {
          b = ev.detail < 0 ? true : false;
        }
        // b代表放大还是缩小中间区域
        if (b) {
          scaleSize += 0.03;
          scaleSize = scaleSize > 2 ? 2 : scaleSize;
        } else {
          scaleSize -= 0.03;
          scaleSize = scaleSize < 0.5 ? 0.5 : scaleSize;
        }
        // 设置缩放
        this.style.transform = "scale(" + scaleSize + ")";

        if (ev.preventDefault) {
          ev.preventDefault();
        }
        return false;
      }
    },
    // 判断是否含有类名
    hasClass(el, className) {
      let classList = el.classList;
      let flag = false;
      for (let i = 0; i < classList.length; i++) {
        if (className == classList[i]) {
          flag = true;
        }
      }
      return flag;
    },
    // 添加类名
    addClass(el, className) {
      el.classList.add(className);
    },
    // 移除类
    removeClass(el, className) {
      el.classList.remove(className);
    },
    // 切换类
    toogleClass(el, className) {
      let classList = el.classList;
      let flag = this.hasClass(el, className);
      if (flag) {
        /* 
        调用删除操作 需要添加数组样式删除代码，如果调用报错，放开下列代码
        删除数组中的数据信息，仅限字符串 String 类型的数组 
        Array.prototype.indexOf = function(val) { for (var i = 0; i < 

this.length; i++) { if (this[i] == val) return i; } return -1; };
        Array.prototype.remove = function(val) { var index = 

this.indexOf(val); if (index > -1) { this.splice(index, 1); } };
         */
        classList.remove(className);
      } else {
        /* 调用添加操作 */
        classList.add(className);
      }
    },
    // 添加座位点击事件
    clickCell(el){
        this.toogleClass(el.currentTarget, "available")
    }
  },
  mounted() {
    //   console.log(this.getItems("_____aaaaa_____aaaa_____aaaa____"));
    this.bindScroll();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@top: 50px;
@red: #d8000b;

.available {
    // 点击之后的样式信息
    background-image: url("img/sofa-selected.png") !important;
}
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

    // 座位渲染
    .seat-charts-row {
      margin: auto;
      height: 50px;
      .seat-charts-cell {
        height: 16px;
        width: 19px;
        margin: 1px 0.5px 0.5px 1px;
        float: left;
        text-align: center;
        outline: none;
        font-size: 13px;
        line-height: 16px;
        color: blue;
        position: relative;
      }
      .seat-charts-cells,
      .seat-charts-spaces {
        display: inline-block;
        margin: 2px;
      }
      .seat-charts-seat {
        background-image: url("img/sofa-gray.png");
        background-size: 100%;
      }
      .seat-area-a {
        .seat-charts-seat {
          background-image: url("img/sofa-red.png");
        }
      }
      .seat-area-b {
        .seat-charts-seat {
          background-image: url("img/sofa-pink.png");
        }
      }
      .seat-area-c {
        .seat-charts-seat {
          background-image: url("img/sofa-blue.png");
        }
      }
    }
    .seatCharts-row:after {
      clear: both;
    }
  }
}
</style>

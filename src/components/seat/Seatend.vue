<template>
  <div class="choose-seat-container">
    <!-- 头部 -->
    <div class="choose-seat-head">
      <div class="head-first">1 选择区域</div>
      <div class="head-second">2 选择座位</div>
      <div class="head-third">3 结账付钱</div>
    </div>
    <!-- 中间选座区域 -->
    <div id="seatMap" :class="'choose-seat-body' + chartsSeatArea.join(' ')">
      <div
        class="seat-charts-row"
        v-for="(item, x) in seatOrder"
        :key="x"
        :style="'width:' + getItems(item).length * 25 + 'px;'"
      >
        <div
          v-for="(subItem, y) in getItems(item)"
          :key="y"
          :class="
            subItem != '_' && seatData[x + 1 + '_' + (y + 1)]
              ? 'seat-charts-cells seat-area-' + subItem
              : subItem != '_'
              ? 'seat-charts-spaces seat-gray-' + subItem
              : 'seat-charts-spaces'
          "
        >
          <div
            v-if="subItem != '_' && seatData[x + 1 + '_' + (y + 1)]"
            :id="x + 1 + '_' + (y + 1)"
            :ref="x + 1 + '_' + (y + 1)"
            @click="clickCell"
            :class="'seat-charts-cell seat-charts-seat ' + icons[subItem]"
          >
            <Tooltip placement="top">
              &nbsp; &nbsp;
              <div slot="content" style="z-index: 10000">
                <p>座位：{{ x + 1 }}排{{ y + 1 }}号</p>
                <p>楼层：剧场</p>
                <!-- <p>看台：{{adress}}</p> -->
                <p style="text-transform: uppercase">
                  等级：{{ seatLevelPrice[subItem.toLocaleUpperCase()] }}
                  {{ subItem }}区
                </p>
                <p>
                  票价：{{ seatLevelPrice[subItem.toLocaleUpperCase()] }} 元
                </p>
                <p>
                  状态：{{
                    seatData[x + 1 + "_" + (y + 1)].status == 1
                      ? "可售"
                      : "不可售"
                  }}
                </p>
              </div>
            </Tooltip>
          </div>

          <div
            v-if="subItem != '_' && !seatData[x + 1 + '_' + (y + 1)]"
            :id="x + '_' + y"
            :ref="x + '_' + y"
            class="seat-charts-cell seat-charts-seat"
          ></div>

          <div
            v-if="subItem == '_'"
            :class="'seat-charts-cell ' + 'seat-charts-' + icons[subItem]"
          ></div>
        </div>
      </div>
    </div>

    <!-- 右侧结算区域 -->
    <div class="choose-seat-right">
      <div class="selected-seat-count">
        已选座位[
        <span>{{ size }}</span
        >]
      </div>
      <div
        class="selected-seat-desc"
        v-for="(item, i) in this.selectedMap.toJSON()"
        :key="i"
      >
        <div class="select-seatDesc-left">
          <i class="sofa-blue"></i>
          票价: {{ item[1]["price"] }}
        </div>
        <div class="selected-seatDesc-right">
          <p>座位：{{ item[1].x }}排{{ item[1].y }}号</p>
          <p>楼层：剧场</p>
        </div>
      </div>
      <Button type="primary" style="margin-top: 10px"
        >结账：{{ price }}元
      </Button>
    </div>
    <!-- 左下角图例部分 -->
    <div class="choose-seat-bottom">
      <div class="seat-area-legend">
                <CheckboxGroup v-model="chartsSeatArea">
                    
          <div
            class="seat-area-row"
            v-for="(item, ind) in seatPriceList"
            :key="ind"
          >
                        
            <h2 :class="'cell-' + item.areaLevelName">￥{{ item.price }}</h2>
                        <strong>{{ item.areaLevelName }} 级</strong>
                        <Checkbox
              style="float: right"
              data-
              id="item.areaLevelName"
              :label="'chartsSeat-area-' + item.areaLevelName"
              >&nbsp;</Checkbox
            >
                      
          </div>
                  </CheckboxGroup
        >
                
        <div class="sofa-legend">
                    
          <div>            <i class="sofa-locked"></i> 选           </div>
                    
          <div>            <i class="sofa-selected"></i> 已选           </div>
                    
          <div>            <i class="sofa-gray"></i> 已售           </div>
                  
        </div>
              
      </div>
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
        _: "space",
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
        "__aaaaaaaa___aaaaaaaa___aaaaaaa_",
      ],
      size: 0,
      price: 0,
      seatLevelPrice: ((param) => {
        let priceMap = new Map();
        for (let i = 0; i < param.length; i++) {
          let item = param[i];
          priceMap[item.areaLevelName] = item.price;
        }
        // console.log(priceMap);
        return priceMap;
      })(this.$route.params.data.seatPriceList),
      seatData: ((param) => {
        let seatMap = {};
        for (let i = 0; i < param.length; i++) {
          let item = param[i];
          seatMap[item.x + "_" + item.y] = item;
        }
        // console.log(seatMap);
        return seatMap;
      })(this.$route.params.data.seatInfoList),
      selectedMap: new Map(),
      seatPriceList: [],
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
      oImg.onmousedown = function (ev) {
        var ev = ev || event;
        var disX = ev.clientX - oImg.offsetLeft;
        var disY = ev.clientY - oImg.offsetTop;
        if (oImg.setCapture) {
          oImg.setCapture();
        }
        document.onmousemove = function (ev) {
          var ev = ev || event;
          oImg.style.left = ev.clientX - disX + "px";
          oImg.style.top = ev.clientY - disY + "px";
        };
        document.onmouseup = function () {
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
    clickCell(el) {
      this.toogleClass(el.currentTarget, "available");

      let id = el.currentTarget.id;
      let item = this.seatData[id];
      item.price = this.seatLevelPrice[item.areaLevel];

      if (this.selectedMap.get(id)) {
        this.selectedMap.delete(id);
      } else {
        this.selectedMap.set(id, item);
      }

      this.size = this.selectedMap.size;
      this.price = 0;

      this.selectedMap.forEach((item) => {
        this.price += item.price;
      });
    },
  },
  mounted() {
    //   console.log(this.getItems("_____aaaaa_____aaaa_____aaaa____"));
    this.bindScroll();
    this.seatPriceList = this.$route.params.data.seatPriceList;

    // console.log(this.$route.params.data.seatPriceList);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@top: 50px;
@red: #d8000b;

.sofa-icons {
  width: 26px;
  height: 25px;
  background-size: 100%;
  display: inline-block;
  background-position: 0 center;
}
.riband-border(@red) {
  border: 12px solid @red;
  border-bottom: 20px solid @red;
  border-top: 20px solid @red;
}
.sofa-gray {
  background-image: url("img/sofa-gray.png");
  .sofa-icons;
}
.sofa-locked {
  background-image: url("img/sofa-locked.png");
  .sofa-icons;
}
.sofa-selected {
  background-image: url("img/sofa-selected.png");
  .sofa-icons;
}
.sofa-blue {
  background-image: url("img/sofa-blue.png");
  .sofa-icons;
}
.sofa-red {
  background-image: url("img/sofa-red.png");
  .sofa-icons;
}
.sofa-pink {
  background-image: url("img/sofa-pink.png");
  .sofa-icons;
}
.background {
  background-image: url("img/sofa-shadow-top.png");
  padding: 0px 1px 1px 0.5px;
  background-size: 100%;
  .seat-charts-seat {
    margin: 0;
  }
}
.backgroundHover {
  background-image: url("img/sofa-shadow-top.png");
  padding: 1px 0.5px 0.5px 1px;
  background-size: 100%;
  .seat-charts-cell {
    margin: 0;
  }
}

.available {
  // 点击之后的样式信息
  background-image: url("img/sofa-selected.png") !important;
}
.choose-seat-container {
  height: 790px;
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
      right: -60px;
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

    .seat-area-row {
      margin: 5px 20px;
      h2 {
        width: 58px;
        height: 18px;
        padding: 1px 5px;
        display: inline-block;
        text-align: center;
        border-radius: 3px;
        line-height: 15px;
        border: 1px solid #eeeeee;
      }
      .cell-A {
        background: #fd6566;
      }
      .cell-B {
        background: #fd68a6;
      }
      .cell-C {
        background: #65a9fd;
      }
    }
    .seat-area-row:last-child {
      padding-bottom: 5px;
      border-bottom: 1px solid #ccc;
    }
    .sofa-legend {
      margin: 5px 20px;
      div {
        display: inline-block;
        width: 63px;
        height: 25px;
        i,
        span {
          vertical-align: middle;
        }
      }
    }
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
  .chartsSeat-area-A {
    .seat-area-a,
    .seat-gray-a {
      .background;
    }
  }
  .chartsSeat-area-B {
    .seat-area-b,
    .seat-gray-b {
      .background;
    }
  }
  .chartsSeat-area-C {
    .seat-area-c,
    .seat-gray-c {
      .background;
    }
  }
}
</style>

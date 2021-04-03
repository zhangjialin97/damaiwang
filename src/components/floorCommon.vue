<template>
  <div class="floorCommon">
    <!-- 左侧部分 -->
    <div class="floorleft fl">
      <h3>
        <span class="mark">{{ txt }}F</span
        ><span class="zi">{{ bigTitle }}</span>
      </h3>

      <div class="duidieposi">
        <img :src="bigImg" alt="" class="limg fl" />
        <!-- 图片上的堆叠 -->
        <div class="duidie">
          <span v-for="(item, index) in darenitemgaiyao" :key="index">
            <p>{{ item.gaiyao }}</p>
            <p>{{ item.price | formatPrice("", "元") }}</p>
          </span>
        </div>
      </div>
      <div class="rmain fl">
        <ul>
          <li v-for="(item, index) in darenitem" :key="index" class="fl lis">
            <img :src="suijiImg[ranNum[index]]" alt="" class="rimg fl" />
            <p class="firstp">
              {{ item.title | formatTitle1("。", "...") }}
            </p>
            <p>{{ item.datefrom }}-{{ item.dateto }}</p>
            <p>
              {{ item.address }}
            </p>
            <p>
              {{ item.price | formatPrice("￥", "起") }}
            </p>
          </li>
        </ul>
      </div>
    </div>
    <div class="floorright fr">
      <div class="topright">
        <a class="fr" href="">查看全部>>></a>
        <p class="title">热门演出排行</p>
      </div>
      <ul>
        <li
          class="fl paihang"
          v-for="(item, index) in darenitempaihang"
          :key="index"
        >
          <span :class="{ xuhao: true, yanse: item.id < 4 }">{{
            item.id
          }}</span>
          <span>{{ item.paihang | formatTitle2("。", "...") }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: ["txt", "bigImg", "bigTitle"],
  data() {
    return {
      darenitem: [],
      darenitemgaiyao: [],
      darenitempaihang: [],
      suijiImg: [],
      ranNum: [],
    };
  },
  mounted() {
    this.$http("/api/home/xijudaren").then((res) => {
      this.darenitem = res.data;
    });
    this.$http("/api/home/xijudaren/gaiyao").then((res) => {
      this.darenitemgaiyao = res.data;
    });
    this.$http("/api/home/xijudaren/paihang").then((res) => {
      this.darenitempaihang = res.data;
    });
    this.$http("/api/home/suijiImg").then((res) => {
      this.suijiImg = res.data;
      console.log(this.suijiImg)
    });

    this.ranNum = this.f1();
    console.log(this.ranNum);
  },
  // 价格过滤器
  filters: {
    formatPrice: function (v, y, x) {
      return y + v + x;
    },
    formatTitle1: function (v, x, y) {
      if (v.length <= 12) {
        return v + x;
      } else {
        return v.slice(0, 12) + y;
      }
    },
    formatTitle2: function (v, x, y) {
      if (v.length <= 16) {
        return v + x;
      } else {
        return v.slice(0, 16) + y;
      }
    },
  },
  methods: {
    f1() {
      var arr_4 = new Array();
      function getRandom(min, max) {
        //开始取数
        //随机数
        var random = Math.random() * (max - min) + min;
        //向下取整
        random = Math.floor(random);
        if (arr_4.length < 4) {
          //判断数组长度
          for (
            var i = 0;
            i <= arr_4.length;
            i++ //遍历数组。
          ) {
            if (random == arr_4[i]) {
              //比较随机数
              break;
            } else {
              if (i == arr_4.length) {
                arr_4.push(random);
                break;
              }
            }
          }
          getRandom(0, 6);
        }
      }
      getRandom(0, 3); //随机取0-9
      return arr_4;
    },
  },
};
</script>
<style scoped>
.floorleft {
  width: 70%;
  height: 380px;
  background-color: white;
  margin-top: 30px;
  padding: 25px;
}
.floorleft .mark {
  color: #ff3c1b;
}
.floorleft .zi {
  margin-left: 10px;
  color: gray;
}
.limg {
  width: 250px;
  height: 336px;
  margin-top: 20px;
}

.rmain {
  width: 700px;
  margin-left: 30px;
}
.rimg {
  width: 120px;
  height: 155px;
}
.lis p {
  margin-left: 5px;
  font-size: 14px;
  color: gray;
  text-indent: 0.5em;
  line-height: 23px;
}
.lis {
  width: 314px;
  padding: 15px;
}
.firstp {
  margin-bottom: 40px;
  color: black !important;
}
/* 图片上的堆叠 */
.duidieposi {
  position: relative;
  width: 250px;
  height: 358px;
  float: left;
}

.duidie {
  width: 250px;
  height: 100px;
  z-index: 5;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: #a82813;
  opacity: 0.9;
  color: white;
}
.duidie p {
  padding: 10px;
  font-size: 14px;
}
/* 右侧部分 */
.floorright {
  width: 20%;
  height: 380px;
  background-color: white;
  margin-top: 30px;
  padding: 25px;
}
.floorright .topright {
  height: 30px;
  border: 1px white solid;
  margin-bottom: 15px;
}
.floorright .topright .title {
  font-size: 14px;
  color: gray;
  margin-top: 10px;
}
.floorright .topright a {
  float: right;
  font-size: 15px;
}
.floorright .xuhao {
  width: 20px;
  height: 20px;
  line-height: 20px;
  margin-right: 10px;
  background-color: gray;
  display: inline-block;
  text-align: center;
}
.floorright .yanse {
  background-color: #ff3c1b;
}
.floorright .paihang {
  line-height: 28px;
  font-size: 14px;
}
</style>
<template>
  <div class="home" v-title data-title="首页">
    <el-row :gutter="20">
      <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="18">
        <div class="grid-content bg-purple layoutWidth">
          <!-- 导入轮播图组件 -->
          <banner mark="mark"></banner>
          <!-- 中间部分 -->
          <div class="maincenter">
            <!-- 今日推荐 -->
            <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="今日推荐" name="first">
                <ul>
                  <!-- 遍历接口数组 -->
                  <li
                    v-for="(item, index) in todayitem"
                    :key="index"
                    class="fl todayli"
                  >
                    <span v-for="(n, m) in todayimg" :key="m">
                      <img :src="n.todayimg[index]" class="todayimg" />
                    </span>
                    <p>
                      {{ item.title | formatTitle("...") }}
                    </p>
                    <p>
                      票价：<span style="color: black">{{
                        item.price | formatPrice("￥")
                      }}</span>
                    </p>
                  </li>
                </ul>
              </el-tab-pane>
              <!-- 即将开售 -->
              <el-tab-pane label="即将开售" name="second">
                <ul>
                  <!-- 遍历接口数组 -->
                  <li
                    v-for="(item, index) in todayitem"
                    :key="index"
                    class="fl todayli"
                  >
                    <span v-for="(n, m) in todayimg" :key="m">
                      <img :src="n.todayimg[item.xiabiao]" class="todayimg" />
                    </span>
                    <p>
                      {{ item.title | formatTitle("...") }}
                    </p>
                    <p>
                      票价：<span style="color: black">{{
                        item.price | formatPrice("￥")
                      }}</span>
                    </p>
                  </li>
                </ul>
              </el-tab-pane>
            </el-tabs>
          </div>
          <!-- 中间部分结束 -->
          <div class="floor">
            <!-- 1-5F楼 -->
            <span v-for="(item, index) in bigImg" :key="index">
              <span v-for="(n, m) in bigTitle" :key="m">
                <floorCommon
                  :txt="index + 1"
                  :bigTitle="n[index]"
                  :bigImg="item"
                ></floorCommon>
              </span>
            </span>
          </div>
          <div class="rili fl">
            <calendar></calendar>
          </div>

          <div class="dibuguss fl">
            <bottom></bottom>
          </div>
        </div>
      </el-col>
      <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
    <div class="dibu">
      <setBottom></setBottom>
    </div>
  </div>
</template>
<script>
import banner from "../components/banner.vue";
import floorCommon from "../components/floorCommon";
import calendar from "../components/Calendar/CalendarSwitch";
import setBottom from "../components/setBottom";
import bottom from "../components/bottom";

export default {
  components: {
    banner,
    floorCommon,
    calendar,
    bottom,
    setBottom,
  },
  data() {
    return {
      activeName: "first",
      // 今日推荐接口
      todayitem: [],
      // 今日推荐图片
      todayimg: [],
      // 1-5F大图
      bigImg: [],
      // 1-5F标题
      bigTitle: [],
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
  mounted() {
    this.$http("/api/home/todayitems").then((res) => {
      this.todayitem = res.data;
    });
    this.$http("/api/home/todayimg").then((res) => {
      this.todayimg = res.data;
    });
    // 1-5F大图
    this.$http("/api/home/bigImg").then((res) => {
      this.bigImg = res.data;
    });
    // 1-5F大标题
    this.$http("/api/home/bigTitle").then((res) => {
      this.bigTitle = res.data;
    });
  },
  // 题目、价格过滤器
  filters: {
    formatPrice: function (v, y) {
      return y + v;
    },
    formatTitle: function (v, p) {
      return v + p;
    },
  },
};
</script>
<style scoped>
.grid-content {
  min-height: 36px;
}
/* 中间部分 */
.maincenter {
  margin-top: 20px;
  width: 1359px;
  height: 280px;
  background-color: white;
  overflow: hidden;
  padding: 5px 0 5px 50px;
}
.todayimg {
  width: 150px;
  height: 170px;
}
.todayli p {
  color: gray;
  font-size: 14px;
}

/* 今日推荐列表 */
.todayli {
  margin-right: 75px;
}
.rili {
  margin-top: 30px;
}
.dibuguss {
  margin-top: 20px;
}
.dibu {
  margin-top: 20px;
}
</style>

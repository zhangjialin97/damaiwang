<template>
  <div class="calendar">
    <!-- 日历头部 -->
    <div class="calendar-title-box">
      <!-- 上一个月 -->
      <span class="prev-month" id="prevMonth" @click="clickPrev"></span>
      <!-- 中间标题 -->
      <span class="calendar-title" id="calendarTitle">{{ currentTitle }}</span>
      <!-- 下一个月 -->
      <span id="nextMonth" class="next-month" @click="clickNext"></span>
    </div>
    <!-- 表格主体部分 -->
    <div class="calendar-body-box">
      <table id="calendarTable" class="calendar-table">
        <!-- 表头部分 -->
        <thead>
          <tr>
            <th v-for="(item, index) in weekName" :key="index">{{ item }}</th>
          </tr>
        </thead>
        <!-- 表格主体部分 -->
        <tbody>
          <tr v-for="(x, i) in dayKey.length / 7" :key="i">
            <td
              v-for="(y, i) in dayKey.length / 6"
              :key="i"
              v-show="
                currentMonth == dayKey[(x - 1) * 7 + y - 1].substring(0, 6) ||
                (x - 1) * 7 + y - 1 < 7
              "
            >
              <div
                class="calendar-desc"
                v-if="
                  currentMonth == dayKey[(x - 1) * 7 + y - 1].substring(0, 6)
                "
              >
                <div class="calendar-day">
                  {{ dayKey[(x - 1) * 7 + y - 1].substring(6, 8) }}
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      weekName: [
        "SUNDAY 日",
        "MONDAY 一",
        "TUESDAY 二",
        "WEDNESDAY 三",
        "THURSDAY 四",
        "FRIDAY 五",
        "SATURDAY 六",
      ],
      currentDay: "",
      currentMonth: "",
      currentTitle: "",
      dayKey: [],
    };
  },
  methods: {
    // index 如果为0 代表当前月份， 如果为 -1 代表上一个月份，如果为 1 代表下一个月份，
    init(index) {
      this.currentDay = new Date(
        this.currentDay.getFullYear(),
        this.currentDay.getMonth() + index,
        this.currentDay.getDate()
      );
      this.currentMonth = this.currentDay.Format("yyyyMM");
      this.currentTitle = this.currentDay.Format("yyyy年MM月");
    },
    // 点击切换上一个月
    clickPrev() {
      this.init(-1);
      this.getDateMap();
    },
    // 点击切换下一个月
    clickNext() {
      this.init(1);
      this.getDateMap();
    },
    // 获取日期数据信息
    getDateMap() {
      let dayAarry = [];
      let firstDay = new Date(
        this.currentDay.getFullYear(),
        this.currentDay.getMonth(),
        1
      );
      for (let i = 0; i < 42; i++) {
        let time = new Date(
          this.currentDay.getFullYear(),
          this.currentDay.getMonth(),
          i + 1 - firstDay.getDay()
        ).Format("yyyyMMdd");
        dayAarry.push(time);
      }
      this.dayKey = dayAarry;
    },
    // 给Date对象增加Format方法
    addDatePro() {
      // 判断此函数是否存在，如果存在直接返回，不执行后续代码
      if (Date.prototype.Format) {
        return;
      }
      Date.prototype.Format = function (fmt) {
        var o = {
          "M+": this.getMonth() + 1, //月份
          "d+": this.getDate(), //日
          "H+": this.getHours(), //小时
          "m+": this.getMinutes(), //分
          "s+": this.getSeconds(), //秒
          "q+": Math.floor((this.getMonth() + 3) / 3), //季度
          S: this.getMilliseconds(), //毫秒
        };
        if (/(y+)/.test(fmt))
          fmt = fmt.replace(
            RegExp.$1,
            (this.getFullYear() + "").substr(4 - RegExp.$1.length)
          );
        for (var k in o)
          if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(
              RegExp.$1,
              RegExp.$1.length == 1
                ? o[k]
                : ("00" + o[k]).substr(("" + o[k]).length)
            );
        return fmt;
      };
      /**
       * 重写toJSON方法
       * returns {string}
       */
      Date.prototype.toJSON = function () {
        var format = this.Format("yyyy-MM-dd HH:mm:ss");
        return format.replace(" ", "T") + ".000Z";
      };
    },
  },
  mounted() {
    this.currentDay = new Date();
    this.addDatePro();
    this.init(0);
    this.getDateMap();
  },
};
</script>

<style scoped lang="less">
/**
 * 设置日历的大小
 */
.calendar {
  display: block;
  margin: 0;
  padding: 0;
  margin-bottom: 20px;
  width: 1407px;
  /**
   设置日历顶部盒子
  */
  .calendar-title-box {
    position: relative;
    width: 100%;
    height: 125px;
    line-height: 36px;
    text-align: center;
    border-radius: 20px 20px 0 0;
    background: url("img/calendarTitle.png");
    background-size: 100%;
    color: #ffffff;
    font-weight: 900;
    font-size: 24px;
    .calendar-title,
    .next-month,
    .prev-month {
      line-height: 100px;
      margin: 5px;
      cursor: pointer;
    }
    .prev-month::before {
      content: "<";
    }
    .next-month::after {
      content: ">";
    }
  }
  /* 
  设置日历body 结构样式信息显示
  */
  .calendar-body-box {
    background: #ffffff;

    /* 设置日历表格样式 */
    .calendar-table {
      width: 100%;
      border-collapse: collapse;
      text-align: center;
      thead {
        tr:first-child {
          line-height: 30px;
          height: 40px;
          background: #eaeaea;
          th:first-child,
          th:last-child {
            color: red;
          }
        }
      }

      tr {
        font-size: 14px;
        td {
          width: 130px;
          height: 130px;
          line-height: 130px;
          border: 1px solid #eee;
          .calendar-desc {
            text-align: center;
          }
        }
      }
    }
  }
}
</style>

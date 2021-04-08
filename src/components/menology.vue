
<template>
    <div id='calendar'>
        <!-- 年份 月份 -->
        <div class='month'>
            <ul class='month'>
                <!--点击会触发pickpre函数，重新刷新当前日期 @click(vue v-on:click缩写) -->
                <li class='arrow' @click='pickPre(currentYear,currentMonth)'>
                    <h1 class="aaa">
                        &lt;
                    </h1>
                </li>
                <li class='year-month'>
                    <span class='choose-year'>{{ currentYear }}年</span>
                    <span class='choose-month'>{{ currentMonth }}月</span>
                </li>
                <li class='arrow' @click='pickNext(currentYear,currentMonth)'>
                    <h1 class="aaa">
                        &gt;
                    </h1>
                </li>
            </ul>

        </div>
        <!-- 星期 -->
        <ul class='weekdays month'>
            <li class="color"> SUNDAY日</li>
            <li>MONDAY一</li>
            <li>TUESDAY二</li>
            <li>WEDNESDAY三</li>
            <li>THURSDAY四</li>
            <li>FRIDAY五</li>
            <li class="color">SATURDAY六</li>
        </ul>
        <!-- 日期 -->
        <ul class='days'>
            <!-- 核心 v-for循环 每一次循环用<li>标签创建一天 -->
            <li v-for='(dayobject,i) in days' :key='i'>
                <!--本月-->
                <!--如果不是本月  改变类名加灰色-->
                <span v-if='dayobject.day.getMonth()+1 != currentMonth' class='other-month' @click="getDayTime(dayobject.day)">{{ dayobject.day.getDate() }}</span>
                <!--如果是本月  还需要判断是不是这一天-->
                <span v-else>
                    <!--今天  同年同月同日-->
                    <span v-if='dayobject.day.getFullYear() == new Date().getFullYear() && dayobject.day.getMonth() == new Date().getMonth() && dayobject.day.getDate() == new Date().getDate()' class='active' @click="getDayTime(dayobject.day)">{{ dayobject.day.getDate() }}</span>
                    <span v-else @click="getDayTime(dayobject.day)">{{ dayobject.day.getDate() }}</span>
                </span>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            currentDay: 1,
            currentMonth: 1,
            currentYear: 1970,
            currentWeek: 1,
            days: []
        };
    },
    created: function() {
        // 在vue初始化时调用
        this.initData(null);
    },
    methods: {
        initData: function(cur) {
            // var leftcount = 0 // 存放剩余数量
            var date;
            if (cur) {
                date = new Date(cur);
            } else {
                var now = new Date();
                var d = new Date(
                    this.formatDate(now.getFullYear(), now.getMonth(), 1)
                );
                d.setDate(35);
                date = new Date(
                    this.formatDate(d.getFullYear(), d.getMonth() + 1, 1)
                );
            }
            this.currentDay = date.getDate();
            this.currentYear = date.getFullYear();
            this.currentMonth = date.getMonth() + 1;
            this.currentWeek = date.getDay(); // 1...6,0
            if (this.currentWeek === 0) {
                this.currentWeek = 7;
            }
            var str = this.formatDate(
                this.currentYear,
                this.currentMonth,
                this.currentDay
            );
            this.days.length = 0;
            // 今天是周日，放在第一行第7个位置，前面6个
            // 初始化本周
            for (var i = this.currentWeek; i >= 0; i--) {
                var d2 = new Date(str);
                d2.setDate(d2.getDate() - i);
                var dayobjectSelf = {}; // 用一个对象包装Date对象  以便为以后预定功能添加属性
                dayobjectSelf.day = d2;
                this.days.push(dayobjectSelf); // 将日期放入data 中的days数组 供页面渲染使用
            }
            // 其他周
            for (var j = 1; j <= 35 - this.currentWeek; j++) {
                var d3 = new Date(str);
                d3.setDate(d3.getDate() + j);
                var dayobjectOther = {};
                dayobjectOther.day = d3;
                this.days.push(dayobjectOther);
            }
        },
        getDayTime(el) {
            // alert(el);
        },
        pickPre: function(year, month) {
            // setDate(0); 上月最后一天
            // setDate(-1); 上月倒数第二天
            // setDate(dx) 参数dx为 上月最后一天的前后dx天
            var d = new Date(this.formatDate(year, month, 1));
            d.setDate(0);
            this.initData(
                this.formatDate(d.getFullYear(), d.getMonth() + 1, 1)
            );
        },
        pickNext: function(year, month) {
            var d = new Date(this.formatDate(year, month, 1));
            d.setDate(35);
            this.initData(
                this.formatDate(d.getFullYear(), d.getMonth() + 1, 1)
            );
        },
        // 返回 类似 2016-01-02 格式的字符串
        formatDate: function(year, month, day) {
            var y = year;
            var m = month;
            if (m < 10) m = "0" + m;
            var d = day;
            if (d < 10) d = "0" + d;
            return y + "-" + m + "-" + d;
        }
    }
};
</script>
<style>
.color {
    color: red;
}
#calendar {
    font-size: 12px;
    width: 100%;
    margin: 0 auto;
    /* box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
        0 3px 1px -2px rgba(0, 0, 0, 0.1), 0 1px 5px 0 rgba(0, 0, 0, 0.12); */
}
.month {
    width: 100%;
    color: #333333;
}
.month ul {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
    height: 60px;
    background: #ff3c1b;
}
.year-month {
    color: #e1e1e1;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 10px;
}
.choose-month {
    color: #e1e1e1;
    text-align: center;
    font-size: 20px;
}
.arrow {
    color: #e1e1e1;
    margin-top: 60px;
    margin: 0 auto;
}
.month ul li {
    font-size: 20px;
    text-transform: uppercase;
}
.weekdays {
    margin: 0;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    color: #999;
    justify-content: space-around;
}
.weekdays li {
    display: inline-block;
    width: 13.6%;
    text-align: center;
}
.days {
    padding: 10px;
    background: #ffffff;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    border: none;
}
.days li {
    list-style-type: none;
    display: inline-block;
    width: 14%;
    height: 100px;
    text-align: center;
    padding-bottom: 4px;
    padding-top: 10px;
    font-size: 12px;
    color: #000;
    border: 1px solid #F3F3F3;
}
.days li .active {
    padding: 6px 10px;
    width: 50px;
    height: 50px;
    background: #00b8ec;
    color: #fff;
}
.days li .other-month {
    padding: 5px;
    color: gainsboro;
}
.days li:hover > span > span {
    /* border: 2px seagreen solid; */
    padding: 6px 10px;
    border-radius: 50%;
    background: #e1e1e1;
    color: #fff;
}
</style>
<template>
  <div class="checkinfo">
    <!-- 当前影片信息 -->
    <div class="information">
      <!-- 当前信息 -->
      <ul>
        <li>大麦 <i class="el-icon-arrow-right"> </i></li>
        <li>北京 <i class="el-icon-arrow-right"> </i></li>
        <li>电影 <i class="el-icon-arrow-right"> </i></li>
        <li>
          大型多媒体励志互动儿童剧《奇门遁甲》( 11月)
          <i class="el-icon-arrow-right"> </i>
        </li>
        <li>1999-11-09 09:44:56</li>
      </ul>
    </div>
    <!-- 过度条 -->
    <div class="excessive layoutWidth">
      <ul class="layoutWidth">
        <li>
          <p>1 <i>选择区域</i></p>
          <div class="corner"></div>
        </li>
        <li class="opt">
          <p>2 <i>选择座位</i></p>
          <div class="corner"></div>
        </li>
        <li>
          <p>3 <i>结账付钱</i></p>
        </li>
      </ul>
    </div>
    <!-- 选座 -->

    <!-- @click="clickCell" -->
    <!-- :ref="x + 1 + '_' + (y + 1)" -->
    <div class="area layoutWidth">
      <!-- 左边选座区域 -->
      <div class="left">
        <!-- 选座居中 -->
        <div class="seat" id="seatMap">
          <div v-for="(itemt, x) in seat" :key="x" ref="div">
            <div
              v-for="(subItem, y) in getItems(itemt)"
              :key="y"
              class="seatinfo"
            >
              <div
                v-if="subItem != '_'"
                @click.stop="clickCell(x, y, subItem)"
                :class="'seat-charts-cell seat-charts-seat '+icons[subItem]
                "
              ></div>
              <div
                v-if="subItem == '_'"
                :class="'seat-charts-cell ' + 'seat-charts-' + icons[subItem]"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <!-- 右边选座信息 -->
      <div class="right">
        <div class="selected">
          <p>
            已选[<span>{{ seat1.length }}</span
            >]座
          </p>
        </div>
        <!-- 遍历该seat1数组  如果该数组为空那么该div中得内容将不会显示 -->
        <div class="inventory" v-for="(t, index) in seat1" :key="index">
          <div class="fl zuo">
            <p class="zuowei fl"></p>
            <p class="pirce">{{ t.pirce }}</p>
          </div>
          <div class="fl zuoweiinfo">
            <p>座位 : {{ t.xx }} 排 {{ t.yy }} 座</p>
            <p>看台 : 中国儿童中心剧院 - 海淀</p>
            <p>楼层 : 剧场</p>
          </div>
        </div>
        <!-- 如果seat1数组长度位0就不显示 如果不为0就显示 -->
        <div class="zongpirce" v-if='!seat1.length == 0'>
          <!-- 将点击后得座位信息用filters计算总价格 -->
          <p @click="push">结账 : {{seat1|zongjia('￥')}}</p>
        </div>
      </div>
      <!-- 底部选座区 -->
      <div class="bottom">
        <div class="top">
          <p v-for="(itemll,index) in seatPriceList" :key="index">
            <span :class="{seatPriceListprice:true, w:true,y:index==1,s:index==2}"> ￥ {{itemll.price}}</span>
            <span class="seatPriceListareaLevelName">{{ itemll.areaLevelName }}</span>
            <span class="seatPriceListbtn">
              <input type="checkbox" @click="moren(itemll.areaLevelName)">
            </span>
          </p>
        </div>
        <div class="bom">
          <p class="fl"><span class="select"></span><span>选</span></p>
          <p class="fl"><span class="selected"></span><span>已选</span></p>
          <p ><span class="unsold"></span><span>未售出</span></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      //座位标号
      seat: [
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
      //座位标号类名
      icons: {
        a: "seat-chars-a",
        b: "seat-chars-b",
        c: "seat-chars-c",
        _: "space",
      },
      //点击座位后将座位信息填充到此数组
      seat1: [],
      //左下角座位选择信息
      seatPriceList: [
        { areaLevelName: "A", price: 90 },
        { areaLevelName: "B", price: 100 },
        { areaLevelName: "C", price: 120 }
      ],
      bol:false
    };
  },
  filters:{
    //计算选中座位后得总价格
    zongjia(q,i){
      var zongjia = 0;
      for(var y = 0;y< q.length;y++){
          zongjia += q[y].pirce
      }
      return i + zongjia
    }
  },
  //座位价格选择-------------------------------------------------------------------------------------------------
  methods: {
    moren(ui){
      //通过ref获得dom元素
      var div = this.$refs.div
      //如果传回得值是A
      if(ui == 'A'){
        // 遍历获取到得divDom元素
        for(var i = 0;i < div.length;i++){
          //再次遍历divDom元素中得子元素
          for(var qq = 0;qq < div[i].children.length;qq++){
            // 获取每次子元素得类名
            var classname = div[i].children[qq].children[0].className;
//判断这个类名是否带有bianhuan这个类名  并且带有seat-chars-a这个类名   上面已经定好得  只有A座才会带有这个类名  如果这个div没有带有bianhuan得类名斌且带有seat-chars-a这个类名那么给他新增加一个bianhuan得类名
            if(classname.indexOf('seat-chars-a') != -1 && classname.indexOf('bianhuan') == -1){
                div[i].children[qq].children[0].className = div[i].children[qq].children[0].className + ' bianhuan'
                //判断如果带有了bianhuan得类名后  在判断这个div不能带有seat-charts-space这个类名 因为这个类名是给空格加得
            }else if(classname.indexOf('seat-charts-space') == -1 && classname.indexOf('seat-chars-a') != -1 && classname.indexOf('bianhuan') != -1){
                div[i].children[qq].children[0].className = 'seat-charts-cell seat-charts-seat seat-chars-a'
            }
          }
        }
        //一下得判断同上
      }else if (ui == 'B'){
        for(var i = 0;i < div.length;i++){
          for(var qq = 0;qq < div[i].children.length;qq++){
            var classname = div[i].children[qq].children[0].className;
            if(classname.indexOf('seat-chars-b') != -1 && classname.indexOf('bianhuan') == -1){
                div[i].children[qq].children[0].className = div[i].children[qq].children[0].className + ' bianhuan'
            }else if(classname.indexOf('seat-charts-space') == -1 && classname.indexOf('seat-chars-b') != -1 && classname.indexOf('bianhuan') != -1){
                div[i].children[qq].children[0].className = 'seat-charts-cell seat-charts-seat seat-chars-b'
            }
          }
        }
      }else{
        for(var i = 0;i < div.length;i++){
          for(var qq = 0;qq < div[i].children.length;qq++){
            var classname = div[i].children[qq].children[0].className;
            if(classname.indexOf('seat-chars-c') != -1 && classname.indexOf('bianhuan') == -1){
                div[i].children[qq].children[0].className = div[i].children[qq].children[0].className + ' bianhuan'
            }else if(classname.indexOf('seat-charts-space') == -1 && classname.indexOf('seat-chars-c') != -1 && classname.indexOf('bianhuan') != -1){
                div[i].children[qq].children[0].className = 'seat-charts-cell seat-charts-seat seat-chars-c'
            }
          }
        }
      }
    },
    //点击座位事件传进来X下标和Y下标还有当前遍历出得字母和 _ 
    clickCell(x, y, yuansu) {
      var xx = 0;
      var yy = 0;
      var pirce = 0;
      //通过ref操作Dom元素获得class类名并将它转为数组
      var className = this.$refs.div[x].children[y].children[0].className.split(
        " "
      );
      //如果传进来是a
      if (yuansu == "a") {
        //遍历这个class看他是否带有availableA类名
        for (var i = 0; i < className.length; i++) {
          if (className[i] != "availableA") {
            this.$refs.div[x].children[y].children[0].className =
              this.$refs.div[x].children[y].children[0].className +
              " availableA";
          } else {
            this.$refs.div[x].children[y].children[0].className =
              "seat-charts-cell seat-charts-seat seat-chars-a";
          }
        }
        //传进来是a是价格为90 x  下标加1  是 第几排  y是这牌中得第几座
        xx = x + 1;
        yy = y;
        pirce = 90;
        //以下同上
      } else if (yuansu == "b") {
        for (var i = 0; i < className.length; i++) {
          if (className[i] != "availableB") {
            this.$refs.div[x].children[y].children[0].className =
              this.$refs.div[x].children[y].children[0].className +
              " availableB";
          } else {
            this.$refs.div[x].children[y].children[0].className =
              "seat-charts-cell seat-charts-seat seat-chars-b";
          }
        }
        xx = x + 1;
        yy = y;
        pirce = 100;
      } else {
        for (var i = 0; i < className.length; i++) {
          if (className[i] != "availableC") {
            this.$refs.div[x].children[y].children[0].className =
              this.$refs.div[x].children[y].children[0].className +
              " availableC";
          } else {
            this.$refs.div[x].children[y].children[0].className =
              "seat-charts-cell seat-charts-seat seat-chars-c";
          }
        }
        xx = x + 1;
        yy = y;
        pirce = 120;
      }
      //点击座位判断booler值和这个数组中是否存在一模一样得对象如果存在就删除并将这个变量改为false
      var seat2 = true;
      for(var i = 0;i < this.seat1.length;i++){
        if(this.seat1[i].xx==xx && this.seat1[i].yy == yy && this.seat1[i].pirce == pirce){
            this.seat1.splice(i,1);
            seat2 = false;
        }
      }
      //判断变量未true时才会执行push方法
      if(seat2){
        this.seat1.push({xx:xx,yy:yy,pirce:pirce,names:'大型多媒体励志互动儿童剧《奇门遁甲》( 11月)',num:1})
      }
    },
    getItems(item) {
      return item.match(/[a-z_]{1}(\[[0-9a-z_]{0,}(,[0-9a-z_ ]+)?\])?/gi);
    },
    //结账跳转-----------------------------------------------------------------------------------------------
    push(){
      //此路由传值方法可隐藏传输得值
      if(JSON.parse(sessionStorage.getItem("user")) != null){
        this.$router.push({name:'order',params:{info:this.seat1}});
      }else{
        this.$message('请先登录')
      }
      
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
      var scaleSize = 1;

      function fn(ev) {
        var ev = ev || event;
        var b = true;
        if (ev.wheelDelta) {
          b = ev.wheelDelta > 0 ? true : false;
        } else {
          b = ev.detail < 0 ? true : false;
        }
        if (b) {
          scaleSize += 0.03;
          scaleSize = scaleSize > 2 ? 2 : scaleSize;
        } else {
          scaleSize -= 0.03;
          scaleSize = scaleSize < 0.5 ? 0.5 : scaleSize;
        }
        this.style.transform = "scale(" + scaleSize + ")";
        if (ev.preventDefault) {
          ev.preventDefault();
        }
        return false;
      }
    },
  },
  mounted(){
    this.$http.get('http://www.grysw.com/api.php/provide/vod/?ac=list&t=9&pg=1').then(res=>{
      console.log(res)
    })
    this.$http.get('http://www.grysw.com/api.php/provide/vod/?ac=detail&ids=5508').then(res=>{
      console.log(res)
    })
  }
};
</script>
<style scoped>
.area .right .inventory::after,
.excessive::after,
.information::after {
  content: "";
  display: block;
  clear: both;
}
.information ul li {
  float: left;
  font-size: 14px;
  margin-left: 10px;
}
.information ul li i {
  font-size: 12px;
  color: #888;
}
.excessive {
  margin-top: 50px;
}
.excessive ul li {
  float: left;
  font-weight: 400;
  width: 469px;
  height: 50px;
  color: #fff;
  line-height: 50px;
  text-align: center;
  background: rgb(69, 69, 69);
  position: relative;
}
.excessive ul li div {
  width: 35px;
  height: 35px;
  background: rgb(69, 69, 69);
  transform: rotate(45deg);
  position: absolute;
  right: -16px;
  top: 7px;
  z-index: 2;
}
.excessive ul .opt,
.excessive ul .opt .corner {
  background: rgb(216, 0, 11);
}
.area {
  height: 800px;
  position: relative;
}
.area .left {
  width: 1100px;
  height: 800px;
  float: left;
}
.area .left .seat {
  height: 600px;
  margin: 0 auto;
  padding: 100px 15px;
}
.area .right {
  width: 270px;
  height: 800px;
  float: right;
  overflow: auto;
  background: rgb(239,239,239);
}
.area .bottom {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 200px;
  height: 220px;
  border: 1px rgb(204,204,204) solid;
  border-radius: 10px;
}
.seatinfo {
  display: inline-block;
  padding: 10px 0;
  margin: 0 5px;
}
.seat-charts-row {
  padding: 10px 0;
}
.seat-charts-space {
  width: 21px;
  height: 21px;
}
.seat-charts-seat {
  background: url("/img/xuanzuo/sofa-gray.png") no-repeat left;
  width: 21px;
  height: 21px;
  background-size: 100%;
}
.seat-chars-a {
  background: url("/img/xuanzuo/sofa-red.png") no-repeat left;
  background-size: 100%;
}
.seat-chars-b {
  background: url("/img/xuanzuo/sofa-pink.png") no-repeat left;
  background-size: 100%;
}
.seat-chars-c {
  background: url("/img/xuanzuo/sofa-blue.png") no-repeat left;
  background-size: 100%;
}
/* // 激活后的样式信息 */
.availableA {
  background: url("/img/xuanzuo/sofa-selected.png") no-repeat left;
  width: 21px;
  height: 21px;
  background-size: 100%;
}
.availableB {
  background: url("/img/xuanzuo/sofa-selected.png") no-repeat left;
  width: 21px;
  height: 21px;
  background-size: 100%;
}
.availableC {
  background: url("/img/xuanzuo/sofa-selected.png") no-repeat left;
  width: 21px;
  height: 21px;
  background-size: 100%;
}
/* 已选座位 */
.area .right .selected {
  width: 270px;
  height: 80px;
  background: rgb(221, 221, 221);
}
.area .right .selected > p {
  text-align: center;
  line-height: 80px;
}
.area .right .selected > p span {
  color: red;
}
.area .right .zongpirce {
  width: 100px;
  height: 30px;
  font-size: 14px;
  background: red;
  color: #fff;
  border-radius: 5px;
  line-height: 30px;
  text-align: center;
  margin: 30px auto;
}
.area .right .inventory  {
  border-bottom: 1px rgb(210,210,210) solid;
  border-top: 1px rgb(210,210,210) solid;
  border-radius: 10px;
}
.area .right .inventory .zuo {
  width: 70px;
  height: 50px;
}
.area .right .inventory .zuo .zuowei {
  width: 70px;
  height: 70px;
  background: url("/img/xuanzuo/sofa-blue.png") no-repeat center 13px;
}
.area .right .inventory:nth-of-type(n + 2) {
  margin-top: 10px;
}
.area .right .inventory .zuo .pirce {
  text-align: center;
  line-height: 24px;
}
.area .right .inventory .zuoweiinfo {
  width: 180px;
}
.area .right .inventory .zuoweiinfo p {
  font-size: 14px;
  line-height: 24px;
}
.area .bottom .top {
  padding: 5px 10px;
  border-bottom: 1px #888 solid;
}
.area .bottom p span {
  display: inline-block;
  margin: 5px 0;
}
.area .bottom p .w {
  width: 60px;
  font-size: 14px;
  text-align: center;
}

.area .bottom p .seatPriceListareaLevelName {
  width: 40px;
  text-align: center;
}
.area .bottom p .seatPriceListprice {
  background: rgb(253,101,102);
}
.area .bottom p .y {
  background: rgb(253,104,166);
}
.area .bottom p .s {
  background: rgb(101,169,253);
}
.area .bottom .bom {
  padding: 5px 10px;
}
.area .bottom .bom .select {
  height: 30px;
  /* line-height: 30px; */
}
.area .bottom .bom p .select {
  /* display: inline-block; */
  float: left;
  width: 30px;
  height: 30px;
  background: url('/img/xuanzuo/sofa-locked.png') no-repeat ;
  background-size: cover;
}
.area .bottom .bom p {
  width: 90px;
}
.area .bottom .bom p .selected {
  float: left;
  width: 30px;
  height: 30px;
  background: url('/img/xuanzuo/sofa-selected.png') no-repeat ;
  background-size: cover;
}
.area .bottom .bom p .unsold {
  float: left;
  width: 30px;
  height: 30px;
  background: url('/img/xuanzuo/sofa-gray.png') no-repeat ;
  background-size: cover;
}
.bianhuan {
  background: url('/img/xuanzuo/sofa-gray.png') no-repeat left/cover !important;
  width: 21px;
  height: 21px;
}

.area .bottom .bom p span+span {
  margin-left: 10px;
  line-height: 30px;
  font-size: 14px;
}
</style>
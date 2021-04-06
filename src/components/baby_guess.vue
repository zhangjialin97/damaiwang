<template>
  <div class="baby">
    <div class="babyGuess">
      <!-- 猜你喜欢 -->
      <h4>猜你喜欢</h4>
      <div class="like">
        <!-- 调用子组件传axios请求到的信息 和下标 -->
        <guessJsonVue
          v-for="(item, index) in info"
          :key="index"
          :img="imgs"
          :biao="index"
        >
          <p class="title" slot="title">{{ item.title }}</p>
          <p class="price" slot="price">
            票价 : <span>{{ item.money | moneys("￥") }}</span> 起
          </p>
        </guessJsonVue>
      </div>
    </div>
    <div class="babyDelicacy">
      <!-- 精彩聚集 -->
      <h4>精彩聚集</h4>
      <div class="babyDelicacyData">
        <div>
          <!-- 调用babyDelicacy 组件槽口根据占用不通的槽口显示不同的内容 -->
          <babyDelicacy names="Delicacy">
            <img :src="imgsDeli[0]" alt="" slot="left" class="deliLift" />
            <ul slot="cen" class="fl">
              <li
                v-for="(items, index) in imgsDeli"
                :key="index"
                :class="{ fl: true, delicacy: true, bianju: index > xiabiao }"
              >
                <img :src="items" alt="" class="deliCen" v-show="index>0&&index<7"/>
              </li>
            </ul>
            <img
              :src="imgsDeli[7]"
              alt=""
              slot="right"
              class="deliLift"
            />
          </babyDelicacy>
        </div>
      </div>
    </div>
    <div class="Animation">
      <!-- 调用babyDelicacy 组件槽口 根据占用不通的槽口显示不同的内容-->
      <babyDelicacy names="Animation">
        <img src="/img/qinzi/img_18.png" alt="" slot="left" />
        <img src="/img/qinzi/img_17.png" alt="" slot="cen" />
        <img
          src="/img/qinzi/img_16.png"
          alt=""
          slot="right"
          class="AnimationRight"
        />
      </babyDelicacy>
    </div>
    <!-- 选项卡 -->
    <div class="selecd">
      <el-tabs type="border-card" @tab-click="handleClick">
        <el-tab-pane>
          <div slot="label">
            <!-- 调用子组件babyAgeVue并传值names和动态的sel值 和通过占用槽口让他显示不同的内容 通过子父组件的传值将names的值再次传回来赋值给seled  这时seled会自动的传给子组件来判断哪张图片的显示 -->
            <babyAgeVue names='age' :sel='seled' @change="fn">
                <img src="/img/qinzi/tabsChild_1_hover.png" alt="" slot="AgeTab">
                <img src="/img/qinzi/tabsChild_1.png" alt="" slot="AgeTab2">
            </babyAgeVue>
                <!-- tabsChild_1.png -->
              <!-- 全年龄段 -->
              
          </div>
          <!-- 调用babyAgeVue子组件的同时传值但是却没有占用槽口 那么他会显示默认写好的布局和你传过的值 -->
          <babyAgeVue :info='ageJson' :Imgs='ageImg'/>
        </el-tab-pane>
        <el-tab-pane>
          <div slot="label" class="one">
            <!-- 调用子组件babyAgeVue并传值names和动态的sel值 和通过占用槽口让他显示不同的内容 通过子父组件的传值将names的值再次传回来赋值给seled  这时seled会自动的传给子组件来判断哪张图片的显示 -->
            <babyAgeVue names='zero' :sel='seled' @change="fn">
                  <img src="/img/qinzi/tabsChild_3.png" alt="" slot="AgeTab2" >
                  <img src="/img/qinzi/tabsChild_3_hover.png" alt="" slot="AgeTab">
            </babyAgeVue>
              
              <!-- 0-3年龄段 -->
          </div>
          <!-- 调用babyAgeVue子组件的同时传值但是却没有占用槽口 那么他会显示默认写好的布局和你传过的值 -->
          <babyAgeVue :info='ageJsonzero' :Imgs='ageImg'/>
        </el-tab-pane>
        <el-tab-pane>
          <div slot="label" class="one">
            <!-- 调用子组件babyAgeVue并传值names和动态的sel值 和通过占用槽口让他显示不同的内容 通过子父组件的传值将names的值再次传回来赋值给seled  这时seled会自动的传给子组件来判断哪张图片的显示 -->
            <babyAgeVue names='three' :sel='seled' @change="fn">
                <img src="/img/qinzi/tabsChild_6.png" alt="" slot="AgeTab2">
                <img src="/img/qinzi/tabsChild_6_hover.png" alt="" slot="AgeTab">
            </babyAgeVue>
              
          </div>
          <!-- 3-6年龄段 -->
          <!-- 调用babyAgeVue子组件的同时传值但是却没有占用槽口 那么他会显示默认写好的布局和你传过的值 -->
          <babyAgeVue :info='ageJson' :Imgs='ageImg'/>
        </el-tab-pane>
        <el-tab-pane>
          <div slot="label" class="one">
            <!-- 调用子组件babyAgeVue并传值names和动态的sel值 和通过占用槽口让他显示不同的内容 通过子父组件的传值将names的值再次传回来赋值给seled  这时seled会自动的传给子组件来判断哪张图片的显示 -->
            <babyAgeVue names='six' :sel='seled' @change="fn">
                <img src="/img/qinzi/tabsChild_12.png" alt="" slot="AgeTab2">
                <img src="/img/qinzi/tabsChild_12_hover.png" alt="" slot="AgeTab">
            </babyAgeVue>
          </div>
          <!-- 6-12年龄段 -->
          <!-- 调用babyAgeVue子组件的同时传值但是却没有占用槽口 那么他会显示默认写好的布局和你传过的值 -->
          <babyAgeVue :info='ageJsonzero' :Imgs='ageImg'/>
        </el-tab-pane>
      </el-tabs>
    </div>
    <!-- 热门排行 -->
    <div class="ranking">
        <h4>热门排行</h4>
        <div class="rankinglike">
          <ul>
            <li v-for="(items,index) in rankinginfo" :key="index" :class="{fl:true,ranleft:index>0,ranTop:index>3,ranleftT:index>1&&index!=4}">
              <div :class="{rankingImg:true, fl:true,first:index==0}">
                <img :src="rankingImg[index]" alt="">
                <div v-show="index==0" class="location">
                    <p>{{items.title}}</p>
                    <p>{{items.date}}</p>
                </div>
              </div>
              <div :class="{rankinginfo:true, fl:true}" v-show="index>0">
                    <div class="infoTitle">
                        <p>{{items.title}}</p>
                    </div>
                    <p class="date">{{items.date}}-{{items.dateTo}}</p>
                    <p>{{items.address|addres('...')}}</p>
                    <p>{{items.money| moneys("￥")}}起</p>
              </div>
            </li>
          </ul>
        </div>
    </div>
    <div>
          <CalendarSwitchVue />
    </div>
  </div>
</template>
<script>
import guessJsonVue from "./guess_json.vue";
import babyDelicacy from "./babyDelicacy.vue";
import babyAgeVue from './babyAge.vue';
import CalendarSwitchVue from './Calendar/CalendarSwitch'
export default {
  components: {
    guessJsonVue,
    babyDelicacy,
    babyAgeVue,
    CalendarSwitchVue
  },
  data() {
    return {
      info: [],
      imgs: [
        "/img/base/cardimg4.jpg",
        "/img/base/cardimg1.jpg",
        "/img/base/cardimg1.jpg",
        "/img/base/cardimg1.jpg",
        "/img/base/cardimg4.jpg",
        "/img/base/cardimg3.jpg",
      ],
      imgsDeli: [],
      xiabiao: 2,
      ageJson:[],
      ageImg:[],
      ageJsonzero:[],
      seled:'age',
      rankinginfo:[],
      rankingImg:[]
    };
  },
  filters: {
    moneys(i, p) {
      return p + i;
    },
    addres(p,i){
      if(p.length>7){
        var jiequ = p.substring(0,7)
        return jiequ + i;
      }
      return p;
    }
  },
  computed:{

  },
  mounted() {
    //猜你喜欢请求
    this.$http.get("/api/babyCai/guress").then((res) => {
      this.info = res.data;
    });
    //精彩聚集请求
    this.$http.get("/api/babyCai/jingCai").then((res) => {
      this.imgsDeli = res.data;
    });
    //选项卡数据文字信息请求
    this.$http.get("/api/babyCai/ageJson").then((res) => {
      this.ageJson = res.data;
    });
    //选项卡图片数据信息请求
    this.$http.get("/api/babyCai/ageimg").then((res) => {
      this.ageImg = res.data;
    });
    //选项卡不同文字数据信息请求
    this.$http.get("/api/babyCai/ageJsonzero").then((res) => {
      this.ageJsonzero = res.data;
    });
    //热门排行文字信息请求
    this.$http.get("/api/babyCai/rankinginfo").then((res) => {
      this.rankinginfo = res.data;
    });
    //热门排行图片信息请求
    this.$http.get("/api/babyCai/rankingImg").then((res) => {
      this.rankingImg = res.data;
    });
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    //子组件点击时父组件接收传过来得值
    fn(i){
      this.seled = i
    }
  },
};
</script>
<style scoped>
h4 {
  width: 100%;
  height: 50px;
  text-align: center;
  line-height: 50px;
}
.like {
  display: flex;
}
.deliLift {
  width: 330px;
  height: 610px;
}
.deliCen {
  width: 200px;
  height: 300px;
}
.delicacy {
  padding: 0 15px;
}
.bianju {
  margin-top: 5px;
}
.AnimationRight {
  margin-top: 10px;
}
/* 选项卡上边距  */
.selecd {
  margin-top: 10px;
}

.one {
  margin-left: 5px;
}
.rankinglike .rankingImg img {
  width: 140px;
  height: 165px;
}
.ranking::after {
  content: '';
  display: block;
  clear: both;
}
.rankinglike .ranTop {
  margin-top: 25px;
}
 .rankinglike .ranleft {
   margin-left: 20px;
 }
 .rankinglike .ranleftT {
   margin-left: 100px;
 }
.rankinglike li.first {
  width: 280px;
  height: 360px;
}
.rankinglike .first img {
  width: 280px !important;
  height: 360px !important;
}
.rankinglike .first .location {
  width: 100%;
  height: 60px;
  background: rgb(182,55,36);
  opacity: 0.8;
  text-align: center;
  position: relative;
  bottom: 64px;
  left: 0;
  font-size: 14px;
  color: #fff;
}
.rankinglike .first .location>p {
  line-height: 27px;
}
.rankinglike ul li .rankinginfo .date {
  margin-top: 65px;
  font-size: 14px;
  /* line-height: 24px;s */
}
.rankinglike ul li .rankinginfo p {
  line-height: 24px;
}
</style>
<style>

</style>
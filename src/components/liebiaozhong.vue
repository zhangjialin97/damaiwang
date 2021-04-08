<template>
  <div class="boxxx">
    <el-tabs type="border-card">
      <el-tab-pane label="热门推荐">
        <liebiaoqeihuan></liebiaoqeihuan>
         <div class="index11">
        <ul>
          <li v-for="(item, index) in tableDate11" :key="index" class="kkk1">
            <div class="title11">
              <img :src="item.url[index]" class="chang11" />

            </div>
              <div class="mock12">
                <p class="title12" v-for="(item, index) in tableDate12" :key="index">
                  <span class="RMD12">
                    <span>[{{ item.add }}]{{ item.addd }}</span>
                    <span>{{ item.sj }}</span>
                    <p>{{ item.shi }}</p>
                    <span class="RMB12">元 售票中</span>
                    <p>电子票</p>
                  </span>
                </p>
            </div>
          </li>
        </ul>
      </div>
      </el-tab-pane>
      <el-tab-pane label="最近开场">
         <div class="index13">
        <ul>
          <li v-for="(item, index) in tableDate13" :key="index" class="kkk1">
            <div class="title11">
              <img :src="item.url[index]" class="chang11" />

            </div>
              <div class="mock12">
                <p class="title12" v-for="(item, index) in tableDate14" :key="index">
                  <span class="RMD12">
                    <span>[{{ item.add }}]{{ item.addd }}</span>
                    <span>{{ item.sj }}</span>
                    <p>{{ item.shi }}</p>
                    <span class="RMB12">元 售票中</span>
                    <p>电子票</p>
                  </span>
                </p>
            </div>
          </li>
        </ul>
      </div>
      </el-tab-pane>
      <el-tab-pane label="最新上架">
          <div class="index15">
        <ul>
          <li v-for="(item, index) in tableDate15" :key="index" class="kkk1">
            <div class="title11">
              <img :src="item.url[index]" class="chang11" />
            </div>
              <div class="mock12">
                <p class="title12" v-for="(item, index) in tableDate16" :key="index">
                  <span class="RMD12">
                    <span>[{{ item.add }}]{{ item.addd }}</span>
                    <span>{{ item.sj }}</span>
                    <p>{{ item.shi }}</p>
                    <span class="RMB12">元 售票中</span>
                    <p>电子票</p>
                  </span>
                </p>
            </div>
          </li>
        </ul>
      </div>
      </el-tab-pane>
    </el-tabs>
    <!-- <div>
      <setBottomVue></setBottomVue>
    </div> -->
  </div>
</template>

<script>
import liebiaoqeihuan from '../components/liebiaoqiehuan.vue'
import header_navVue from './header_nav.vue';
import setBottomVue from './setBottom.vue';

export default {
  components:{
    liebiaoqeihuan,
    header_navVue,
    setBottomVue
  },
    data() {
        return {
            tableDate11:[],
            tableDate12:[],
            tableDate13:[],
            tableDate14:[],
            tableDate15:[],
            tableDate16:[]
        }
    },
    mounted() {
      this.$http.get("/api/getData11").then((res) => {
        console.log(res.data);
        var datas = res.data;
        this.tableDate11 = datas;
      });
      this.$http.get("/api/getData12").then((res) => {
        console.log(res.data);
        var datas = res.data;
        this.tableDate12 = datas;
      });
      this.$http.get("/api/getData13").then((res) => {
        console.log(res.data);
        var datas = res.data;
        this.tableDate13 = datas;
      });
      this.$http.get("/api/getData14").then((res) => {
        console.log(res.data);
        var datas = res.data;
        this.tableDate14 = datas;
      });
       this.$http.get("/api/getData15").then((res) => {
        console.log(res.data);
        var datas = res.data;
        this.tableDate15 = datas;
      });
       this.$http.get("/api/getData16").then((res) => {
        console.log(res.data);
        var datas = res.data;
        this.tableDate16 = datas;
      });
    }
};
</script>

<style scoped>
.boxxx {
  width: 80%;
  height: 1000px;
}
.chang11 {
  width: 200px;
}
.mock12 {
  font-size: 10px;
}
.title12 {
   width: 200px;
   float: left;
}
.title11{
  float: left;
}
.kkk1::after{
  content: '';
  display: block;
  clear: both;
}
</style>
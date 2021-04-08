<template>
  <div>
    <div class="xm">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="音乐会专区" name="first">
          <div>
            <p class="title1" v-for="(item, index) in tableDate2" :key="index">
              <span class="RMD">
                  <span class="tupian">
                    <img :src="item.url[index]" class="iw" />
                                    <div class="mock6">
                <p class="title7" v-for="(item, index) in tableDate7" :key="index">
                  <span class="RMD6">
                    <span>[{{ item.add }}]{{ item.addd }}</span>
                    <span>{{ item.sj }}</span>
                    <p>{{ item.shi }}</p>
                    <span class="RMB6">元 售票中</span>
                    <p>电子票</p>
                  </span>
                </p>
            </div>
                  </span>
              </span>
            </p>
          </div>
        </el-tab-pane>
        <el-tab-pane label="舞蹈专区" name="second">
            <div>
            <p class="title1" v-for="(item, index) in tableDate8" :key="index">
              <span class="RMD">
                  <span class="tupian">
                    <img :src="item.url[index]" class="iw" />
           <div class="mock6">
                <p class="title7" v-for="(item, index) in tableDate9" :key="index">
                  <span class="RMD6">
                    <span>[{{ item.add }}]{{ item.addd }}</span>
                    <span>{{ item.sj }}</span>
                    <p>{{ item.shi }}</p>
                    <span class="RMB6">元 售票中</span>
                    <p>电子票</p>
                  </span>
                </p>
            </div>
                  </span>
              </span>
            </p>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "second",
      tableDate2:[],
      tableDate7:[],
      tableDate8:[],
      tableDate9:[]
    };
  },
  mounted() {
      this.$http.get("/api/getData2").then((res) => {
        console.log(res.data);
        var datas = res.data;
        this.tableDate2 = datas;
      });
      this.$http.get("/api/getData7").then((res) => {
        console.log(res.data);
        var datas = res.data;
        this.tableDate7 = datas;
      });
      this.$http.get("/api/getData8").then((res) => {
        console.log(res.data);
        var datas = res.data;
        this.tableDate8 = datas;
      });
      this.$http.get("/api/getData9").then((res) => {
        console.log(res.data);
        var datas = res.data;
        this.tableDate9 = datas;
      });
    },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style>
.xm {
  /* border: 1px solid red; */
  height: 350px;
  margin-top: -300px;
}
.iw{
    float: left;
    height: 130px;
    width: 50%;
}
.tupian{
    display: inline-block;
    width: 33%;
    height: 150px;
    /* border: 1px solid rebeccapurple; */
    float:left;
}
</style>
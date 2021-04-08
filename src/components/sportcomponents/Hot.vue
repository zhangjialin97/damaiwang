<template>
  <div>
    <div id="muenl">
      <h4 class="pairl">热门聚集</h4>
      <img src="../../../public/img/base/ribbon-totem.png" class="zxcl" />
      <img src="../../../public/img/base/cardimg3.jpg" class="oprl" />
      <div class="indexl">
        <ul>
          <li v-for="(item, index) in HOTL" :key="index" class="kkkl">
            <div class="title5l">
              <img :src="item.url[index]" class="changl" />
              <div class="mock6l">
                <p class="title6l" v-for="(item, index) in HOTX" :key="index">
                  <span class="RMD6l">
                    <p>
                      <span>{{ item.addd }}</span>
                    </p>
                    <p>
                      <span>{{ item.sj }}</span>
                    </p>
                    <p>{{ item.shi }}</p>
                    <span class="RMB6l">{{ item.RMB }}元售票中</span>
                  </span>
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      HOTL: [],
      HOTX: [],
    };
  },
  mounted() {
    this.$http.get("/api/HOTL").then((res) => {
      // console.log(res.data);
      var datas = res.data;
      this.HOTL = datas;
    });
    this.$http.get("/api/HOTX").then((res) => {
      // console.log(res.data);
      var datas = res.data;
      this.HOTX = datas;
    });
  },
};
</script>

<style>
#muenl {
  height: 500px;
}
.pairl {
  text-align: center;
}
.zxcl {
  margin-left: 143px;
}
.oprl {
  width: 18%;
  height: 400px;
  float: left;
  margin-top: 57px;
}
.changl {
  width: 160px;
  height: 183px;
  float: left;
}
.kkkl {
  width: 380px;

  display: inline-block;
}
.mock6l {
  font-size: 10px;
}
.title6l {
  width: 200px;
  float: left;
}
</style>
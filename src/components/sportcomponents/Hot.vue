<template>
  <div>
    <div id="muen">
      <h4 class="pair">热门聚集</h4>
      <img src="../../../public/img/base/ribbon-totem.png" class="zxc" />
      <img src="../../../public/img/base/cardimg3.jpg" class="opr" />
      <div class="index">
        <ul>
          <li v-for="(item, index) in tableDate5" :key="index" class="kkk">
            <div class="title5">
              <img :src="item.url[index]" class="chang" />
              <div class="mock6">
                <p
                  class="title6"
                  v-for="(item, index) in tableDate6"
                  :key="index">
                  <span class="RMD6">
                    <p><span>{{ item.addd }}</span></p>
                    <p><span>{{ item.sj}}</span></p>
                    <p>{{ item.shi }}</p>
                    <span class="RMB6">{{item.RMB}}元售票中</span>
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
      tableDate5: [],
      tableDate6: [],
    };
  },
  mounted() {
    this.$http.get("/api/HOTL").then((res) => {
      // console.log(res.data);
      var datas = res.data;
      this.tableDate5 = datas;
    });
    this.$http.get("/api/HOTX").then((res) => {
      // console.log(res.data);
      var datas = res.data;
      this.tableDate6 = datas;
    });
  },
};
</script>

<style>
#muen {
  height: 500px;
}
.pair {
  text-align: center;
}
.zxc {
  margin-left: 143px;
}
.opr {
  width: 18%;
  height: 400px;
  float: left;
  margin-top: 57px;
}
.chang {
  width: 160px;
  height: 183px;
  float: left;
}
.kkk {
  width: 380px;

  display: inline-block;
}
.mock6 {
  font-size: 10px;
}
.title6 {
  width: 200px;
  float: left;
}
</style>
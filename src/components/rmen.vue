<template>
  <div>
    <div id="men">
      <h1 class="pai">热门排行</h1>
      <img src="../../public/img/base/ribbon-totem.png" class="zxc" />
      <img src="../../public/img/base/cardimg3.jpg" class="op" />
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
                    <span>[{{ item.add }}]{{ item.addd }}</span>
                    <span>{{ item.sj }}</span>
                    <p>{{ item.shi }}</p>
                    <span class="RMB6">元 售票中</span>
                    <p>电子票</p>
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
    this.$http.get("/api/getData5").then((res) => {
      // console.log(res.data);
      var datas = res.data;
      this.tableDate5 = datas;
    });
    this.$http.get("/api/getData6").then((res) => {
      // console.log(res.data);
      var datas = res.data;
      this.tableDate6 = datas;
    });
  },
};
</script>

<style>
#men {
  height: 500px;
  /* border: 1px solid red; */
}
.pai {
  text-align: center;
}
.zxc {
  margin-left: 143px;
}
.op {
  width: 18%;
  height: 400px;
  float: left;
  margin-top: 57px;
}
.chang {
  width: 160px;
  height: 183px;
  float: left;
  /* float: left; */
  /* margin-left: 100px; */
  /* border: 1px solid red; */
  /* padding-top: 10px; */
  /* padding-bottom: 10px; */
}
/* .index {
  border: 1px solid blue;
  height: 398px;
  width: 82%;
  margin-top: -400px;
  float: right;
} */
.kkk {
  width: 380px;
  /* float: right; */
  display: inline-block;
}
.mock6 {
  /* float: right; */
  /* display: block; */
  font-size: 10px;
}
.title6 {
  width: 200px;
  float: left;
}
</style>
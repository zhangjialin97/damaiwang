<template>
  <div>
    <div id="x1">
      <div>
        <p class="title1" v-for="(item, index) in tableDate1" :key="index">
          <span class="RMD">
            <img :src="item.url[index]" class="imgage">
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    tableDate1:[]  
    };
  },
  mounted(){
    this.$http.get("/api/getData1").then((res) => {
      // console.log(res.data);
      var datas = res.data;
      this.tableDate1 = datas;
    });
  }
};
</script>

<style >
#x1 {
  /* border: 1px solid red; */
  height: 180px;
  margin-bottom: 300px;
}
.imgage{
  width: 380px;
  margin-right: 80px;
  /* margin-top: -350px; */
  float: left;
}
</style>
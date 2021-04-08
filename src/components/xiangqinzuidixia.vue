<template>
  <div>
    <div id="zuidixia">
      <div>
        <span class="ping">|</span>
        <span>写剧评</span>
        <div class="xieju">
          <div class="block">
              <span class="demonstration" style="float:left ">打个分吧！</span>
              <span style="float:left">
                <el-rate v-model="value1"></el-rate>
              </span>
              <span class="value">{{ value1}}</span>
              <input type="text" placeholder="写个评价吧10-100字" ref="txt" v-model="pinglun" />
            </div>
          <div>
            <input type="text" placeholder="写个评价吧" v-model="pinglun">
          </div>
          <p>
            <input type="button" value="发布" style="margin-left:100px" @click="fabu1" class="fabu">
          </p>
          <ul class="lis">
            <li v-for="(item, index) in suibian" :key="index" class="sbian">
              <div class="leftimg">
                <img :src="item.imgurl" width="50px" height="50px" alt="">
                <span class="num">{{ index+1 }}</span>
              </div>
              <div class="pinglun">
                <p>{{ item.name }}</p>
                <el-rate
                v-model="item.txt"
                disabled
                show-score=""
                text-color="#ff9900"
                score-template="{value}"
                style="float:left; width:150px"
                ></el-rate>
                <span style="float:left; height:20px">{{ item.date }}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1:null,
      pinglun:"",
      L:[],
      write:[],
      suibian:[]
    };
  },
  methods: {
    fabu1(){
      var num = Math.floor(Math.random()*4)
      this.L = {
        imgurl:11[num],
        date:this.suibian[0].time,
        txt:this.value1,
        name:this.pinglun,
      }
      this.suibian.push(this.L)
      // this.$refs.txt.value="";
    },
    fn:function(){
      var num = Math.floor(Math.random()*5);
      return num;
    }
  },
  watch: {
    inputdata(value) {
      console.log(value);
    },
    },
    mounted() {
      this.$http.get("/api/getwrite").then((res) =>{
        this.suibian = res.data;

      })
    },
  
};
</script> 

<style scoped>
#zuidixia {
  width: 70%;
  height: 500px;
  /* border: 1px solid fuchsia; */
}
.ping {
  color: red;
  margin-left: 20px;
}
.xieju {
  /* border: 1px dashed gray; */
  width: 900px;
  margin-left: 70px;
}
.fabu{
  margin-top: 30px;
  font-size: 20px;
}
.lis{
  width: 100%;
  height:800px;
  /* border: 1px red solid; */
}
.sbian{
  width: 70%;
  height: 100px;
  /* border: 1px solid red; */
}
</style>
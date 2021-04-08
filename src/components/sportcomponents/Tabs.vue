<template>
  <div class="Tabs">
    <el-tabs  v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="音乐会专区" name="first">

          <div>
              <ul>
                  <li class="Music-img"  v-for="index in imgSrc " :key="index.imgSrc">
                       <img  :src="index.imgSrc" alt="">
                       <div  class="Music-title">
                         <p >
                         {{index.name}}
                       </p>
                       <p>
                         {{index.city}}
                       </p>
                        <p>
                         {{index.Time}}
                       </p>
                       </div>
                  </li>
              </ul>
          </div>
      </el-tab-pane>
      <el-tab-pane label="舞蹈专区" name="second">
        <div>
              <ul>
                  <li class="Music-img"  v-for="index in imgSrc " :key="index.imgSrc">
                       <img  :src="index.imgSrc" alt="">
                       <div  class="Music-title">
                         <p>
                         {{index.name}}
                       </p>
                       <p>
                         {{index.city}}
                       </p>
                        <p>
                         {{index.Time}}
                       </p>
                       </div>
                  </li>
              </ul>
                
      </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
      data() {
      return {
        imgSrc:[],
        activeName: 'first'
      };
    },
      methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
    },
     mounted() {
    this.$http.get("/api/sport/Tabs").then((res) => {
      var datas = res.data;
      this.imgSrc = datas;
    });
  },
};
</script>

<style scoped>
.Music-img{
    /* border: 1px red solid; */
    height:100px;
    margin-left:60px;
    
    display: inline-block;
}
.Music-title{
    font-size: 14px;
    padding:15px;
    float:right;
}
</style>
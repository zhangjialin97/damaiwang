<!--子组件猜你喜欢-->
<template>
    <div class="like">
            <div class="Lrike">
              <div class="box1">
              <h1>猜你喜欢</h1>
              <img src="../../../public/img/base/ribbon-totem.png" alt="" />
            </div>
                <div>
                    <slot name="like-img"></slot>
                   <div>
                      <p class="sporttitle"  v-for="index in Like" :key="index.RMB">
                        <span class="RMB">
                        <p>{{index.name}}</p>售价
                        </span>
                        {{ index.RMB | addPriceIcon }}
                        <span class="RMB">起</span>
                      </p>
                   </div>
                </div>
          </div>
    </div>
</template>

<script>
import'../../../src/assets/css/Like.css'
//导入图片

export default {
  data() {
    return {
      Like: [],
    };
  },
  //调用Mock中Like接口
  mounted() {
    this.$http.get("/api/sport/Like").then((res) => {
      // console.log(res.data);
      var datas = res.data;
      this.Like = datas;
    });
  },
  filters: {
    //处理函数
    addPriceIcon(value) {
      // console.log(value)//200
      return "¥" + value;
    },
  },
};
</script>
<style scoped>
</style>
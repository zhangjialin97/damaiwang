<template>
  <div class="banner">
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in banners" :key="index">
          <span>
            <img
              :src="item"
              :class="{ bingxue: index == 3 && mark == 'mark' }"
            />
          </span>
        </div>
      </div>
      <div class="swiper-pagination"></div>
      <!-- 如果需要导航按钮 -->
      <!-- <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div> -->
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";

// import style (<= Swiper 5.x)
import "../../node_modules/swiper/css/swiper.min.css";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
  props: ["mark"],
  data() {
    return {
      swiperOption: {
        autoplay: true,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
        },
        // 导航按钮
        // navigation: {
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev",
        // },
      },
      banners: [],
    };
  },
  mounted() {
    this.$http("/api/banner").then((res) => {
      this.banners = res.data;
    });
  },
};
</script>
<style scoped>
.swiper-slide img {
  width: 100%;
  height: 433px;
}
.swiper-slide .bingxue {
  width: 1188px;
  float: right;
}
</style>
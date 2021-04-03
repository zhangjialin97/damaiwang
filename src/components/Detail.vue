<template>
  <div class="detail">
    <router-link :to="{name:'Seatend', params:{data: this.detailData}}">
      <button class="btn">
        点击跳转选座页面
      </button>
    </router-link>

  </div>
</template>

<script>
export default {
  data() {
    return {
      detailData: {
        scheduleId: 12,
        cinemaId: 13,
        seatPriceList: [
          { areaLevelName: "A", price: 90 },
          { areaLevelName: "B", price: 100 },
          { areaLevelName: "C", price: 120 }
        ],
        seatInfoList: [
          {
            id: "12_12",
            x: 1,
            y: 6,
            areaLevel: "A",
            cinemaId: "12",
            sort: "16",
            status: 1
          },
          {
            id: "12_2",
            x: 1,
            y: 7,
            areaLevel: "A",
            cinemaId: "12",
            sort: "16",
            status: 1
          },
          {
            id: "12_2",
            x: 2,
            y: 6,
            areaLevel: "A",
            cinemaId: "12",
            sort: "16",
            status: 1
          }
        ]
      }
    };
  },
  components: {}
};
</script>

<style scoped>
.btn {
  padding: 15px 25px;
  border: none;
  background: #5dd;
  font-size: 16px;
  margin-top: 15px;
  border-radius: 10px;
}
</style>

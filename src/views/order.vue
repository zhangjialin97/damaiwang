<template>
  <div class="order">
    <div class="orderNav">
      <heardersVue />
    </div>
    <div>
      <orderDataVue :info="info" />
    </div>
  </div>
</template>
<script>
import orderDataVue from "../components/orderData.vue";
// import orderNav from '../components/orderNav'
import heardersVue from "../components/header_nav";
export default {
  components: {
    orderDataVue,
    heardersVue,
  },
  data() {
    return {
      info: this.$route.params.info,
    };
  },
  mounted() {},
};
</script>
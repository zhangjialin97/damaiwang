<template>
  <div class="saoma">
    <div class="header">
      <orderNavVue />
    </div>
    <div class="layoutWidth">
      <div class="erweima fl">
        <p>订单将在2小时后关闭请及时付款</p>
        <vue-qr
          :text="downloadData.url"
          :margin="0"
          colorDark="#f67b29"
          colorLight="#fff"
          :logoSrc="downloadData.icon + '?cache'"
          :logoScale="0.3"
          :size="200"
        ></vue-qr>
        <p>请使用微信扫一扫完成支付</p>
      </div>
      <div class="fl dingdanxinxi">
        <p>大麦网订单</p>
        <p>支付订单号: {{ info.dingdan }}</p>
        <p>商品名称: {{ info.names }}</p>
        <p>
          订单金额 : <span>{{ info.zonge }}</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import orderNavVue from "../components/header_nav";
import vueQr from "vue-qr";
export default {
  components: {
    orderNavVue,
    vueQr,
  },
  data() {
    return {
      downloadData: {
        url: "http://www.grysw.com",
        icon: "/img/base/saoma.jpg",
      },
      info: this.$route.params.info,
    };
  },
  mounted() {},
};
</script>
<style scoped>
.saoma {
  height: 100%;
  background: rgb(245, 245, 245);
}
.layoutWidth {
  margin: 40px auto 320px;
  height: 500px;
  padding: 100px 150px;
  box-sizing: border-box;
  background: #fff;
}
.layoutWidth .erweima {
  width: 400px;
}
.layoutWidth .erweima > p {
  width: 200px;
  text-align: center;
}
.layoutWidth .erweima > p:first-child {
  font-size: 14px;
  margin-bottom: 20px;
}
.layoutWidth .erweima > p:last-child {
  margin-top: 20px;
}
.layoutWidth .dingdanxinxi p {
  font-size: 14px;
  line-height: 50px;
}
.layoutWidth .dingdanxinxi p span {
  font-size: 18px;
  color: red;
}
</style>
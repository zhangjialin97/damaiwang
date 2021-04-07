<template>
  <div class="home">
    <el-row :gutter="20">
      <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="18">
        <div class="grid-content bg-purple layoutwidth">
          <!-- 支付订单确认 -->
          <div class="Payaff">
            <div class="orderPay">
              <orderPayVue names="pay" />
            </div>
            <div class="info">
              <el-table :data="tableData" border style="width: 100%">
                <el-table-column prop="num" label="订单编号" width="280">
                </el-table-column>
                <el-table-column prop="name" label="商品名称" width="320">
                </el-table-column>
                <el-table-column prop="price" label="支付金额">
                </el-table-column>
                <el-table-column prop="payable" label="应付金额">
                </el-table-column>
              </el-table>
            </div>
            <div class="gopay">
              <p class="sum">
                应付金额 <span>{{ money }}</span> 元
              </p>
              <p class="bom">以下支付平台都支持大多数银行卡</p>
              <p class="zhifu">
                <el-checkbox v-model="checked"></el-checkbox>
                <el-checkbox v-model="checked1"></el-checkbox>
              </p>
              <p>
                <el-button type="danger" @click="gopay"
                  >确认无误,支付</el-button
                >
              </p>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
  </div>
</template>
<script>
import orderPayVue from "./orderPay.vue";

export default {
  props: ["payinfo"],
  components: {
    orderPayVue,
  },
  data() {
    return {
      tableData: [],
      dingdan: 0,
      money: 0,
      checked: false,
      checked1: false,
    };
  },
  mounted() {
    this.$http.get("/api/pay/dingdan").then((res) => {
      this.dingdan = res.data;
    });
    var _this = this;
    setTimeout(function () {
      for (let i = 1; i < _this.payinfo.length; i++) {
        _this.tableData.push({
          num: _this.dingdan,
          name: _this.payinfo[i - 1],
          price: _this.payinfo[i],
          payable: _this.payinfo[i],
        });
        _this.money += _this.payinfo[i];
      }
    }, 200);
  },
  methods: {
    gopay() {
      this.$router.push({
        name: "payma",
        params: {
          info: {
            zonge: this.money,
            names: this.payinfo[0],
            dingdan: this.dingdan,
          },
        },
      });
    },
  },
};
</script>
<style scoped>
.grid-content {
  min-height: 36px;
}
.Payaff {
  padding: 30px 20px;
}
.info,
.gopay {
  padding: 20px 15px;
}
.gopay p {
  line-height: 24px;
}
.gopay .sum span {
  color: red;
}
.gopay .bom {
  font-size: 14px;
}
</style>
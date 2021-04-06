<template>
  <div class="aff">
    <div class="orderPay">
      <orderPayVue names="orderPay"/>
    </div>
    <div class="autonym">
      <el-tabs v-model="activeName">
        <el-tab-pane label="实名证件信息" name="autonym">
          购票人 : <el-button @click="show = !show">选择购票人</el-button>
          <div class="autonymcertificate">
            <div class="messageBox" v-show="show">
              <el-button type="text" @click="dialogFormVisible = true"
                >添加购票人</el-button
              >
              <div class="dialog">
                <el-dialog title="姓名" :visible.sync="dialogFormVisible">
                  <el-form :model="form">
                    <el-form-item label="姓名" :label-width="formLabelWidth">
                      <el-input
                        v-model="form.names"
                        autocomplete="off"
                      ></el-input>
                    </el-form-item>
                    <el-form-item label="性别" :label-width="formLabelWidth">
                      <el-input
                        v-model="form.sex"
                        autocomplete="off"
                      ></el-input>
                    </el-form-item>
                    <el-form-item
                      label="证件类型"
                      :label-width="formLabelWidth"
                    >
                      <el-select v-model="region" placeholder="请选择证件类型">
                        <el-option label="身份证" value="身份证"></el-option>
                        <el-option label="军人证" value="军人证"></el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item :label="region" :label-width="formLabelWidth">
                      <el-input
                        v-model="form.identity"
                        autocomplete="off"
                      ></el-input>
                    </el-form-item>
                  </el-form>
                  <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false"
                      >取 消</el-button
                    >
                    <span @click.stop="add" class="confirm">
                      <el-button
                        type="primary"
                        @click="dialogFormVisible = false"
                        >确 定</el-button
                      >
                    </span>
                  </div>
                </el-dialog>
              </div>
            </div>
            <transition name="el-fade-in-linear">
              <div v-show="show" class="transition-box">
                <el-table
                  ref="multipleTable"
                  :data="autonymcertificate"
                  tooltip-effect="dark"
                  style="width: 900px"
                  @select="times"
                >
                  <el-button plain @click="open" v-show='caution'></el-button>
                  <el-table-column type="selection" width="55">
                  </el-table-column>
                  <el-table-column label="姓名" width="120">
                    <template slot-scope="scope">{{
                      scope.row.names
                    }}</template>
                  </el-table-column>
                  <el-table-column prop="sex" label="性别" width="120">
                  </el-table-column>
                  <el-table-column
                    prop="identity"
                    label="身份证"
                    show-overflow-tooltip
                  >
                  </el-table-column>
                </el-table>
              </div>
            </transition>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="payment">
      <el-tabs v-model="activeNames">
        <el-tab-pane label="选择付款方式" name="payment">
          <el-radio v-model="radio" label="payment">网上付款</el-radio>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="commodity">
      <el-tabs v-model="activeNamese">
        <el-tab-pane label="商品清单" name="commodity">
          <el-table :data="merchandise" border style="width: 100%">
            <el-table-column prop="names" label="商品名称" width="180">
            </el-table-column>
            <el-table-column prop="seat" label="座位号" width="180">
            </el-table-column>
            <el-table-column prop="price" label="价格"> </el-table-column>
            <el-table-column prop="num" label="数量"> </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="invoice">
      <el-tabs v-model="activeNamesel">
        <el-tab-pane label="我要开发票" name="invoice">
          <div class="invoiceTab">
            <el-tabs v-model="activeNamesels">
              <el-tab-pane label="公司" name="company">
                <div class="TextField">
                  <p class="companyName">
                    公司抬头 :
                    <el-input
                      v-model="companyName"
                      placeholder="请输入公司抬头"
                    ></el-input>
                  </p>
                  <p class="corporationTax">
                    公司税号 :
                    <el-input
                      v-model="corporationTax"
                      placeholder="请输入公司税号"
                    ></el-input>
                  </p>
                </div>
              </el-tab-pane>
              <el-tab-pane label="个人" name="personage">
                <div class="TextField">
                  <p class="personageName">
                    个人抬头 :
                    <el-input
                      v-model="personageName"
                      placeholder="请输入个人抬头"
                    ></el-input>
                  </p>
                  <p class="personageTax corporationTax">
                    个人税号 :
                    <el-input
                      v-model="personageTax"
                      placeholder="请输入个人税号"
                    ></el-input>
                  </p>
                </div>
              </el-tab-pane>
            </el-tabs>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="insurance">
      <div class="insuranceRideo">
        <el-checkbox v-model="checked" @change="fn"
          >购买“安心订票保险”，本单保费金额:20.00元</el-checkbox
        >
        <p>查看保险服务说明和《安心订票保险条款》</p>
        <p>购买保险，请填写真实姓名</p>
        <p>
          商品金额 : <span>{{ merchandise | rental("￥") }}</span>
        </p>
        <p v-if="checked">
          商品保险 : <span>+ {{ fn() }}.00</span>
        </p>
      </div>
    </div>
    <div class="topay">
      <div class="topayinfo">
        <p>
          待支付总额 : <span>{{ fn1(merchandise) }}</span>
        </p>
        <el-checkbox v-model="checked2" @change="ends"
          >我已阅读并同彦《订购服务条款》《退换货约定》《退款约定》</el-checkbox
        >
        <p>同意"票品为不记名凭证，请您妥善保管，选失不补</p>
        <p>
          <el-button type="danger" :disabled="disabled" @click="tijiao"
            >同意以上协议并提交订单</el-button
          >
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import orderPayVue from './orderPay.vue';

export default {
  props: ["txt",'shuju'],
  components:{
    orderPayVue
  },
  data() {
    return {
      //选择付款 默认选中得name
      radio: "payment",
      //商品清单信息
      merchandise: [],
      // shuju:[],
      autonymcertificate: [
        {
          names: "段誉",
          sex: "男",
          identity: 14032119980251615155,
        },
        {
          names: "段誉",
          sex: "男",
          identity: 14032119980251615155,
        },
        {
          names: "段誉",
          sex: "男",
          identity: 14032119980251615155,
        },
        {
          names: "段誉",
          sex: "男",
          identity: 14032119980251615155,
        },
      ],
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        names: "",
        sex: "",
        identity: "",
      },
      region: "",
      formLabelWidth: "120px",
      activeName: "autonym",
      activeNames: "payment",
      radio: "payment",
      personageName: "",
      personageTax: "",
      activeNamese: "commodity",
      activeNamesel: "invoice",
      activeNamesels: "company",
      companyName: "",
      corporationTax: "",
      checked: true,
      insurance: 0,
      checked2: false,
      show: false,
      // 浏览器侧边警示按钮隐藏
      caution:false,
      num:[],
      numLength:0,
      disabled:true,
      paymoney:0
    };
  },
  methods: {
    fn() {
      if (this.checked) {
        this.insurance = 20;
        return this.insurance;
      }
      this.insurance = 0;
      return this.insurance + "0";
    },
    fn1(moey) {
      var num = 0;
      for (let d = 0; d < moey.length; d++) {
        num += moey[d].price;
      }
      this.paymoney = (num + this.insurance);
      return "￥" + (num + this.insurance);
    },
    
    add() {
      // if()
      this.autonymcertificate.push(this.form);
      var _this = this;
      setTimeout(function(){
        _this.form.names = '';
        _this.form.sex = '';
        _this.from.identity = '';
        _this.region = ''
      },1000)
      
    },
    //给购票人数添加事件
    times(selection, row){
      //选中时查看选中得这行在selected中得下标是不是-1
      let selected = selection.indexOf(row) !== -1; //为true时选中，为 0 时（false）未选中
      if(selected){
        this.num.push(row);
        this.numLength = this.num.length;
      }else{
        var length = this.num.indexOf(row);
        this.num.splice(length,1);
        this.numLength = this.num.length;
      }
      
      if(this.checked2){
        //判断复选框是否选中
        //判断购票人数有没有选中并且低于限制人数
        if(this.numLength>0 && this.num.length<3){
          this.disabled = false;
        }else{
          this.disabled = true
        }
      }
      this.disabled = true
      this.checked2 = false
    },
    open() {
      // 判断购票人数小于3得时候不触发该事件
      if(this.numLength<3){
        return false
      }else{
        const h = this.$createElement;
        this.$notify({
        title: "购票人数超过限制",
        message: h(
          "span",
          { style: "color: red" },
          "请重新选择购票人数"
        ),
      });
      }
    },
    ends() {
      //当点击复选框返回值是true时在判断有没有选择购票人
      if (this.checked2) {
        if(this.numLength>=1 && this.numLength<=2){
          this.disabled = false;
          //再次判断是否是没有选中购票人并将勾选状态改回默认
        }else if(this.numLength==0){
          alert('请选择购票人！')
          this.checked2 = false
          //再次判断如果超过人数限制再次点击勾选再次返回默认状态并调用open提示
        }else{
          this.checked2 = false
          this.open()
        }
      }else{
          this.disabled = true;
      }
    },
    //提交去支付页
    tijiao(){
        // var arr = [fn1(merchandise),this.shuju[0].names];
        this.$router.push({name:'pay',params:{info:[this.shuju[0].names,this.paymoney]}});
    }
  },
  mounted() {
    for(var ui = 0;ui < this.shuju.length;ui++){
        this.merchandise.push({names:this.shuju[ui].names,seat:this.shuju[ui].xx + '排' + this.shuju[ui].yy + '座',price:this.shuju[ui].pirce,num:this.shuju[ui].num});
    }
  },
  computed:{
    
  },
  //单个监听numLength当numLength得值只要发生变化时就会调用open方法
  watch:{
    'numLength'(){
      this.open()
    },
  },
  filters: {
    rental(money, i) {
      var num = 0;
      for (let i = 0; i < money.length; i++) {
        num += money[i].price;
      }
      return i + num;
    },
  },
};
</script>
<style scoped>
.payment,
.commodity,
.invoice,
.insurance,
.topay,
.insurance .insuranceRideo {
  margin-top: 30px;
}
.aff .invoice .invoiceTab .TextField {
  font-size: 14px;
}
.aff .invoice .invoiceTab .TextField .corporationTax {
  margin-top: 15px;
}
.aff .insurance,
.aff .topay {
  content: "";
  display: block;
  clear: both;
}
.aff .insurance {
  border-top: 2px rgb(228, 231, 237) solid;
}
.aff .topay {
  border-top: 2px rgb(228, 231, 237) dashed;
}
.aff .insurance .insuranceRideo,
.aff .topay .topayinfo {
  float: right;
  text-align: right;
  font-size: 14px;

  line-height: 24px;
}
.aff .insurance .insuranceRideo p:last-child {
  margin-bottom: 25px;
}
.aff .topay .topayinfo {
  margin-top: 30px;
}
.aff .topay .topayinfo p:last-child {
  margin-bottom: 25px;
}
.aff .insurance .insuranceRideo p span,
.aff .topay .topayinfo p span {
  color: red;
}
.aff .autonym .autonymcertificate {
  width: 900px;
}
.aff .autonym .autonymcertificate .messageBox {
  float: right;
}
.confirm {
  margin-left: 15px;
}
</style>
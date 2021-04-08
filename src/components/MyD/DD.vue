<template>
  <div class="DD" v-title data-title="我的大麦-订单管理">
    <div class="DD-title">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/Home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/DD">我的大麦</a></el-breadcrumb-item>
        <el-breadcrumb-item>交易中心</el-breadcrumb-item>
        <el-breadcrumb-item>订单管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="DD-tr">
      <h4>近期订单处理</h4>
    </div>
    <div class="DD-td">
      <ul>
        <li>
          <el-select v-model="value" clearable placeholder="全部">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </li>
        <li>
          <el-select v-model="value" clearable placeholder="全部订单">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </li>
        <li class="li-ipt">
           <el-input  v-model="input" placeholder="请输入内容"></el-input>
        </li>
        <li>
          <el-button  plain>搜索</el-button>
        </li>
      </ul>
      <!--二-->
      <div class="DD-tt">
         <el-table
    :data="options"
    border
    style="width: 100%">
    <el-table-column
      prop="DD"
      label="订单编号"
      width="180">
    </el-table-column>
    <el-table-column
      prop="TIME"
      label="购买时间"
      width="180">
    </el-table-column>
        <el-table-column
      prop="name"
      label="商品名称"
      width="180">
    </el-table-column>
    <el-table-column
      prop="DJ"
      label="数量">
    </el-table-column>
    <el-table-column
      prop="RMB"
      label="单价">
    </el-table-column>
    <el-table-column
      prop="DL"
      label="订单金额">
    </el-table-column>
    <el-table-column
      prop="Gy"
      label="交易状态">
    </el-table-column>
    <el-table-column
      prop="address"
      label="操作">
    </el-table-column>
  </el-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
       input: '',
      options: [],
      value: "",
    };
  },
   mounted() {
    this.$http.get("/api/MyD/DD").then((res) => {
      var datas = res.data;
      this.options = datas;
    });
  },

};
</script>

<style scoped>
.DD {
  width:1028px;
  margin-left: 20px;
}
.DD-tr {
  border-bottom: 1px #dddd solid;
  width: 100%;
  height: 50px;
}
h4 {
  position: absolute;
  bottom: 164px;
  border-bottom: 1px solid #ff5c41;
  color: #ff5c41;
}
ul li{
  display: inline-block;
  
}
.li-ipt{
  padding-left:215px;
  width:300px;
}
.DD-tt{
  margin-top:10px;
}

</style>
<template>
  <div>
    <el-row :gutter="20">
    <div class="MyD-heard">
        <header_navVue></header_navVue>
    </div>
      <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="18">
        <div class="grid-content bg-purple">
          <div class="MyD">
            <div class="MyD-title">
                  我的大麦
            </div>
            <el-menu
              :default-active='this.$route.path'
              router
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
            >
              <el-submenu index="DD">
                <template slot="title">
                  <span>交易中心</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="/DD">订单管理</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
               <el-submenu index="Dr">
                <template slot="title">
                  <span>账户中心</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="/Dr">个人信息</el-menu-item>
                  <el-menu-item index="/User">常用购票人</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </el-menu>
          </div>
          <div class="MyD-router">
            <router-view />
          </div>
        </div>
      </el-col>
      <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
  </div>
</template>
<script>
import header_navVue from '../components/header_nav.vue';

export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  components:{
    header_navVue
  }
};
</script>

<style scoped>
.MyD {
  width:15%;
  float: left;
}
.MyD-heard{
  border-bottom:2px red solid ;
  margin-bottom:20px;
}
.MyD-title{
  border: 1px red solid;
  height:50px;
  line-height:45px;
  /* margin: 0 auto; */
  padding-left:20px;
  font-size: 15px;
  background: #ff5c41;
  color: #fff;
}
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #fff;
}
.bg-purple {
  height: 500px;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.MyD-router {
  float: left;
}
.el-menu-item.is-active{
  color: #ff5c41;
  border-right:2px #ff5c41 solid;
}
</style>
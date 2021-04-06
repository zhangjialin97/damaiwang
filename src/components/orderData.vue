<template>
  <div class="home">
    <el-row :gutter="20">
      <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="18">
        <div class="grid-content bg-purple layoutwidth">
            <!-- 支付订单确认 -->
            <div class="Payaff">
              <div class="orderPay">
                <orderPayAffVue :shuju='info'/>
              </div>
              
            </div>
            
        </div>
      </el-col>
      <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
  </div>
</template>
<script>
import orderPayAffVue from './orderPayAff.vue'

export default {
    props:['info'],
    components:{
        orderPayAffVue
    }
}
</script>
<style scoped>
.grid-content {
  min-height: 36px;
}
.Payaff {
  padding: 0 30px
}
</style>
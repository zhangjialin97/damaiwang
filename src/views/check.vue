<template>
    <div class="check">
        <!-- 选座顶部头部 -->
        <div class="header">
            <headerNavVue />
        </div>
        <!-- 选座页主信息 -->
        <div class="checkData">
            <checkDataVue />
        </div>
    </div>
</template>
<script>
//引入选座页主内容
import checkDataVue from '../components/checkData.vue'
// 引入选座头部组件
import headerNavVue from '../components/header_nav.vue'

export default {
    components:{
        headerNavVue,
        checkDataVue
    },
}
</script>
<style scoped>
.checkData {
    margin-top: 50px;
}
</style>
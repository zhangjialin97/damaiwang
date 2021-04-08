<template>
    <div class="box">
        <el-row :gutter="20">
            <el-col :span="3">
                <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :span="18">
                <div class="grid-content bg-purple">

                    <!-- 轮播 -->
                    <bannerVue :banners="imgarrs"></bannerVue>
                   

                    <!-- 第一部分 -->
                    <san-vue></san-vue>
                    
                    <tabs style="margin-top:30px;"></tabs>

                    <!-- 日历 -->
                    <menologyVue />

                    <!-- 底部第一部分 -->
                    <bottomVue />

                    <!-- 底部第二部分 -->
                    <setBottomVue />
                </div>
            </el-col>
            <el-col :span="3">
                <div class="grid-content bg-purple"></div>
            </el-col>
        </el-row>
       
    </div>
</template>
<script>
import sanVue from "../components/san.vue";
import bannerVue from "../components/banner.vue";
import tabs from './Dance version.vue';
import menologyVue from '../components/menology.vue';
import bottomVue from '../components/bottom.vue';
import setBottomVue from '../components/setBottom.vue';

export default {
    name: "box",
    data() {
        return {
            imgarrs: [
                "/img/base/pic1.jpg",
                "/img/base/pic2.jpg",
                "/img/base/pic3.jpg"
            ]
        };
    },
    components: {
        sanVue,
        bannerVue,
        tabs,
        menologyVue,
        bottomVue,
        setBottomVue
    }
};
</script>
<style scoped>
.el-row {
    margin-bottom: 20px;
}
.el-col {
    border-radius: 4px;
}
.bg-purple-dark {
    background: #99a9bf;
}
.bg-purple {
    background: #d3dce6;
}
.bg-purple-light {
    background: #e5e9f2;
}
.grid-content {
    background: #f9fafc;
    /* margin: 0 auto; */
    border-radius: 4px;
    min-height: 36px;
}
.row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
}
</style>
<template>
    <div>
        <!-- 第一部分 -->
        <div class="div">
            <p>猜你喜欢</p>
            <img src="../../public/img/base/ribbon-totem.png" alt="" class="imgq">
        </div>
        <!-- 通过阿秀克斯链接mock端口号 并放在空数组中 然后循环遍历 -->
        <ul>
            <li v-for="(item,index) in mes" :key="index">
                <img :src="item.imgSrc" alt="">
                <p class="characters">{{ item.name }}</p>
                <p class="qian">{{ item.price | myFn('￥') }}</p>
            </li>
        </ul>
        <!-- 第二部分  -->
        <div class="home">
            <div class="div">
                <p>精彩剧集</p>
                <img src="../../public/img/base/ribbon-totem.png" alt="" class="imgq">
            </div>
            <rabbet-vue class="slotS">
                <img :src="myAct" slot="activeImg">
            </rabbet-vue>
            <rabbet-vue class="leat">
                <img :src="homeNor" slot="norImg" class="photograph">
                <img :src="shuNor" slot="norImg" class="photograph">
                <img :src="guangNor" slot="norImg" class="photograph">
                <img :src="xiaoAct" slot="norImg" class="photograph">
                <img :src="shuAct" slot="norImg" class="photograph">
                <img :src="xiaoNor" slot="norImg" class="photograph">
            </rabbet-vue>
            <rabbet-vue class="slotS">
                <img :src="homeNor" slot="norImg">
            </rabbet-vue>
        </div>
        <div class="prints">
            <img src="../../public/img/qinzi/img_16.png" alt="">
            <img src="../../public/img/qinzi/img_17.png" alt="">
            <img src="../../public/img/qinzi/img_18.png" alt="">
        </div>

        <!-- <rock-vue></rock-vue> -->
    </div>

</template>
<script>
import danceVue from "../views/dance.vue";
// import rockVue from "../views/rock.vue";
import img1 from "../../public/img/base/cardimg5.jpg";
import img2 from "../../public/img/base/cardimg2.jpg";
import img3 from "../../public/img/base/cardimg4.jpg";
import img4 from "../../public/img/base/cardimg2.jpg";
import img5 from "../../public/img/base/big1.jpg";
import img6 from "../../public/img/base/cardimg4.jpg";
import img7 from "../../public/img/base/big1.jpg";
import img8 from "../../public/img/base/cardimg5.jpg";
import rabbetVue from "./rabbet.vue";
export default {
    data() {
        return {
            // 第一部分
            mes: [],
            // 第二部分
            myAct: img1,
            homeNor: img2,
            shuAct: img3,
            shuNor: img4,
            guangAct: img5,
            guangNor: img6,
            xiaoAct: img7,
            xiaoNor: img8
        };
    },
    mounted() {
        this.load();
    },
    methods: {
        // mock数据s仿本地文件图片的端口号
        load() {
            this.$http.get("/api/getData").then(res => {
                this.mes = res.data;
                console.log(this.mes);
            });
        }
    },
    filters: {
        myFn: function(abc, a1) {
            return a1 + abc;
        }
    },
    components: {
        rabbetVue,
        // rockVue 
    }
};
</script>
<style scoped>
.home {
    height: 660px;
}
.prints {
    height: 100px;
}
.prints img {
    width: 280px;
    height: 100px;
    padding: 10px;
    /* height: 50px; */
}
.photograph {
    width: 100px;
    height: 100px;
    /* border: 1px sienna solid; */
}
.shou1 {
    /* border: 4px seagreen solid; */
    width: 320px;
    height: 370px;
    display: inline-block;
    /* float: left; */
}
.slotS {
    width: 220px;
    float: left;
}
.slotS img {
    /* border: 1px seagreen solid; */
    height: 380px;
    width: 220px;
}
.leat {
    /* border: 1px sienna solid; */
    height: 380px;
    width: 420px;
    float: left;
}
.leat img {
    padding: 5px;
    width: 130px;
    height: 170px;
}
.guangAct1 {
    border: 2px sienna solid;
    width: 310px;
    height: 470px;
    float: left;
}
.characters {
    font-size: 12px;
    text-align: center;
}
.xiaoAct {
    width: 100px;
    height: 130px;
}
.guangAct {
    border: 1px salmon solid;
    width: 300px;
    height: 400px;
    float: left;
}
.qian {
    text-align: center;
}
.div {
    width: 100px;
    margin: 0 auto;
}
.imgq {
    text-align: center;
    width: 300px;
    height: 20px;
    margin-left: -100px;
}
ul li {
    float: left;
}
ul li img {
    width: 115px;
    height: 145px;
    padding: 19px;
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
    border-radius: 4px;
    min-height: 36px;
}
.row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
}
</style>


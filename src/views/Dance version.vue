
<template>
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <!-- tab切换 -->
        <el-tab-pane label="音乐会专区" name="first">
            <ul>
                <li v-for="(items,index) in mea" :key="index">
                    <img :src="items.tupian" class="photograph">
                    <p class="aaa">{{ items.name }}</p>
                    <p>{{ items.date }}</p>
                    <p>{{items.wenzi}}</p>
                    <p>{{ items.price | myFn('￥') }}</p>
                </li>
            </ul>
        </el-tab-pane>
        <el-tab-pane label="舞蹈专区" name="second">
            <ul>
                <li v-for="(items,index) in mea" :key="index">
                    <img :src="items.tupian" class="photograph">
                    <p class="qqq">{{ items.name }}</p>
                    <p>{{ items.date }}</p>
                    <p>{{items.wenzi}}</p>
                    <p class="qqq">{{ items.price | myFn('￥') }}</p>
                </li>
            </ul>
        </el-tab-pane>
        <!-- 第4部分 -->
        <div class="div">
            <p>热门排行</p>
            <img src="../../public/img/base/ribbon-totem.png" alt="" class="imgq">
        </div>
        <div >
            <div class="one">
                <img src="../../public/img/base/cardimg3.jpg" alt="" width="180px" height="300px">
            </div>
            <ul>
                <li v-for="(item,index) in abc" :key="index">
                    <img :src="item.tupian" class="picture ">
                    <div class="language">
                        <p>{{ item.name }}</p>
                        <p>{{ item.date }}</p>
                        <p>{{item.wenzi}}</p>
                        <p>{{ item.price | myFn('￥') }}</p>
                    </div>
                </li>
            </ul>
        </div>
    </el-tabs>

</template> 
  
<script>
export default {
    data() {
        return {
            // 第一部分
            mea: [],
            abc: [],
            // tab切换默认选中第一个
            activeName: "first"
        };
    },
    mounted() {
        this.load();
        this.loads();
    },
    methods: {
        // mock数据s仿本地文件图片的端口号
        load() {
            this.$http.get("/api/getDataS").then(res => {
                this.mea = res.data;
                // console.log(this.mes);
            });
        },
        loads() {
            this.$http.get("/api/gotData").then(res => {
                this.abc = res.data;
                // console.log(this.abc);
            });
        },
        handleClick(tab, event) {
            console.log(tab, event);
        }
    },
    filters: {
        myFn: function(abc, a1) {
            return a1 + abc;
        }
    }
};
</script> 
<style scoped>
.one {
    float: left;
}
.language {
    /* border: 1px seagreen solid; */
    height: 140px;
    width: 120px;
    float: left;
    font-size: 10px;
    margin:3px;
}
.language p {
    padding: 3px;
}
.picture {
    /* border: 1px sienna solid; */
    width: 110px;
    height: 140px;
    float: left;
     margin:4px;
}
ul li {
    list-style-type: none;
    float: left;
}
.imgq {
    text-align: center;
    width: 300px;
    height: 20px;
    margin-left: -100px;
}
.div {
    width: 100px;
    margin: 0 auto;
}
.qqq {
    color: red;
}
</style>

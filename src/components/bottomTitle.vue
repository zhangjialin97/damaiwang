<template>
  <div class="bottomTitle">
    <ul>
      <li v-for="(item, index) in lis" :key="index" class="fl lis">
        {{ item }}
      </li>
    </ul>
    <div class="foottxt fl">
      <p>{{ p1 }}</p>
      <p>{{ p2 }}</p>
      <p>{{ p3 }}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      lis: [
        "公司介绍",
        "|",
        "品牌识别",
        "|",
        "企业荣誉",
        "|",
        "隐私声明",
        "|",
        "联系及合作",
        "|",
        "招聘信息",
        "|",
        "网站地图",
        "|",
        "友情链接",
        "|",
        "公司大事记",
      ],
      p1:
        "京ICP证O31086号|京ICP备1013248号|京公安网11032040599500349号|广播电视节目制作经营许可证(京）字第032256号",
      p2:
        "网络文化经营许可证京网文[2018]3243-534号│营业性演出许可证京市演出888号",
      p3: "北京阿博文化有限公司大麦网Copyright 2008-2018 All Right Reserved",
    };
  },
};
</script>
<style scoped>
.bottomTitle {
  margin-bottom: 50px;
  margin: 0 auto;
  width: 50%;
  height: 200px;
  font-size: 14px;
}
.lis {
  padding: 8px;
}
.foottxt {
  margin-top: 30px;
  width: 100%;
  text-align: center;
  line-height: 30px;
}
.foottxt p {
  color: gray;
}
</style>
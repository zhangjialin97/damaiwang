<template>
  <div>
    <div id="jieshao">
      <div class="xiangmu">
        <p>
          <span>|</span>
          项目介绍
        </p>
        <div class="xiexian"></div>
        <div>
          <h3>英文站入口</h3>
        </div>
        <div>
          <p class="lianjian">
            英文站购买链接: https:/len.dami.cn/event/tickets_135693/
          </p>
        </div>
        <div>
          <h3>演出介绍</h3>
        </div>
        <div>
          <p class="shijian">
            世界经典原版音乐剧《3苗》猫的足迹
            超过2D种语言，3D个国家，300座城市，7300万观众超过20种语言，30个国家，300座城市，7300万观众超过20种语言，30个国家，300座城市，730D万观众超过2D种语言，30个国家，30O座城市，7300万观众超过20种语言，30个国家，30D座城市，730D万观众超过2D种语言，30个国家，300座城市，7300万观众超过20种语言，30个国家，300座城市，7300万观众
            横扫7座托尼奖，妻获奥利弗奖、格莱美奖等全球主要奖项
            伦敦西区及纽约百老汇有史以来成功、 连续公演最久的音乐剧之一
          </p>
        </div>
        <div>
            <img src="../../public/img/base/img_01.png" class="png">
        </div>
        <div class="xiqu">
            <p>
                伦敦西区及纽约百老汇有史以来成功、连续公演最久的音乐剧之一
            </p>
            <p>
                伦敦西区及纽约百老汇有史以来成功、连续公演最久的音乐剧之一
            </p>
            <p>
                伦敦西区及纽约百老汇有史以来成功、连续公演最久的音乐剧之一
            </p>
        </div>
      </div>
    </div>
    <xiangqinzuidixiaVue></xiangqinzuidixiaVue>
  </div>
</template>

<script>
import xiangqinzuidixiaVue from './xiangqinzuidixia.vue';

export default {
  components:{
    xiangqinzuidixiaVue
  }
};
</script>

<style scoped>
#jieshao {
  width: 70%;
  /* border: 1px solid red; */
  height: 800px;
}
.xiangmu span {
  color: red;
  margin-left: 10px;
  padding-top: 30px;
}
.xiexian {
  border: 1px dashed gray;
  width: 400px;
  margin-left: 90px;
}
h3 {
  margin-left: 85px;
  margin-top: 30px;
  color: black;
  width: 800px;
  height: 50px;
  /* border: 1px solid red; */
  background-color: #eeeeee;
  padding-top: 15px;
  padding-left: 10px;
}
.lianjian {
  margin-left: 83px;
  margin-top: 30px;
  color: grey;
}
.shijian{
    margin-left: 80px;
    margin-top: 30px;
    color: grey;
}
.png{
    width: 180px;
    margin-left: 400px;
    margin-top: 30px;
}
.xiqu{
    margin-left: 80px;
}
</style>
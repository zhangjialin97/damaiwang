<template>
  <div id="listqin">
     <div class="dingbu">
      <ul>
        <li>大麦</li>
        <li>北京</li>
        <li><span>电影</span></li>
        <li class="qimen">大型多媒体励志互动儿童剧 《奇门遁甲》 《11月》</li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  components:{
  }
};
</script>

<style scoped>
#listqin {
  width: 100%;
  height: 50px;
  /* border: 1px solid red; */
}
.dingbu li{
    display: inline-block;
    padding-left: 10px;
    margin-top: 10px;
}
li span{
    color: red;
}
.qimen{
    font-size: 10px;
    color: skyblue;
}
</style>
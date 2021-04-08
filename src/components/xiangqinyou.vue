<template>
  <div>
    <div id="damai">
      <h2>大麦网评分:</h2>
      <div>
        <p class="xin">4.6</p>
        <div class="ertyy">
          <el-rate
            v-model="value"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value}"
          >
          </el-rate>
          <div class="xiabiankag"></div>
          <div>
              <h2 class="yanchusj">演出时间</h2>
              <p class="xiadixia">2017-12-23-2017-12-36</p>
          </div>
           <div class="xiabiankag"></div>
           <div class="xiabiankag"></div>
          <div>
              <h2 class="yanchusj">演出场馆</h2>
              <p class="xiadixia">中国儿童中心剧院-海淀</p>
              <p>交通路线</p>
          </div>
           <div class="xiabiankag"></div>
           <div class="xiabiankag"></div>
          <div>
              <h2 class="yanchusj">票品支持</h2>
              <p class="xiadixia">返积分</p>
          </div>
           <div class="xiabiankag"></div>
           <div class="xiabiankag"></div>
          <div>
              <h2 class="yanchusj">实票配送</h2>
              <p class="xiadixia">同城满100元免运费</p>
          </div>
           <div class="xiabiankag"></div>
           <div class="xiabiankag"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 3.7,
    };
  },
};
</script>

<style scoped>
#damai {
  float: right;
  margin-right: 260px;
  font-size: 13px;
  color: grey;
}
.xin {
  color: red;
  font-size: 18px;
  padding-top: 10px;
}
.xiabiankag {
  /* border: 1px dashed gray; */
}
.xiadixia{
    padding-top: 10px;
    color: black;
}
.yanchusj{
    margin-top: 10px;
}
</style>
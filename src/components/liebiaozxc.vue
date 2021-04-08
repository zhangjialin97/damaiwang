<template>
  <div class="grid-content1">
    <div>
      <ul>
        <li class="gong">共<span class="yi">23</span>个商品</li>
        <hr class="hr1" />
      </ul>
      <div>
        <h3 class="chengs">城市:</h3>
        <div class="shanghai">
          <el-radio-group v-model="radio1">
            <el-radio-button label="全部"></el-radio-button>
            <el-radio-button label="北京"></el-radio-button>
            <el-radio-button label="广州"></el-radio-button>
            <el-radio-button label="深圳"></el-radio-button>
            <el-radio-button label="西安"></el-radio-button>
            <el-radio-button label="包头"></el-radio-button>
            <el-radio-button label="河北"></el-radio-button>
            <el-radio-button label="甘肃"></el-radio-button>
          </el-radio-group>
        </div>
      </div>
      <div>
        <h3 class="chengs">分类:</h3>
        <div class="shanghai">
          <el-radio-group v-model="radio2">
            <el-radio-button label="全部"></el-radio-button>
            <el-radio-button label="音乐会"></el-radio-button>
            <el-radio-button label="朗诵"></el-radio-button>
            <el-radio-button label="曲苑杂坛"></el-radio-button>
            <el-radio-button label="独奏"></el-radio-button>
            <el-radio-button label="管轩乐"></el-radio-button>
            <el-radio-button label="声乐及合唱"></el-radio-button>
          </el-radio-group>
        </div>
      </div>
      <div>
        <h3 class="chengs">时间:</h3>
        <div class="shanghai">
          <el-radio-group v-model="radio3">
            <el-radio-button label="全部"></el-radio-button>
            <el-radio-button label="今天"></el-radio-button>
            <el-radio-button label="明天"></el-radio-button>
           <div class="block">
                <span class="demonstration"></span>
                <el-date-picker
                  v-model="value1"
                  type="date"
                  placeholder="选择日期">
                </el-date-picker>
              </div>
              <div class="block">
                <span class="demonstration"></span>
                <el-date-picker
                  v-model="value2"
                  align="right"
                  type="date"
                  placeholder="选择日期"
                  :picker-options="pickerOptions">
                </el-date-picker>
              </div>
          </el-radio-group>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      radio1: "全部",
      radio2: "全部",
      radio3: "全部",
    };
  },
};
</script>

<style scope>
.grid-content1 {
  /* height: 1250px; */
  border-radius: 4px;
  min-height: 36px;
  border: 1px solid grey;
  background-color: #f5f5f5;
  margin-top: 50px;
}
.yi {
  color: red;
}
.gong {
  margin-top: 20px;
  margin-left: 20px;
}
.chengs {
  margin-left: 50px;
  margin-top: 10px;
}
.shanghai {
  margin-left: 130px;
}
.block{
  display: inline-block;
  margin-left: 30px;
}
</style>
<template>
  <div id="xiangdi">
    <xiangqinrmenVue></xiangqinrmenVue>
    <div>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="演出信息" name="first">
          <div class="jiben">
            <p>
              <span>|</span>
              基本信息
            </p>
            <div class="xian"></div>
            <div>
              <el-table :data="tableData" stripe style="width: 100%">
                <el-table-column prop="date" label="演出时间" width="180">
                </el-table-column>
                <el-table-column prop="name" label="姓名" width="180">
                </el-table-column>
                <el-table-column prop="address" label="演出场馆"> </el-table-column>
              </el-table>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="精彩剧评" name="second">
          <div>
            <h3>一、看、记、想、写</h3>
            <p>
              　重庆飞往拉萨3U8366次航班，在飞行过程中遭遇高压气流影响，致使飞机驾驶室前窗外玻璃炸裂，飞机机身颠簸震荡，119名乘客及9名乘务人员命悬一线的故事。
 
　　飞机驾驶室挡风玻璃被吹掉的一刹那，副驾驶员徐奕辰，腾空而起，上半身被悬挂机仓外。9000米高度，零下40度啊！风呼啸着，怒吼着，仿佛倾刻间要吞噬徐奕辰的生命。好在，他紧系安全带，机长一面应对突发情况，一边用手拽住徐奕辰。
 
　　飞机出现险情，牵动着地面上无数人心，打开绿色通道，拯救飞机的感人场景。到处都是呼叫“3U8366”，心弦紧绷，牵挂重重，传递着工作人员之间的大爱无彊，生命对生命的呵护与尊重。
 
　　飞机获准飞向成都后，失联了。电闪雷鸣，乌云滚滚，高压气流等恶劣气候，造成了飞机一直在盘旋，不敢突破密布的乌云，像陷入“八挂阵”似的。
 
　　机长陷入回忆，女儿过生日的场景，女儿天真的笑脸。那一刻，我泪流满面，人在突发意外时，所暴露的情感，是心灵深处最真实的牵挂，心心念念的都是自己的骨肉啊！也是支撑机长拼命博击困难的唯一勇气！
 
　　千钧一发时，是机长的女儿唤醒了机长，一定要活着回去，一定要陪女儿过生日。机长强大的心理素质和长年累月积累的经验，临危不惧，当机立断，从云层变化中找出一条缝隙，穿越过去。冰雹噼呖啪啦砸在身上，闪电一次又一次划破耳膜。
 
　　乘客们惊慌失措，恐惧不安，满眼绝望，满心祈祷。乘务人员温馨提示“请带上氧气罩，保持正常呼吸”并且帮助所有的人戴上氧气罩。
 
　　当行旅箱飞了出来，乘务人员也飞了起来，重重地落在走廓道上。乘客们像沸水里的鱼，拼命挣扎着，尖叫着，怒吼着，欲冲向驾驶室。乘务人员强忍着不适，不断安慰狂燥悲观的乘客。“我们是受过专业训练的，请您相信我们”一位老革命军人，一声吼，“听从指挥，稍安勿燥”。
 
　　瞬间，平息了一场闹剧。乘务人员继续宽慰大家：“我们也是人，我们也有自己的家人， 我们的父母在等着我们，我们的儿女也在等着我们”生死关头，见证了人性的温暖。彼此站在同一条战线上，鼓励，关怀，慰问，竖起一个个大拇指。
            </p>
          </div>
        </el-tab-pane>
        <el-tab-pane label="购买说明" name="third"></el-tab-pane>
        <el-tab-pane label="付款方式" name="fourth"></el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import xiangqinrmenVue from "./xiangqinrmen.vue";

export default {
  components: {
    xiangqinrmenVue,
  },
  data() {
    return {
      input: "",
       tableData: [{
          date: '2016-05-02',
          name: '郭德纲',
          address: '光华路5号国际会展中心三楼湖西岛音乐厅'
        }, {
          date: '2016-05-04',
          name: '秦晓贤',
          address: '光华路5号国际会展中心三楼湖西岛音乐厅'
        }, {
          date: '2016-05-01',
          name: '岳云鹏',
          address: '光华路5号国际会展中心三楼湖西岛音乐厅'
        }, {
          date: '2016-05-03',
          name: '孙越',
          address: '光华路5号国际会展中心三楼湖西岛音乐厅'
        }]
    };
  },
};
</script>

<style scoped>
#xiangdi {
  width: 100%;
  height: 400px;
  /* border: 1px solid springgreen; */
}
.jiben {
  margin-left: 10px;
  margin-top: 10px;
}
.jiben span {
  color: red;
}
.xian {
  /* border: 1px dashed gray; */
  width: 50%;
  margin-left: 80px;
  margin-top: -80px;
}
.jiben p {
  height: 100px;
}
</style>
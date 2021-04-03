<template>
  <div class="navmenu">
    <el-row :gutter="20">
      <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="18">
        <div class="grid-content bg-purple layoutWidth">
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            router
          >
            <el-menu-item index="Home">
              <items mark="Home" :sel="selected" @change="getVal">
                <div slot="activeImg" class="shopwidth">全部商品分类</div>
                <div slot="showmenu" class="showmenu">
                  <!-- 导入左侧商品分类菜单栏 -->
                  <leftmenu></leftmenu>
                </div>
                <div slot="normalImg">首页</div>
              </items>
            </el-menu-item>

            <el-menu-item index="2">
              <items mark="2" :sel="selected" @change="getVal">
                <span slot="activeImg">戏剧</span>
                <span slot="normalImg">戏剧</span>
              </items>
            </el-menu-item>
            <el-menu-item index="3">
              <items mark="3" :sel="selected" @change="getVal">
                <span slot="activeImg">体育</span>
                <span slot="normalImg">体育</span>
              </items>
            </el-menu-item>
            <el-menu-item index="baby">
              <items mark="baby" :sel="selected" @change="getVal">
                <span slot="activeImg">亲子</span>
                <span slot="normalImg">亲子</span>
              </items>
            </el-menu-item>
            <el-menu-item index="5">
              <items mark="5" :sel="selected" @change="getVal">
                <span slot="activeImg">舞蹈古典</span>
                <span slot="normalImg">舞蹈古典</span>
              </items>
            </el-menu-item>
            <el-menu-item index="6">
              <items mark="6" :sel="selected" @change="getVal">
                <span slot="activeImg">摇滚</span>
                <span slot="normalImg">摇滚</span>
              </items>
            </el-menu-item>
          </el-menu>
        </div>
      </el-col>
      <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
  </div>
</template>
<script>
import items from "../components/items";
import leftmenu from '../components/leftmenu'
export default {
  components: {
    items,
    leftmenu
  },
  data() {
    return {
      // 默认被选中的选项
      // 样式用
      activeIndex: "Home",
      // 槽口用
      selected: "Home",
    };
  },
  methods: {
    // 传递被选中的值
    getVal: function (val) {
      this.selected = val;
    },
  },
};
</script>
<style scoped>
/* 混合布局排版 */
.grid-content {
  min-height: 36px;
}

/* 导航菜单上边距 */
.navmenu {
  margin-top: 20px;
}

/* 直接使用!important设置被选中的背景颜色 */
.el-menu-item.is-active {
  border: none !important;
  background-color: #ff3c1b !important;
  color: white !important;
}

/* 全部商品分类的宽 */
.shopwidth {
  width: 220px;
  text-align: center;
  background-color: black;
  /* 解决 el-menu-item 自带的 padding：0 20px问题，颜色覆盖不上 */
  margin: 0 -20px;
}

/* 全部商品分类的下拉框 */
.showmenu {
  background-color: #ff3c1b;
  width: 220px;
  height: 434px;
  position: absolute;
  left: 0;
  top: 60px;
  z-index: 5;
}
</style>

<template>
  <div class="Dr" v-title data-title="我的大麦-个人信息">
    <div class="Dr-title">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/Home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/DD">我的大麦</a></el-breadcrumb-item>
        <el-breadcrumb-item>账户中心</el-breadcrumb-item>
        <el-breadcrumb-item>个人信息</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="Dr-Tab">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="用户管理" name="first">
          <div class="Dr-ipt">
            <el-form ref="form" :model="form" label-width="80px">
              <el-form-item label="昵称">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="联系电话">
                <el-input v-model="form.date1"></el-input>
              </el-form-item>
              <el-form-item label="真实姓名">
                <el-input v-model="form.region"></el-input>
              </el-form-item>
              <el-form-item label="身份证号">
                <el-input v-model="form.date2"></el-input>
              </el-form-item>
              <el-form-item label="生日">
                <el-col :span="13">
                  <el-date-picker
                    type="date"
                    placeholder="选择日期"
                    v-model="form.date1"
                    style="width: 100%"
                  ></el-date-picker>
                </el-col>
              </el-form-item>
              <el-form-item label="性别">
                <el-radio v-model="radio" label="1">备选项</el-radio>
                <el-radio v-model="radio" label="2">备选项</el-radio>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit">保存</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-tab-pane>
        <el-tab-pane label="配置管理" name="second">
          <div>
            <el-upload action="#" list-type="picture-card" :auto-upload="false">
              <i slot="default" class="el-icon-plus"></i>
              <div slot="file" slot-scope="{ file }">
                <img
                  class="el-upload-list__item-thumbnail"
                  :src="file.url"
                  alt=""
                />
                <span class="el-upload-list__item-actions">
                  <span
                    class="el-upload-list__item-preview"
                    @click="handlePictureCardPreview(file)"
                  >
                    <i class="el-icon-zoom-in"></i>
                  </span>
                  <span
                    v-if="!disabled"
                    class="el-upload-list__item-delete"
                    @click="handleDownload(file)"
                  >
                    <i class="el-icon-download"></i>
                  </span>
                  <span
                    v-if="!disabled"
                    class="el-upload-list__item-delete"
                    @click="handleRemove(file)"
                  >
                    <i class="el-icon-delete"></i>
                  </span>
                </span>
              </div>
            </el-upload>
          </div>
        </el-tab-pane>
        <el-tab-pane label="角色管理" name="third"> 
                                          <div class="int">
                                <p class="int-p">兴趣标签</p>
                                <div class="followed">
                                  <p class="foll-f">已 关 注</p>
                                  <div class="foll-f-c">
                                     
                                        <el-tag
                                        v-for="(ccoo,index) in eeee" :key="index" class="foll-d"
                                        closable
                                       
                                        @close="handleClose()">
                                         {{ccoo}}
                                      </el-tag>
                                  </div> 
                                </div>
                                 <div class="choose-tag">
                                  <p class="choose-tag-f">标签选择</p>
                                  <div class="choose-tag-c">
                                      <div class="tagg">
                                       <ul  v-for="(items,index) in conts" :key="index" v-on:click="enter(index)" :class="{liBG: changea == index}"  >
                                       
                                        <li @click="fn(items.name)"> 
                                          {{items.name}} 
                                         <div class="conn" v-show="aa==items.active">
                                           <span  v-for="(items1,i) in items.text" :key="i" id="nnnn" @click="dian(items1)">
                                             {{items1}}
                                             </span>
                                          </div>
                                       
                                        </li>

                                      </ul> 
                                      </div>
                                 </div>
                                </div>
                              </div>
         </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ok:true,
     eeee:[],
     aa:"设计",
      conts: [
        { name: "设计", text: ["PS", "视图", "平面", "交互"],active:"设计" },
        { name: "前端", text: ["jq", "js", "vue", "json"],active:"前端"},
        { name: "运维", text: ["网络", "安全", "开发"],active:"运维"},
        { name: "测试", text: ["Jira", "测试", "postman"],active:"测试"}
      ],
       changea: 0,
      ruleForm: {
        name: "",
        num: "",
        region: "",
        date1: "",
        id: "",
        date2: "",
        num2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      radio: "1",
      activeName: "first",
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
       dialogImageUrl: '',
        dialogVisible: false,
        disabled: false
    };
  },
  methods: {
    // ipt
    handleClick(tab, event) {
      console.log(tab, event);
    },
    onSubmit() {
      console.log("submit!");
    }, handleRemove(file) {
        console.log(file);
    },
    //上传头像
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      handleDownload(file) {
        console.log(file);
      },
      //标签
         handleClose() {
        this.eeee.splice(this.eeee, 1);
      },
    enter: function(index) {
      this.changea = index;
    },
    fn(a){
      this.aa=a
    },
    dian(e){
   this.ok=true;
    for (var i =0; i<this.eeee.length; i++){
      if (e==this.eeee[i]) {
        this.ok=false;
      }
    }
    if(this.ok){
      this.eeee.push(e)
    }
    },
  },
};
</script>

<style scoped>
.Dr {
  width: 1000px;
  margin-left: 20px;
}
.Dr-Tab {
  margin-top: 20px;
}

.Dr-ipt {
  width: 500px;
}
label {
  width: 100px;
  display: inline-block;
}
.el-input {
  width: 400px;
  display: inline-block;
}
.el-button--primary {
  background: #ff5c41;
  border: 0px;
}
.choose-tag {
  width: 100%;
  height: 190px;
  line-height: 70px;
  margin-top: 10px;
}
.choose-tag-f {
  width:30%;
  height: 70px;
  line-height: 70px;
  float: left;
  padding-left: 5px;
}
.choose-tag-c {
  width: 85%;
  height: 190px;
  float: left;
  margin-left: 5px;
}
.tagg {
  width: 100%;
  height: 180px;
  position: relative;
  margin-top: 10px;
}
.tagg ul li {
  list-style: none;
  float: left;
  width: 8%;
  height: 35px;
  line-height: 35px;
  margin-top: 10px;
  margin-left: 10px;
 
}
.conn {
  width: 500px;
  height:110px;
  line-height:110px;
  display: inline-block;
  position: absolute;
  left: 30px;
  top: 45px;
 
}
#nnnn {
  width: 80px;
  height: 120px;
  line-height: 120px;
 padding-right: 20px;
}
.foll-f-c {
  width: 85%;
  height:50px;
  line-height:50px;
  float: left;
  margin-left: 5px;
  margin-top: 7px;

}
</style>
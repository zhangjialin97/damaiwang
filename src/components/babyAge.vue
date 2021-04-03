<template>
  <div class="AgeTab" @click="fn">
    <span v-show="bol">
      <slot name="AgeTab">
        <ul class="seledAge">
          <li
            v-for="(itemage, index) in info"
            :key="index"
            :class="{ fl: true, left: index > 0 && index != 3,top:index>2 }"
          >
            <div class="fl">
              <img :src="Imgs[itemage.xiaobiao]" alt="" class="" />
            </div>
            <div class="AgeTitle fl">
              <p>{{ itemage.desc }}</p>
              <p>{{ itemage.date }}</p>
              <p class="adress">{{ itemage.adress }}</p>
              <p>{{ itemage.money }}</p>
            </div>
          </li>
        </ul>
      </slot>
    </span>
    <span v-show="!bol">
        <slot name="AgeTab2"></slot>
    </span>
  </div>
</template>
<script>
import "../assets/css/style.css";
export default {
  props: ["info", "Imgs", "names", "sel"],
  data() {
    return {
      tg: false,
    };
  },
  mounted() {
    if (this.names != "") {
      this.tg = true;
    }
  },
  methods: {
    fn() {
      this.$emit("change", this.names);
    },
  },
  computed:{
    bol(){
      if(this.sel == this.names){
        return true
      }
      return false
    }
  }
};
</script>
<style scoped>
.seledAge {
  width: 1407px;
}
.seledAge > li {
  width: 420px;
}
.seledAge > li img {
  width: 209px;
  height: 100px;
}
.seledAge > .left {
  margin-left: 70px;
}
.top {
  margin-top: 10px;
}
.AgeTitle {
  font-size: 14px;
  width: 170px;
  padding-left: 5px;
}
.adress {
  font-size: 12px;
}
p {
  line-height: 20px;
}
span>img {
  margin-top: 4px;
}
</style>
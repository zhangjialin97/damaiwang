<template>
  <div class="baby">
      <div class="data">
          <babyDataVue />
      </div>
  </div>
</template>
<script>
import babyDataVue from '../components/baby_data.vue';
export default {
  components: {
    babyDataVue,
  },
  data() {
    return {
        
    }
  },
};
</script>
<style scoped>
.grid-content {
  min-height: 36px;
}
.top {
  border-bottom: 1px rgb(231, 231, 231) solid;
}
.seach {
    margin-top: 20px;
}
.data {
  width: 100%;
}
</style>
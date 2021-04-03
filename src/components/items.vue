<template>
  <div class="items" @click="fn">
    <span v-show="bol">
      <slot name="activeImg"></slot>
      <slot name="showmenu"></slot>
    </span>
    <span v-show="!bol">
      <slot name="normalImg"></slot>
    </span>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: ["mark", "sel"],
  computed: {
    bol: function () {
      if (this.mark == this.sel) {
        return true;
      }
      return false;
    },
  },
  methods: {
    fn: function () {
      this.$emit("change", this.mark);
    },
  },
};
</script>
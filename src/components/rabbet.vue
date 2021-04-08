<template>
    <div>
        <span>
            <!-- 槽口 把图片的位置站住 此处显示此处的图片 -->
            <slot name="activeImg"></slot>
        </span>
        <span>
            <slot name="norImg"></slot>
        </span>
    </div>
</template>
<script>
export default {
   
};
</script>
<style scoped>
</style>
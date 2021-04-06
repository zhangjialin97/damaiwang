<template>
    <div class="dalicacy">
        <div class="left fl">
            <slot name="left"></slot>
        </div>
        <div :class="{cen:pinfo, fl:true , AnimationRight:AnRight}">
            <slot name="cen"></slot>
        </div>
        <div :class="{right:true, fl:true}">
            <slot name="right"></slot>
        </div>
    </div>
</template>
<script>
export default {
    props:['names'],
    data() {
        return {
            pinfo:false,
            AnRight:false
        }
    },
    mounted(){
        if(this.names == 'Delicacy'){
            this.pinfo = true
        }
        if(this.names == 'Animation'){
            this.AnRight = true
        }
    }
}
</script>
<style scoped>
.dalicacy {
    display: flex;
}
.fl {
    flex: 1;
}
.cen {
    flex: 2;
}
.right {
    text-align: right;
}
.AnimationRight {
    text-align: center;
}
</style>
<template>
    <div class="guess_json">
        <div class="guess_data">
            <slot name="img">
                <img :src="img[biao]" alt="" class="guess_img">
            </slot>
            <slot name="title"></slot>
            <slot name="price"></slot>
        </div>
    </div>
</template>
<script>
export default {
    props:['img','biao'],
    mounted(){
    },
    data() {
        return {
            judeg:true
        }
    },
    
}
</script>
<style scoped>
.guess_json {
    flex: 1;
    text-align: center;
    box-sizing: border-box;
}
.guess_img {
    width: 200px;
    height: 260px;
}
.guess_data p {
    text-align: left;
    margin-left: 25px;
    font-size: 14px;
}
.guess_data .title {
    line-height: 30px;
}
.guess_data .price {
    color: rgb(217,217,217);
}
.guess_data .price>span {
    color: #000;
}
</style>
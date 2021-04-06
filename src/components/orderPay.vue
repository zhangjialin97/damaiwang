<template>
    <div class="orderPay">
        <div class="orPayhint">
            <ul>
                <li>
                    <p class="select">1、 选择商品</p>
                    <div :class="{box:names=='orderPay'}"></div>
                </li>
                <li :class="{affirm:names=='orderPay'}">
                    <p :class="{affirm:names=='orderPay'}">2、 确认订单信息</p>
                    <div :class="{box:names=='orderPay',box1:names=='orderPay'}"></div>
                </li>
                <li :class="{affirm:names=='pay'}">
                    <p class="pay">3、 支付订单</p>
                    <div :class="{box1:names=='pay'}"></div>
                </li>
                <li>
                    <p>4 收取商品</p>
                </li>
            </ul>
        </div>
        <!-- <div class="autonym">
           <orderPayAff /> 
        </div> -->
    </div>
</template>
<script>
// import orderPayAff from './orderPayAff'
export default {
    props:['names'],
    components:{
        // orderPayAff
    },
    mounted(){

    },
    data() {
        return {
            
        }
    },
}
</script>
<style scoped>
.orderPay .orPayhint {
    width: 1348px;
    height: 50px;
    margin: 0 auto;
    background: rgb(67,67,67);
}
.orderPay .orPayhint ul li {
    float: left;
    width: 325px;
    position: relative;
}
.orderPay .orPayhint ul li p {
    width: 280px;
    font-size: 18px;
    line-height: 50px;
    color: #fff;
    text-align: center;
}
.orderPay .orPayhint ul li div {
    width: 35px;
    height: 35px;
    transform:rotate(45deg);
    background: rgb(67,67,67);
    position: absolute;
    right: -18px;
    top: 7px;
    z-index: 2;
    
}
.orderPay .orPayhint ul .affirm,
.orderPay .orPayhint ul .affirm .box1 {
    background: rgb(255,60,27);
}
</style>
<template>
    <div class="pay">
        <div class="header">
            <orderNavVue />
        </div>
        <div class="paytitle">
            <payDataVue :payinfo='payinfo'/>
        </div>
    </div>
</template>
<script>
import orderNavVue from '../components/orderNav.vue'
import payDataVue from '../components/payData.vue'

export default {
    props:['info'],
    components:{
        payDataVue,
        orderNavVue
    },
    data() {
        return {
            payinfo:this.$route.params.info
        }
    },
    mounted(){
        // console.log(this.payinfo)
    }
}
</script>
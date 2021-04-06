<template>
    <div class="order">
        <div class="orderNav">
            <orderNav/>
        </div>
        <div>
            <orderDataVue :info='info'/>
        </div>
    </div>
</template>
<script>
import orderDataVue from '../components/orderData.vue'
import orderNav from '../components/orderNav'
export default {
    components:{
        orderDataVue,
        orderNav
    },
    data() {
        return {
            info:this.$route.params.info
        }
    },
    mounted(){
    }
}
</script>
<template>
    <div class="checkout-page">
        <ButtonBack>Back to the market</ButtonBack>
        <ProductInfo/>
        <PaymentForm/>
        <FooterPayment/>
    </div>
</template>

<script>
import ProductInfo from '../components/product-info/ProductInfo.vue'
import ButtonBack from '../components/ui/ButtonBack.vue'
import PaymentForm from '../components/PaymentForm.vue'
import FooterPayment from '../components/FooterPayment.vue'
import {mapActions} from 'vuex'

export default {
    name: "Checkout",
    components: {
        ButtonBack,
        ProductInfo,
        PaymentForm,
        FooterPayment
    },
    methods: {
        ...mapActions(['getCountries']),
    },
    created() {
        this.getCountries()
    },
}
</script>

<style lang="scss" scoped>
/* no se si fer-ho scoped o posar aqui els de layout */
    .checkout-page {
        display: flex;
        justify-content: center;
        flex-direction: column;
        flex-wrap: wrap;
        padding: 2%;
    }
    @media only screen and (min-width: 768px) {
        .checkout-page {
            & :nth-child(4) {
                order: 2;
            }
            & :nth-child(3) {
                order: 3;
            }
            align-content: space-between;
            column-gap: 15em;
            div:nth-of-type(1) {
                margin-left: 7em;
            }
        }
    }
</style>
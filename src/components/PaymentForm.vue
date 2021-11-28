<template>
    <div class="payment-form">
        <BaseButton :variant="'dark'" :size="'lg'">
        <img src="@/assets/apple-pay.svg">
        </BaseButton>
        <BaseDivider>Or pay with card</BaseDivider>
        <FormCreditCard/>
    </div>
</template>

<script>
import BaseButton from './ui/BaseButton.vue'
import FormCreditCard from './payment-form/payment-form-cc-fields/FormCreditCard.vue'
import BaseDivider from './ui/BaseDivider.vue'

export default {
    name: "PaymentForm",
    components: {
        BaseButton,
        BaseDivider,
        FormCreditCard
    }
}
</script>

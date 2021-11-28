<template>
    <b-form-group class="cc-input"
        id="cc-input-group"
        label="Credit Card details"
        label-class="input-label-custom"
        label-for="cc-input-number"
        :invalid-feedback="form.creditCard.errorMsgCC"
        :description="form.creditCard.errorMsgCC"
    >
        <b-input-group id="cc-input-number-group">
            <b-form-input
                id="cc-input-number"
                v-model="form.creditCard.number"
                :state="form.creditCard.isCardValid"
                @input="resetCardValidation()"
                @blur="validateCreditCard(form.creditCard.number), creditCardErrorMessage()"
                type="text"
                inputmode="numeric"
                placeholder="1234 1234 1234 1234"
                required
                autocomplete="off"
            ></b-form-input>
            <span v-show="!form.creditCard.number"><img src="../../../assets/cards.svg" alt=""></span>
        </b-input-group>
        <b-input-group id="cc-input-date-cvc" class="input-shadow">
            <b-form-input
                id="cc-input-date"
                v-model="form.creditCard.expirationDate"
                :state="form.creditCard.isDateValid"
                @input="form.creditCard.isDateValid=null"
                @blur="validateCCDate(form.creditCard.expirationDate),creditCardErrorMessage()"
                type="text"
                inputmode="numeric"
                placeholder="MM / YY"
                required
                autocomplete="off"
            ></b-form-input>
            <b-form-input
                id="cc-input-cvc"
                v-model="form.creditCard.cvc"
                :state="form.creditCard.isCvcValid"
                @input="form.creditCard.isCvcValid=null"
                @blur="validateCvc(form.creditCard.cvc), creditCardErrorMessage()"
                type="text"
                inputmode="numeric"
                placeholder="CVC"
                required
                autocomplete="off"
            ></b-form-input>
            <span v-show="!form.creditCard.cvc"><img src="../../../assets/cvc.svg" alt=""></span>
        </b-input-group>
    </b-form-group>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
    name: "CCNumberInput",
    computed: {
        ...mapState(['form'])
    },
    methods: {
        ...mapMutations([
            'validateCreditCard', 
            'resetCardValidation',
            'validateCCDate',
            'validateCvc',
            'creditCardErrorMessage'
            ])
    },
}
</script>

<style lang="scss" scoped>
#cc-input-{
    &number-group, &date-cvc {
        position: relative;
        span {
            position: absolute;
            right: 0.5em;
            top: 0.25em;
        }
    }
    &number {
        border-bottom-left-radius: 0;
        border-top-right-radius: 0.25rem;
        border-bottom-width: 0.5px;
    }
    &date {
        border-top-left-radius: 0;
        border-top-width: 0.5px;
    }
    &cvc {
        border-bottom-right-radius: 0.25rem;
        border-top-width: 0.5px;
    }
}
</style>

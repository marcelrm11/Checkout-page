<template>
    <div class="form-credit-card">
        <b-form>
            <EmailInput/>
            <CCNumberInput/>
            <NameInput/>
            <CountrySelect/>
            <BaseButton :variant="'dark'" :size="'lg'" class="custom-disabled">
                <span>Pay </span>
                <ProductPrice :product="products.mac" class="d-inline"/>
            </BaseButton>
        </b-form>
    </div>
</template>

<script>
import EmailInput from './EmailInput.vue'
import CCNumberInput from './CCNumberInput.vue'
import NameInput from './NameInput.vue'
import CountrySelect from './CountrySelect.vue'
import BaseButton from '../../ui/BaseButton.vue'
import ProductPrice from '../../product-info/ProductPrice.vue'
import { mapState } from 'vuex'

export default {
    name: "FormCreditCard",
    components: {
        EmailInput,
        CCNumberInput,
        NameInput,
        CountrySelect,
        ProductPrice,
        BaseButton
    },
    computed: {
        ...mapState(['products'])
    },
}
</script>

<style lang="scss" scoped>
    .form-group {
        margin: 2em 0!important;
    }
    .custom-disabled {
        color: #8792A2;
        &:hover {
            color: white;
        }
    }
</style>
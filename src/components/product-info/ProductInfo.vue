<template>
    <div class="product">
        <div class="image-container">
            <ProductImage :product="products.mac"/>
        </div>
        <div class="name-price-container">
            <ProductName :product="products.mac"/>
            <ProductPrice :product="products.mac" class="display-price"/> 
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import ProductImage from './ProductImage.vue'
import ProductName from './ProductName.vue'
import ProductPrice from './ProductPrice.vue'
    
export default {
    name: "ProductInfo",
    components: {
        ProductImage,
        ProductName,
        ProductPrice
    },
    computed: {
        ...mapState(['products'])
    },
}
</script>

<style lang="scss" scoped>
.product {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1.5em;
    padding-top: 4em;
    .name-price-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}
.display-price {
    font-family: 'Roboto', 'sans-serif';
    font-weight: 900;
    font-size: 2.25rem;
}
@media only screen and (min-width: 768px) {
.product {
    & :nth-child(1) {
        order: 2;
    }
    justify-content: space-between;
    row-gap: 5em;
    padding-top: 1.5em;
    .name-price-container {
        align-items: flex-start;
        flex-direction: column-reverse;
        align-self: flex-start;
        padding-left: 7.5em;
    }
}
.display-price {
    font-family: 'Montserrat', 'Roboto', 'sans-serif';
}
}
</style>
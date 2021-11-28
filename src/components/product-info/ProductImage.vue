<template>
    <div class="product-image">
        <img :src="product.imgMobile" :alt="'image of a '+product.name">
    </div>
</template>

<script>
export default {
    name: "ProductImage",
    props: [
        'product'
    ]
}
</script>

<style lang="scss" scoped>
.product-image img {
        max-width: 200px;
}
@media only screen and (min-width: 768px) {
    .product-image img {
        max-width: 75vh;
    }
}
</style>
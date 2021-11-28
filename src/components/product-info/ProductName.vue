<template>
    <div class="product-name">
        <span>New </span><span>{{product.name}}</span>
    </div>
</template>

<script>
export default {
    name: "ProductName",
    props: ['product']
}
</script>

<style lang="scss" scoped>
    .product-name {
        margin-top: 1.5em;
    }
</style>
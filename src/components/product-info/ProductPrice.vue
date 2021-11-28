<template>
    <div>
        <span>{{product.currency}}</span><span>{{parseFloat(product.price).toFixed(2)}}</span>
    </div>
</template>

<script>
export default {
    name: "ProductPrice",
    props: ['product']
}
</script>
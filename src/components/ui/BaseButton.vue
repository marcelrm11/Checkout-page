<template>
    <b-button block :variant="variant" :size="size" class="button-shadow my-4 button-text-size">
        <slot>Click</slot>
    </b-button>
</template>

<script>
export default {
    name: "BaseButton",
    props: ['variant', 'size']
}
</script>

<style lang="scss" scoped>
 .button-text-size {
     font-size: 1.125rem;
 }
</style>
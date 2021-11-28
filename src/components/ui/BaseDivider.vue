<template>
    <div class="base-divider">
        <span><slot></slot></span>
    </div>
</template>

<script>
export default {
    name: "BaseDivider"
}
</script>

<style lang="scss" scoped>
    .base-divider {
        width: 100%; 
        text-align: center; 
        border-bottom: 1px solid #3C42571F; 
        line-height: 0.1em;
        margin: 2.5em 0; 
        color: #8792A2;
        span { 
            background:#fff; 
        }
    }
</style>ey
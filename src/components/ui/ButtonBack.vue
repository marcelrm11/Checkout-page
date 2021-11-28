<template>
    <div class="button-back">
        <b-icon-arrow-left-short font-scale="2" class="button-back-icon" />
        <span><slot>Back</slot></span>
    </div>
</template>

<script>
export default {
    name: "ButtonBack"
}
</script>

<style lang="scss" scoped>
    .button-back {
        display: flex;
        align-items: center;
        &-icon {
            margin-left: -0.25em;
            &:hover {
                cursor: pointer;
            }
        }
        span {
            margin-left: 0.5em;
        }
    }
    .button-back-icon {
        color: #8792A2;
    }
</style>
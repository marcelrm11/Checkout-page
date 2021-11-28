<template>
    <div class="footer-payment">
        <div class="footer-payment-content">
            <div class="redsys">
                <span>Powered by</span>
                <span><img src="../assets/redsys.png" alt=""></span>
            </div>
            <div class="tap">
                <span>Terms</span>
                <span>Privacy</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "FooterPayment"
}
</script>

<style lang="scss" scoped>
    .footer-payment {
        margin: 4em;
        color: #8792A2;
        &-content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            .redsys, .tap {
                display: flex;
                justify-content: center;
                gap: 0.5em;
            }
            .tap {
                gap: 1.5em;
            }
        }
    }
    @media only screen and (min-width: 768px) {
    .footer-payment{
        margin: 1em;
        &-content {
            flex-direction: row;
            gap: 2em;
            .tap {
                gap: 0.5em;
            }
        }
    }
    
}
</style>
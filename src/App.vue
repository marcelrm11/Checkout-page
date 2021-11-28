<template>
  <div id="app" class="container py-5 py-md-1">
    <CheckoutPage/>
  </div>
</template>

<script>
import CheckoutPage from '@/views/CheckoutPage'

export default {
  name: 'App',
  components: {
    CheckoutPage
  }
}
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&family=Roboto:wght@400;700;900&display=swap');

#app {
  font-family: 'Montserrat', sans-serif;
  color: #1A1F36;
  display: flex;
  justify-content: center;
}
.button-shadow {
    box-shadow: 
      0px 1px 1px 0px #00000014,
      0px 2px 5px 0px #0000001F,
      0px -1px 1px 0px #0000001F;
}
.input-shadow {
    box-shadow: 
    0px 1px 1px 0px #0000000A,
    0px 2px 5px 0px #00000014;
}
.input-label-custom {
  color: #697386;
  font-weight: bold;
  font-size: 0.875rem;
}
.white-bg {
  background-color: white;
}
@media only screen and (min-width: 768px) {
  #app {
    font-family: 'Roboto', sans-serif;
    max-height: 100vh;
    max-width: 100vw;
    justify-content: flex-start;
    overflow: hidden;
    margin-left: 5%;
  }
}
</style>

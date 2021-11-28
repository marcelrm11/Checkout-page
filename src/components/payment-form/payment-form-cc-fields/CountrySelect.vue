<template>
    <b-form-group class="country-select"
        id="country-select-group"
        label="Country or region"
        label-class="input-label-custom"
        label-for="country-select-cc"
        description=""
    >
        <b-form-select
            id="country-select-cc"
            v-model="form.location.country"
            :options="countryList"
        ></b-form-select>
        <b-form-input
            id="country-select-zip"
            class="input-shadow"
            v-model="form.location.zipCode"
            type="text"
            inputmode="numeric"
            placeholder="ZIP"
            required
        ></b-form-input>
    </b-form-group>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: "CountrySelect",
    computed: {
        ...mapState(['form', 'countryList'])
    },
}
</script>

<style lang="scss" scoped>
#country-select- {
    &cc {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        border-bottom: none;
        }
    &zip {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }
    }
</style>
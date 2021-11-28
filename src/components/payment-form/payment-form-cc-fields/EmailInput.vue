<template>
    <b-form-group class="email-input"
        id="email-input-group-cc"
        label="Email"
        label-class="input-label-custom"
        label-for="email-input-cc"
        description=""
    >
        <b-form-input
            id="email-input-cc"
            class="input-shadow"
            v-model="form.email.value"
            :state="form.email.isEmailValid"
            @input="form.email.isEmailValid=null"
            @blur="validateEmail(form.email.value)"
            type="email"
            placeholder="Enter email"
            required
            autocomplete="off"
        ></b-form-input>
        <b-form-invalid-feedback>
            {{form.email.errorMessage}}
        </b-form-invalid-feedback>   
    </b-form-group>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
    name: "EmailInput",
    computed: {
        ...mapState(['form'])
    },
    methods: {
        ...mapMutations(['validateEmail'])
    },
}
</script>

<style lang="scss" scoped>

</style>
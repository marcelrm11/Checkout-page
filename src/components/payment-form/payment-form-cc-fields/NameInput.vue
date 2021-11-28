<template>
    <b-form-group class="name-input"
        id="name-input-group-cc"
        label="Name on card"
        label-class="input-label-custom"
        label-for="name-input-cc"
        description=""
    >
        <b-form-input
            id="name-input-cc"
            class="input-shadow"
            v-model="form.creditCard.name"
            type="text"
            placeholder="Enter name"
            required
        ></b-form-input>    
    </b-form-group>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: "NameInput",
    computed: {
        ...mapState(['form'])
    },
}
</script>
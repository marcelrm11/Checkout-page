import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: {
      mac: {
        imgMobile: require('@/assets/mac-desktop.png'),
        name: 'mac',
        price: '899.00',
        currency: '$'
      }
    },
    form: {
      email: {
        value: '',
        isEmailValid: null,
        errorMessage: 'Please, enter a valid email address.'
      },
      creditCard: {
        cardType: [ //source: https://www.w3resource.com/javascript/form/credit-card-validation.php
          /^(?:4[0-9]{12}(?:[0-9]{3})?)$/, /* visa */
          /^(?:5[1-5][0-9]{14})$/, /* mastercard */
          /^(?:3[47][0-9]{13})$/, /* amex */
          /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/ /* discover */
        ],
        isCardValidGroup: [],
        isCardValid: null,
        isDateValid: null,
        isCvcValid: null,
        number: '',
        expirationDate: '',
        cvc: '',
        name: '',
        errorMsgCC: ''
      },
      location: {
        country: null,
        zipCode: ''
      }
    },
    countryList: []
  },
  mutations: {
    setCountries(state, countries) {
      const select = {text: 'Please select your country', value: null}
      state.countryList = countries.data.map((country)=>{
        return {text: country.name, value: country.alpha3Code}
      })
      state.countryList.unshift(select)
    },
    validateEmail(state, email) { //source: https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript
      if (email) {
        String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
        ? state.form.email.isEmailValid = true
        : state.form.email.isEmailValid = false
      }
    },
    validateCreditCard(state, cardNumber) { 
      if (cardNumber) {
        const cards = state.form.creditCard
      const regexps = cards.cardType
      for (let regex of regexps) {
        cards.isCardValidGroup.push(regex.test(cardNumber))
      }
      cards.isCardValidGroup.some(card => card)
      ? cards.isCardValid = true
      : cards.isCardValid = false
      }
    },
    validateCCDate(state, date) {
      if (date) {
        /^(0[1-9]|1[0-2])\/?([0-9]{2})$/
        .test(date)
        ? state.form.creditCard.isDateValid = true
        : state.form.creditCard.isDateValid = false
      }
    },
    validateCvc(state, cvc) {
      if(cvc) {
        /^[0-9]{3}$/
        .test(cvc)
        ? state.form.creditCard.isCvcValid = true
        : state.form.creditCard.isCvcValid = false
      }
    },
    creditCardErrorMessage(state){
      if (
        state.form.creditCard.isCardValid === false
        || state.form.creditCard.isDateValid === false
        || state.form.creditCard.isCvcValid === false
      ) {
        state.form.creditCard.errorMsgCC = 'Please, enter valid credit card details.'
      }
    },
    resetCardValidation(state) {
      state.form.creditCard.isCardValid = null
      state.form.creditCard.isCardValidGroup = []
    }
  },
  actions: {
    async getCountries({commit}) {
      const data = await axios.get('https://restcountries.com/v2/all')
      commit('setCountries', data)
    }
  }
})

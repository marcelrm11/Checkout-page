# jump2digital_code

## Project name
```
Responsive Payment Platform:
This is a checkout platform including an Apple Pay option and a Credit Card form.
```

## Firebase hosting
```
https://jump2digital-hackhaton-2021.web.app/
```

## Public Github repository
```
https://github.com/marcelrm11/jump2digital-2021
```

## API/Component
```
This project uses the API 'restcountries.com' for the list of countries. It is structured in components following Vue.js best practices.
```

### RestCountries API
```
Calling 'https://restcountries.com/v2/all' we get an extensive list of countries with a lot of information for each one.
```

### Components
```
The App component is the main Vue component which is rendered in the 'main.js' file using webpack and babel for browser compatibility.
There is a main layout component in the 'views' folder called CheckoutPage which integrates all the subcomponents.
There are base UI components in the 'components\ui' folder.
```

#### CheckoutPage
```
It is structured in 4 subcomponents:
- ButtonBack: just a button, laid here for alignment purposes.
- ProductInfo: it takes all the info about the product/s from the store.
- PaymentForm: it lays the payment form and buttons.
- FooterPayment: same as the ButtonBack, it is placed here for alignment purposes.
```

#### ProductInfo
```
It takes the product info from the store and displays the image, the name and the price.
```

#### PaymentForm
```
The PaymentForm component is divided in 3:
- ApplePay button, which uses the BaseButton component from UI folder, where you can personalize it with variant, size and text/content.
- BaseDivider, where you can specify the text inside.
- FormCreditCard, which holds the payment form with all the input fields.
```

#### FormCreditCard
```
This component integrates all the input fields as subcomponents. Each input component has its own html template and some styles.
```

## Installation
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Requirements
```
This project can be managed using Vue UI management interface. You can access it typing 'vue ui' in your command line. From there, you can install all dependencies needed and easily follow the project setup. The dependencies needed for this project are:
Main dependencies:
- axios
- bootstrap-vue
- core-js
- firebase
- firebase-tools
- popper.js
- vue
- vue-axios (really not needed)
- vuex
Development dependencies:
- @vue/test-utils (in case we want to implement unit testing integrated with Vue)
- babel/slint (for javascript browser compatibility)
- eslint
- eslint-plugin-vue (both for style check and formatting)
- sass
- sass-loader (css pre-processor)
- vue-template-compiler
```

## Stack
```
This project uses the following stack:
- Vue.js as Javascript framework 
- Vuex as state management pattern library for Vue.js
- Bootstrap-vue as CSS framework
- Webpack as a module bundler
- Babel as a Javascript compiler
- Google Firebase as an application development software
```

## Contact Info
```
marcelrm11@gmail.com || Marcel Roig Medina
```

## License
```
nuwe-io/readme-templates: 'https://github.com/nuwe-io/readme-templates'
MIT License: 'https://opensource.org/licenses/MIT'
```
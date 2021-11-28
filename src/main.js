import Vue from 'vue'
import App from './App.vue'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { initializeApp } from 'firebase/app'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const firebaseConfig = {
  apiKey: "AIzaSyAIFXGksujhTRzQPfGhAouvQ9npq2DJt10",
  authDomain: "jump2digital-hackhaton-2021.firebaseapp.com",
  projectId: "jump2digital-hackhaton-2021",
  storageBucket: "jump2digital-hackhaton-2021.appspot.com",
  messagingSenderId: "178555059711",
  appId: "1:178555059711:web:dfd87474cd5d5003aa7bca",
  measurementId: "G-7N1FG1MXP8"
};

initializeApp(firebaseConfig);

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')


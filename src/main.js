import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuetify from 'vuetify'

import Vuelidate from 'vuelidate'


import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuelidate)
Vue.use(Vuetify, {
  theme: {
  primary: "#2962FF",
  secondary: "#448AFF",
  accent: "#FFAB00",
  error: "#f44336",
  warning: "#ffeb3b",
  info: "#2196f3",
  success: "#4caf50"
}})

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router
}).$mount('#app')

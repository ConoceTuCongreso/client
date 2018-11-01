import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuetify from 'vuetify'

import Vuelidate from 'vuelidate'


import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuelidate)
Vue.use(Vuetify, {
  theme: {
  primary: "#0a3d62",
  secondary: "#2C547B",
  myBlue: "#3c6382",
  accent: "#ffa502",
  error: "#f44336",
  warning: "#ffeb3b",
  info: "#2196f3",
  success: "#4caf50",
  white1: "#ffffff",
  white2: "#f1f2f6",
  white3: "#dfe4ea",
  white4: "#7f8c8d",
  gray1: "#a4b0be",
  gray2: "#747d8c",
  gray3: "#34495e",
  gray4: "#2c3e50",
  blue1: "#70a1ff",
  blue2: "#1e90ff",
  violet1: "#5352ed",
  violet2: "#3742fa",

}})

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router
}).$mount('#app')

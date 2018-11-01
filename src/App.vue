<template>
  <v-app>
<navbar/>
<v-content  class="white2">

  <br>

  <br>
  <router-view/>

</v-content>

</v-app>
</template>

<script>

import SignUp from './components/SignUp.vue'
import Navbar from './components/Navbar.vue'


export default {
  name: 'app',
  components: {
    SignUp,
    Navbar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.material-icons.material-icons--sharp {
  font-family: 'Material Icons Sharp';
}
</style>

<template>
  <v-app>
        <router-view></router-view>
</v-app>
</template>

<script>

import SignUp from './components/SignUp.vue'
import Navbar from './components/Navbar.vue'
import Landing from './components/Landing.vue'


export default {
  name: 'app',
  components: {
    SignUp,
    Navbar,
    Landing
  } 
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;

}

.material-icons.material-icons--sharp {
  font-family: 'Material Icons Sharp';
}
</style>

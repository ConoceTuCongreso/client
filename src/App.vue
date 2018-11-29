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

<style lang="css">
  @import url('https://fonts.googleapis.com/css?family=Arvo:400,700');
  @import url('https://fonts.googleapis.com/css?family=Abril+Fatface');
  @import url('https://fonts.googleapis.com/css?family=Archivo+Narrow');
  @import url('https://fonts.googleapis.com/css?family=Viga');
  @import url('https://fonts.googleapis.com/css?family=Oswald');
  @import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;

}

.header-text{
  font-family: 'Roboto Condensed', serif;
  color: #2c3e50;
}

.title-text{
  font-family: 'Roboto Condensed', serif;
  color: #2c3e50;
  font-weight: bold;
  font-size: 70px;
}

.material-icons.material-icons--sharp {
  font-family: 'Material Icons Sharp';
}
</style>

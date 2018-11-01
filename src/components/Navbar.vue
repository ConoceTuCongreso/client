<template lang="html">
  <div class="myClass">
    <v-toolbar color="white1" light app dense flat height="58px">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"  dark  color="gray4" class="text--white"></v-toolbar-side-icon>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">

        <v-btn flat to='./SignIn'>Link One</v-btn>
        <v-btn flat to='./Home'>Link Two</v-btn>
        <v-btn flat to='./SignUp'>Link Three</v-btn>
      </v-toolbar-items>
    </v-toolbar>

              <v-navigation-drawer
              class="gray4"
                v-model="drawer"
                hide-overlay
                dark
                dense
                floating
                app
              >

                <v-list class="pt-0">

            <v-list-tile-content class="three-line">
              <v-list-tile-title class="three-line myTitle">Conoce tu Congreso</v-list-tile-title>
            </v-list-tile-content>

                  <v-list-tile
                    v-for="item in items"
                    :key="item.title"
                  >
                    <v-list-tile-action>
                      <v-icon>{{ item.icon }}</v-icon>
                    </v-list-tile-action>

                    <v-list-tile-content>
                      <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-navigation-drawer>

</div>
</template>

<script>
//                    <v-img :src="require('../img/logo.png')" height="20%"></v-img>


export default {
  name: 'Navbar',
  data () {
    return {
      drawer: null,
      items: [
        { title: 'Home', icon: 'dashboard' },
        { title: 'About', icon: 'question_answer' }
      ]
    }
  }
}
</script>

<style lang="css">

@import url('https://fonts.googleapis.com/css?family=Alfa+Slab+One');


.drawer{
  color: #4a69bd;
  background-color: #4a69bd;
}

.myTitle{
  font-family: 'Alfa Slab One', cursive;
  font-size: 40px;
}
</style>

<template lang="html">
  <div class="myClass">
    <v-toolbar color="gray4" app clipped-left flat height="58px">
      <v-toolbar-side-icon @click.stop="drawer = !drawer" class="white--text"></v-toolbar-side-icon>
      <v-toolbar-title class="white--text">Conoce tu Congreso</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">

        <v-btn class="white--text" flat to='./SignIn'>Link One</v-btn>
        <v-btn class="white--text" flat to='./Home'>Link Two</v-btn>
        <v-btn class="white--text" flat to='./SignUp'>Link Three</v-btn>
      </v-toolbar-items>
    </v-toolbar>

              <v-navigation-drawer
              class="white1"
                v-model="drawer"
                hide-overlay
                clipped
                floating
                app
              >

                <v-list class="pt-0" dense>


                  <v-list-tile-action>
                    <v-img :src="require('../img/logo.png')" height="20%"></v-img>
                  </v-list-tile-action>


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

.drawer{
  color: #4a69bd;
  background-color: #4a69bd;
}
</style>

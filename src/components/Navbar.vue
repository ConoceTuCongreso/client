<template lang="html">
  <div class="myClass">
    <v-toolbar color="primary" app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer" class="white--text"></v-toolbar-side-icon>
      <v-toolbar-title class="white--text">Title</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn class="white--text" flat to='./SignIn'>Link One</v-btn>
        <v-btn class="white--text" flat to='./Home'>Link Two</v-btn>
        <v-btn class="white--text" flat to='./SignUp'>Link Three</v-btn>
      </v-toolbar-items>
    </v-toolbar>

              <v-navigation-drawer
                v-model="drawer"
                hide-overlay
                app
              >
                <v-list class="pa-1">
                  <v-list-tile avatar>
                    <v-list-tile-avatar>
                      <img src="https://randomuser.me/api/portraits/men/85.jpg">
                    </v-list-tile-avatar>

                    <v-list-tile-content>
                      <v-list-tile-title>John Leider</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>

                <v-list class="pt-0" dense>
                  <v-divider></v-divider>

                  <v-list-tile
                    v-for="item in items"
                    :key="item.title"
                    @click=""
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

.myClass{
  color: #FFF;
}

</style>

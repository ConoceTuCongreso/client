<template lang="html">
  <div class="myClass">
    <v-toolbar color="gray4" dark app dense flat height="58px">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"  dark  color="gray4" class="text--white"></v-toolbar-side-icon>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
      </v-toolbar-items>
    </v-toolbar>

    <v-navigation-drawer
      class="white1 drawer"
      v-model="drawer"
      hide-overlay
      light
      dense
      floating
      app
    >
        <v-list-tile class="category">
            <v-list-tile-avatar>
             <v-img :src="require('../img/logo.png')" class="landingImg"></v-img>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title class="myTitle text--primary">Conoce tu Congreso</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>


    <v-list color="primary" class="white1">
      <v-divider></v-divider>
      <v-list-tile @click="selectCategory(0)">
        <v-list-tile-content>
          <v-list-tile-title>Favoritos</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-group
        v-for="item in items"
        :key="item.group"
        no-action
      >

        <v-list-tile slot="activator">
          <v-list-tile-content>
            <v-list-tile-title>{{ item.group }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile 
          v-for="subItem in item.categories"
          :key="subItem.name"
          @click="selectCategory(subItem.id)"
        >
          
          <v-list-tile-content>
            <v-list-tile-title @click.stop>{{ subItem.name }} </v-list-tile-title>
          </v-list-tile-content>
          </v-list-tile>
        </v-list-group>
      </v-list>


    </v-navigation-drawer>

</div>
</template>

<script>
//<v-img :src="require('../img/logo.png')" height="20%"></v-img>
import axios from 'axios'
export default {
  name: "Navbar",
  data() {
    return {
      drawer: null,
      items: [],
      showFavorites: false,
      favs: []
    };
  },
  methods:{
    selectCategory(id){
      this.$root.$emit('event', id);
    },loadCategories(){
      axios.get(process.env.VUE_APP_SCHEME+'://'+process.env.VUE_APP_HOST+process.env.VUE_APP_PORT+process.env.VUE_APP_PREFIX+'/categories')
      .then(response => {
          this.items=response.data;
      })
      .catch()
    }

  },beforeMount(){
    this.loadCategories()
  }
};
</script>

<style lang="css">
@import url("https://fonts.googleapis.com/css?family=Alfa+Slab+One");
@import url('https://fonts.googleapis.com/css?family=Lato:300,400');
@import url('https://fonts.googleapis.com/css?family=Oswald:300,400');


.drawer {
  color: #4a69bd;
  background-color: #4a69bd;

}

.myTitle {
font-family: 'Oswald', sans-serif;
font-weight: 300;
  font-size: 27px;

}

.categories{
  background-color: white
}
</style>

<template lang="html">
  <div class="myClass">
    <v-toolbar color="white1" light app dense flat height="58px">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"  dark  color="gray4" class="text--white"></v-toolbar-side-icon>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">

        <v-btn flat to='./SignIn'>Iniciar Sesion</v-btn>
        <v-btn flat to='./Home'>Home</v-btn>
        <v-btn flat to='./SignUp'>Registrar</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-navigation-drawer
      class="gray4 drawer"
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
  <v-img :src="require('../img/logo.png')" width="60%"></v-img>
  <br>
  <h1 class="categoryTitle">Categorias</h1>
      
       <v-divider></v-divider>
      <template v-for="item in items">
        <v-list-tile
          :key="item.title"
          class="categories black--text"
          light
        >

          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content
          
           >
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>

        </v-list-tile>
        <v-divider :key="item.title"></v-divider>
      </template>
      </v-list>
    </v-navigation-drawer>

</div>
</template>

<script>
//                    <v-img :src="require('../img/logo.png')" height="20%"></v-img>

export default {
  name: "Navbar",
  data() {
    return {
      drawer: null,
      items: [
        { title: "Sector Salud", icon: "dashboard" },
        { title: "mascotas", icon: "question_answer" },
        { title: "via publica", icon: "question_answer" }
      ]
    };
  }
};
</script>

<style lang="css">
@import url("https://fonts.googleapis.com/css?family=Alfa+Slab+One");

.drawer {
  color: #4a69bd;
  background-color: #4a69bd;

}

.myTitle {
  font-family: "Alfa Slab One", cursive;
  font-size: 25px;
  margin: 5%
}

.categoryTitle {
  margin-bottom: 2%
}

.categories{
  background-color: white
}
</style>

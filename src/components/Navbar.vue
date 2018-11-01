<template lang="html">
  <div class="myClass">
    <v-toolbar color="gray4" dark app dense flat height="58px">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"  dark  color="gray4" class="text--white"></v-toolbar-side-icon>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">

        <v-btn flat to='./SignIn'>Iniciar Sesion</v-btn>
        <v-btn flat to='./Home'>Home</v-btn>
        <v-btn flat to='./SignUp'>Registrar</v-btn>
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
             <v-img :src="require('../img/logo.png')"></v-img>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title class="myTitle text--primary">Conoce tu Congreso</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>


    <v-list color="primary" class="white1">
                          <v-divider></v-divider>

            <v-list-group
              v-for="item in items"
              v-model="item.active"
              :key="item.title"
              :prepend-icon="item.action"
              no-action
            >

              <v-list-tile slot="activator">
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
  
              <v-list-tile
                v-for="subItem in item.items"
                :key="subItem.title"
              >
                <v-list-tile-content>
                  <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
                </v-list-tile-content>
  
                <v-list-tile-action>
                  <v-icon>{{ subItem.action }}</v-icon>
                </v-list-tile-action>
              </v-list-tile>
            </v-list-group>
          </v-list>


    </v-navigation-drawer>

</div>
</template>

<script>
//<v-img :src="require('../img/logo.png')" height="20%"></v-img>

export default {
  name: "Navbar",
  data() {
    return {
      drawer: null,
            items: [
        {
          action: 'color_lens',
          title: 'Cultura',
          active: true,
          items: [
            { title: 'Cultura Civica' },
            { title: 'Eventos Publicos' },
          ]
        },
        {
          action: 'healing',
          title: 'Sector Salud',
          items: [
            { title: 'Salud Publica' },
            { title: 'Alimentacion' }
          ]
        },
        {
          action: 'domain',
          title: 'Gobierno de Jalisco',
          items: [
            { title: 'Constitucion Politica' },
            { title: 'Congreso Estatal' }
          ]
        },
        {
          action: 'train',
          title: 'Transporte',
          items: [
            { title: 'Transporte Publico' },
            { title: 'Transporte Privado' }
          ]
        }
      ]
    };
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

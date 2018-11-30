<template>
  <v-layout class="title">
    <v-flex xs12 sm10 offset-sm1>
      <v-card flat >
        <v-layout row wrap>
            <v-flex xs12 sm10 offset-sm1>
            <v-card-title primary-title>
            </v-card-title>
                <v-card-text class="px-0">
                    <v-container grid-list-xs>
                        <v-layout col justify-center>
                
                            <h1 class="customTitle"> Conoce Tu Congreso </h1>
                        </v-layout>
                        <br>
                        <br>
                        <v-layout col justify-center>
                            <p class="description">Una plataforma para ver el estatus de las iniciativas del Congreso de Jalisco.</p>
                        </v-layout>
                        <br>
                        <br>
                        <br>
                        <br>
                        <v-layout row wrap justify-center>
                            <v-spacer></v-spacer>
                            <v-btn depressed large outline to='./signin' color="accent">Iniciar Sesión</v-btn>
                            <v-spacer></v-spacer>
                            <v-btn depressed large outline to='./signup' color="accent">Crear una Cuenta</v-btn>
                            <v-spacer></v-spacer>
                        </v-layout>
                    </v-container>
                </v-card-text>
            </v-flex>
        </v-layout>  
    
        <v-divider></v-divider>
        <v-card-actions>

        <v-layout pa-2>
            <v-spacer></v-spacer>
                <v-btn flat small color="primary" to='./main'>Continuar sin Iniciar Sesión</v-btn>
            <v-spacer></v-spacer>
            
        </v-layout>

            
        </v-card-actions>
     </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
    
export default {
    name: 'welcome'
}
</script>

<style lang="css">
@import url('https://fonts.googleapis.com/css?family=Alfa+Slab+One');


.description{
    font-family: 'Roboto Condensed', sans-serif;
    text-align: center
}    

.customTitle{
    font-family: 'Roboto Condensed', sans-serif;
    text-align: center;
    font-weight: bold; 
    color: #2c3e50;
}    
</style>
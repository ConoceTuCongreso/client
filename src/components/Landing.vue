<template >
<v-flex class="leftCosa" fill-height align-center>
    <v-layout row class=".colored" height="100%" fill-height align-center>
      <v-flex xs5 class=".colored" height="100%" fill-height align-center>
        <v-card flat tile color="gray4" class=".colored" height="100%">
          <v-card-text>
    
             <v-img :src="require('../img/logo.png')"></v-img>

          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs7 fill-height class=".colored" height="100%" align-center justify-center>
        <v-card flat tile color="white2" fill-height class=".colored" height="100%" align-center>
          <v-card-text>
                <router-view></router-view>

          </v-card-text>
          
        </v-card>
      </v-flex>
    </v-layout>
  </v-flex>
</template>

<script>
    
export default {
    name: 'landing'
}
</script>

<style lang="css">

.leftCosa{
background-color: red;
    height: 100%;
    width: 100%;
    padding: 0%;
    margin: 0%;
    max-width: 100%
}

.colored{
    height: 100%
}
    
</style>
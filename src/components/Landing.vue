<template >
<v-flex class="leftCosa" fill-height align-center>
    <v-layout row class=".colored" fill-height align-center>
      <v-flex xs5 class=".colored" fill-height align-center>
        <v-card flat tile color="gray4" class=".colored" height="100%">
          <v-layout row fill-height align-center>
            <v-img :src="require('../img/Logo.svg')"></v-img>
          </v-layout>
        </v-card>
      </v-flex>
      <v-flex xs7 align-center justify-center>
      <v-layout align-center justify-center>
      <router-view></router-view>
      </v-layout>          
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
background-color: #ecf0f1;
    height: 100%;
    width: 100%;
    padding: 0%;
    margin: 0%;
    max-width: 100%
}
.rightCosa{
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
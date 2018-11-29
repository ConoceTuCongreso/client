<template lang="html">
<v-container fluid grid-list-md>
    <v-layout row wrap  v-if="status=='Concluido'">
        <v-flex
         
          xs3
          v-for="(vote,i) in votes"
          :key="i">
          <v-card >
            <v-card-title ><h4>{{ vote.value }}</h4></v-card-title>
            <v-divider></v-divider>
            <v-list class="list" dense>
              <v-list-tile
                v-for="(voter, i) in vote.congresspeople"
                :key="i">
                <v-list-tile-content>
                  {{ voter }}
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout justify-center  v-if="status!='Concluido'">
        <br>
        <h2>Esta iniciativa no esta en la etapa de votación.</h2>
        <br>
      </v-layout>
    </v-container>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Timeline',
  props:{
    id:0,
    status:''
  },
  data: () => ({
    votes:[]
  }),
  beforeMount(){
    axios.get(process.env.VUE_APP_SCHEME+'://'+process.env.VUE_APP_HOST+process.env.VUE_APP_PORT+process.env.VUE_APP_PREFIX+'/initiatives/'+this.id+'/votes')
    .then(response => {
        this.votes=response.data;
    })
    .catch()
  }
}
</script>

<style lang="css">
  .list {
    overflow-y:scroll;
    height:300px
  }
</style>
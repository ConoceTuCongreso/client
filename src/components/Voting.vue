<template lang="html">
<v-container fluid grid-list-md>
    <v-layout row wrap>
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
    </v-container>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Timeline',
  props:{
    id:0,
  },
  data: () => ({
    votes:[]
  }),
  beforeMount(){
    axios.get('https://conocetucongreso.me/api/initiatives/'+this.id+'/votes')
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
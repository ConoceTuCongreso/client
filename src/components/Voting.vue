<template lang="html">
<v-container fluid grid-list-md>
    <v-layout row wrap>
        <v-flex
          xs3
          v-for="vote in votes"
        >
          <v-card >
            <v-card-title ><h4>{{ vote.position }}</h4></v-card-title>
            <v-divider></v-divider>
            <v-list class="list" dense>
              <v-list-tile
                v-for="(voter, i) in vote.votees"
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
export default {
  name: 'Timeline',
  props:{
    votes:Array
  },
  data: () => ({
    })
}
</script>

<style lang="css">
  .list {
    overflow-y:scroll;
    height:300px
  }
</style>
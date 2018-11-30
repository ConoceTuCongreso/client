<template lang="html">

  <v-layout row wrap>
    <v-flex xs12 v-for="(initiative,i) in initiatives" :key="i">
      <InitiativeCard :initiative="initiative"/>
      <br>
    </v-flex>
  </v-layout>
</template>

<script>

import InitiativeCard from './InitiativeCard.vue'
import axios from 'axios';

export default {
    name: 'Home',
    data: () => ({
        initiatives: []
    }),
    components: {
        InitiativeCard
    },
    methods:{
        loadInitiatives(id){
            axios.get(process.env.VUE_APP_SCHEME+'://'+process.env.VUE_APP_HOST+process.env.VUE_APP_PORT+process.env.VUE_APP_PREFIX+'/initiatives?category_id='+id)
        .then(response => {
            this.initiatives=response.data;
        })
        .catch()
        }
    },
    beforeMount(){
        this.loadInitiatives(5)
    },
    mounted(){
        this.$root.$on('event', data => {
            this.loadInitiatives(data);
        });
    }
}
</script>

<style lang="css">

</style>

<template class="justify-center">
  <v-layout justify-center>
    <embed :src=url width="800" height="800"/>
  </v-layout>
</template>

<script>
export default {
    name: 'InitiativeDocument',
    props:{
      url:String
    },
    components: {
        
    }
}

</script>
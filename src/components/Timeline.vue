<template lang="html">
    <v-timeline>
      <v-timeline-item
        v-for="(date, i) in timeline"
        :key="i"
        small
        :color= "setProgressColor(date.status)"
      >
        <span
          slot="opposite"
          :class="`headline font-weight-bold `"
          v-text="date.date"
        ></span>
        <div class="py-3">
          <h2 :class="`headline font-weight-light text-xs-center mb-3`" v-text="date.status"></h2>
          <div :class ="`text-xs-center`" v-text="date.condition"></div>
        </div>
      </v-timeline-item>
    </v-timeline>
</template>

<script>
export default {
  name: 'Timeline',
   props:{
    timeline:Array
  },
  data: () => ({
    
    }),
    methods:{
      setProgressColor(status) {
        switch(status){
          case "Ingreso Administrativo":
            return "#e74c3c";
          case "Estudio":
            return "#f1c40f";
          case "Concluido":
            return "#2ecc71";
          default:
            return "#e74c3c";
        }
      }
    }
}
</script>

<style lang="css">
</style>
<template lang="html">
    <v-timeline>
      <v-timeline-item
        v-for="(date, i) in dates"
        :color="date.color"
        :key="i"
        small
      >
        <span
          slot="opposite"
          :class="`headline font-weight-bold ${date.color}--text`"
          v-text="date.date"
        ></span>
        <div class="py-3">
          <h2 :class="`headline font-weight-light text-xs-center mb-3 ${date.color}--text`" v-text="date.state"></h2>
          <div :class ="`text-xs-center`" v-text="date.condition"></div>
        </div>
      </v-timeline-item>
    </v-timeline>
</template>

<script>
export default {
  name: 'Timeline',
  data: () => ({
      dates: [
      {
        color: 'red',
        date: '01/11/2015',
        state: 'Ingreso Administrativo',
        condition: 'Para agendar en sesión'
      },
      {
        color: 'orange',
        date: '03/11/2015',
        state: 'Estudio',
        condition: 'En comisión'
      },
      {
        color: 'cyan',
        date: '11/03/2016',
        state: 'Concluido',
        condition: 'Aprobado'
      },
      {
        color: 'green',
        date: '15/03/2016',
        state: 'Entrada en vigor',
        condition: 'Publicado en el Diario Oficial de la Federación'
      }
    ]
    })
}
</script>

<style lang="css">
</style>
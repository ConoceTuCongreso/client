<template lang="html">
<v-container fluid grid-list-md>
      <v-data-iterator
        :items="voters"
        content-tag="v-layout"
        :hide-actions="voters.length === 4"
        row
        wrap
      >
        <v-flex
          slot="item"
          slot-scope="props"
          xs12
          sm6
          md4
          lg3
        >
          <v-card>
            <v-card-title><h4>{{ props.item.name }}</h4></v-card-title>
            <v-divider></v-divider>
            <v-list dense>
              <v-list-tile
                v-for="(voter, i) in props.item.voters"
                :key="i">
                <v-list-tile-content>
                  {{ voter }}
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-card>
        </v-flex>
      </v-data-iterator>
    </v-container>
</template>

<script>
export default {
  name: 'Timeline',
  data: () => ({
      voters: [
      {
        value: false,
        name: 'A favor',
        voters:[
          "Fernanda Espinoza Contreras",
          "Esteban Ramírez Antonio",
          "Juan Márquez Del Castillo",
          "Mariana Gallo Cuadras",
          "Jorge Sandoval Iñiguez"
        ]
      },
      {
        value: false,
        name: 'En contra',
        voters:[
          "Martha López Sánchez",
          "Pablo Pérez Albán",
          "José Figueroa Valencia",
          "Andrea Cairo Acosta",
          "Jorge Sandoval Becerra"
        ]
      },
      {
        value: false,
        name: 'Abstención',
        voters:[
          "Felicia Nuñez Díaz",
          "Gabriela Azpeitia Orendain",
          "Eros Jiménez Larios",
          "Xavier Alatorre Flores",
          "Estefanía Quiroz Carvallo"
        ]
      },
      {
        value: false,
        name: 'Sin participación',
        voters:[
          "Saúl Galindo Palazola",
          "Hugo Contreras Zepeda",
          "Cecilia González Gómez",
          "Omar Hernández Hernández",
          "Kehila Abigail Ku Escalante"
        ]
      }
    ]
    })
}
</script>

<style lang="css">
</style>
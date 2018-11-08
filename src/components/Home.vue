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

export default {
  name: 'Home',
  data(){
		return{
      initiatives:[
    { 
        "initiative_id":"1",
        "description":"Iniciativa de Ley de Coordinación de Cultura Cívica para el Estado de Jalisco.",
        "status": "Estudio",
        "doc_url": "http://congresoweb.congresojal.gob.mx/infolej/agendakioskos/documentos/sistemaintegral/estados/58168.pdf",
        "author": "Salvador Caro Cabrera",
        "dates": [
            {
                "date": "01/11/2015",
                "status": "Ingreso Administrativo",
                "condition": "Para agendar en sesión"
            },
            {
                "date": "03/11/2015",
                "status": "Estudio",
                "condition": "En comisión"
            },
            {
                "date": "11/03/2016",
                "status": "Concluido",
                "condition": "Aprobado"
            }
        ],
        "votes": [
            {   
                "position":"a favor",
                "votees": [
                    "Mónica Almeida López",
                    "Juan Carlos Anguiano Orozco",
                    "Jorge Arana Arana",
                    "Salvador Arellano Guzmán",
                    "Enrique Aubry de Castro Palomino",
                    "Édgar Oswaldo Bañales Orozco",
                    "Martha Susana Barajas del Toro",
                    "Mario Hugo Castellanos Ibarra",
                    "Hugo Contreras Zepeda",
                    "María del Rocío Corona Nakamura",
                    "María Elena de Anda Gutiérrez",
                    "Ismael Del Toro Castro",
                    "Claudia Delgadillo González",
                    "José Gacría Mora",
                    "Cecilia González Gómez",
                    "Ramón Demetrio Guerrero Martínez",
                    "Héctor Alejandro Hermosillo González",
                    "Omar Hernández Hernández",
                    "Kehila Abigail Ku Escalante",
                    "Antonio López Orozco",
                    "María de Lourdes Martínez Pizano",
                    "Adriana Gabriela Medina Ortíz",
                    "Miguel Ángel Monraz Ibarra",
                    "Liliana Guadalupe Morones Vargas",
                    "Fela Patricia Pelayo López",
                    "María del Pilar Pérez Chavira",
                    "Erika Lizbeth Ramírez Pérez",
                    "María del Consuelo Robles Sierra"]
              },{
                "position":"en contra",
                "votees": []
              },{
                "position":"abstencion",
                "votees": []
              },{
                "position":"sin participacion",
                "votees": [
                    "Juana Ceballos Guzmán",
                    "Isaías Cortés Berumen",
                    "Irma De Anda Licea",
                    "Saúl Galindo Plazola",
                    "José Pedro Kumamoto Aguilar",
                    "María del Refugio Ruiz Moreno"
                ]
            }
        ]
    },
    { 
        "initiative_id":"2",
        "description":"Iniciativa de ley que aprueba la Ley de Ingresos del Gobierno del Estado de Jalisco, para el ejercicio fiscal de 2016.",
        "status": "Concluido",
        "doc_url": "http://congresoweb.congresojal.gob.mx/infolej/agendakioskos/documentos/sistemaintegral/estados/56633.pdf",
        "author": "Jorge Aristóteles Sandoval Díaz",
        "dates": [
            {
                "date": "02/11/2015",
                "status": "Ingreso Administrativo",
                "condition": "Para agendar en sesión"
            },
            {
                "date": "04/11/2015",
                "status": "Estudio",
                "condition": "En comisión"
            },
            {
                "date": "15/12/2015",
                "status": "Concluido",
                "condition": "Aprobado"
            }
        ],
        "votes": [
            {   
                "position":"a favor",
                "votees": [
                    "Mónica Almeida López",
                    "Juan Carlos Anguiano Orozco",
                    "Jorge Arana Arana",
                    "Salvador Arellano Guzmán",
                    "Enrique Aubry de Castro Palomino",
                    "Édgar Oswaldo Bañales Orozco",
                    "Martha Susana Barajas del Toro",
                    "Mario Hugo Castellanos Ibarra",
                    "Hugo Contreras Zepeda",
                    "María del Rocío Corona Nakamura",
                    "María Elena de Anda Gutiérrez",
                    "Ismael Del Toro Castro",
                    "Claudia Delgadillo González",
                    "José Gacría Mora",
                    "Cecilia González Gómez",
                    "Ramón Demetrio Guerrero Martínez",
                    "Héctor Alejandro Hermosillo González",
                    "Omar Hernández Hernández",
                    "Kehila Abigail Ku Escalante",
                    "Antonio López Orozco",
                    "María de Lourdes Martínez Pizano",
                    "Adriana Gabriela Medina Ortíz",
                    "Miguel Ángel Monraz Ibarra",
                    "Liliana Guadalupe Morones Vargas",
                    "Fela Patricia Pelayo López",
                    "María del Pilar Pérez Chavira",
                    "Erika Lizbeth Ramírez Pérez",
                    "María del Consuelo Robles Sierra"]
              },{
                "position":"en contra",
                "votees": []
              },{
                "position":"abstencion",
                "votees": []
              },{
                "position":"sin participacion",
                "votees": [
                    "Juana Ceballos Guzmán",
                    "Isaías Cortés Berumen",
                    "Irma De Anda Licea",
                    "Saúl Galindo Plazola",
                    "José Pedro Kumamoto Aguilar",
                    "María del Refugio Ruiz Moreno"
                ]
            }
        ]
    },
    { 
        "initiative_id":"3",
        "description":"Iniciativa de ley que reforma el artículo 99 primer párrafo y deroga los artículos 100, 101, 102, 103 104, y 105 de la Constitución Política del Estado de Jalisco.",
        "status": "Concluido",
        "doc_url": "http://congresoweb.congresojal.gob.mx/infolej/agendakioskos/documentos/sistemaintegral/estados/62195.pdf",
        "author": "Corona Nakamura María del Rocío",
        "dates": [
            {
                "date": "10/11/2015",
                "status": "Ingreso Administrativo",
                "condition": "Para agendar en sesión"
            },
            {
                "date": "13/11/2015",
                "status": "Estudio",
                "condition": "En comisión"
            },
            {
                "date": "06/07/2015",
                "status": "Estudio",
                "condition": "Primera Lectura"
            },
            {
                "date": "14/06/2016",
                "status": "Ingreso Administrativo",
                "condition": "Segunda Lectura"
            },
            {
                "date": "14/06/2016",
                "status": "Estudio",
                "condition": "En reserva de votos constitucionales"
            },
            {
                "date": "11/08/2016",
                "status": "Concluido",
                "condition": "Aprobado"
            }
        ],
        "votes": [
            {   
                "position":"a favor",
                "votees": [
                    "Mónica Almeida López",
                    "Juan Carlos Anguiano Orozco",
                    "Jorge Arana Arana",
                    "Salvador Arellano Guzmán",
                    "Enrique Aubry de Castro Palomino",
                    "Édgar Oswaldo Bañales Orozco",
                    "Martha Susana Barajas del Toro",
                    "Mario Hugo Castellanos Ibarra",
                    "Hugo Contreras Zepeda",
                    "María del Rocío Corona Nakamura",
                    "María Elena de Anda Gutiérrez",
                    "Ismael Del Toro Castro",
                    "Claudia Delgadillo González",
                    "José Gacría Mora",
                    "Cecilia González Gómez",
                    "Ramón Demetrio Guerrero Martínez",
                    "Héctor Alejandro Hermosillo González",
                    "Omar Hernández Hernández",
                    "Kehila Abigail Ku Escalante",
                    "Antonio López Orozco",
                    "María de Lourdes Martínez Pizano",
                    "Adriana Gabriela Medina Ortíz",
                    "Miguel Ángel Monraz Ibarra",
                    "Liliana Guadalupe Morones Vargas",
                    "Fela Patricia Pelayo López",
                    "María del Pilar Pérez Chavira",
                    "Erika Lizbeth Ramírez Pérez",
                    "María del Consuelo Robles Sierra"]
              },{
                "position":"en contra",
                "votees": []
              },{
                "position":"abstencion",
                "votees": []
              },{
                "position":"sin participacion",
                "votees": [
                    "Juana Ceballos Guzmán",
                    "Isaías Cortés Berumen",
                    "Irma De Anda Licea",
                    "Saúl Galindo Plazola",
                    "José Pedro Kumamoto Aguilar",
                    "María del Refugio Ruiz Moreno"
                ]
            }
        ]
    }
]
		}
	},
  components: {
    InitiativeCard
  }
}
</script>

<style lang="css">

</style>

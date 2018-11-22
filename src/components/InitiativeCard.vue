<template>
  <v-layout row >
    <v-flex xs10 offset-xs1>

      <v-card>

        <v-card-title>
          <v-flex xs12 sm11>
            <div class="headline">{{initiative.description}}</div>
            <span class="grey--text">Ingresado Por: {{initiative.author}}</span>
          </v-flex>
          <v-flex xs12 sm1>
            <v-card-actions>
              <v-btn icon @click="show = !show">
                <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
              </v-btn>
            </v-card-actions>
          </v-flex>
        </v-card-title>

        <v-divider></v-divider>

        <v-flex xs10 offset-xs1>
          <v-progress-linear
            color="#1abc9c"
            height="20"
            :value=val
          ></v-progress-linear>
        </v-flex>

        <v-layout xs10 offset-xs1 row class="text-xs-center">
          
          <v-flex xs3 offset-xs2>
            <h3 class="headline">Entrada</h3>
          </v-flex>
          <v-flex xs3 offset-xs1>
            <h3 class="headline">En estudio</h3>
          </v-flex>
          <v-flex xs2 offset-xs1>
            <h3 class="headline">Conclusion</h3>
          </v-flex>
        </v-layout>
        <br>

        <v-slide-y-transition>
          <v-layout v-show="show">
            <v-tabs class="tabmenu">
              <v-flex xs12 class="tabcolor" row>
                <v-tab class="white--text tab" :href="'#votantes'" :key="1">
                  <v-icon dark>how_to_reg</v-icon>
                  Votantes
                </v-tab >

                <v-tab class="white--text tab" :href="'#lTiempo'" :key="2">
                  <v-icon dark>query_builder</v-icon>
                  Linea del tiempo
                </v-tab>

                <v-tab class="white--text tab"  :href="'#documento'" :key="3">
                  <v-icon dark>book</v-icon>
                  Documento
                </v-tab>

                <v-tab class="white--text tab" fill-height :href="'#firma'" :key="4">
                  <v-icon dark>how_to_vote</v-icon>
                  Firmar
                </v-tab>
              </v-flex>
              
                
                <v-tabs-items>
                  <v-tab-item :id="'votantes'" :key="1">
                    <v-card flat class="tabmenu">
                      <Voting :votes="initiative.votes"/>
                    </v-card>
                  </v-tab-item>
                  
                  <v-tab-item :id="'lTiempo'" :key="2">
                    <v-card flat  class="tabmenu">
                      <Timeline :timeline="initiative.dates"/>
                    </v-card>
                  </v-tab-item>
                  <v-tab-item :id="'documento'" :key="3">
                    <v-card flat>
                      <InitiativeDocument :url="initiative.doc_url"/>
                    </v-card>
                  </v-tab-item>
                  <v-tab-item :id="'firma'" :key="4">
                    <v-card flat>
                      <InitiativeSign :initiativename="initiative.description" />
                    </v-card>
                  </v-tab-item>
                </v-tabs-items>
               
            </v-tabs>
          </v-layout>
        </v-slide-y-transition>

      </v-card>

    </v-flex>
  </v-layout>
</template>

<script>
import Timeline from './Timeline'
import InitiativeSign from './InitiativeSign'
import Voting from './Voting'
import InitiativeDocument from './InitiativeDocument.vue'

  export default {
    name: 'InitiativeCard',
    data: () => ({
      show: false,
      val:  0
    }),
    props: {
      initiative: Object,
    },
    components: {
      Voting,
      Timeline,
      InitiativeSign,
      InitiativeDocument
    },
    methods:{
      setProgressValue(status) {
        switch(status){
          case "Ingreso Administrativo":
            this.val=33;
            break;
          case "Estudio":
            this.val=66;
            break;
          case "Concluido":
            this.val=100;
            break;
          default:
            this.val=0;
        }
      }
    },
    beforeMount(){
      this.setProgressValue(this.initiative.status)
    }
  }

</script>

<style>
.tabmenu{
  width:100%;
}
.tabcolor{
  background-color: #16a085;
}
.tab{
  width: 24%
}
</style>

<template>
  <v-layout row >
    <v-flex xs10 offset-xs1>

      <v-card>

        <v-card-title>
          <v-flex xs12 sm11>
            <div class="headline">Iniciativa de Ley de Coordinación de Cultura Cívica para el Estado de Jalisco.</div>
            <span class="grey--text">Ingresado Por: Salvador Caro Cabrera</span>
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
            value="100"
          ></v-progress-linear>
        </v-flex>

        <v-layout xs10 offset-xs1 row class="text-xs-center">
          
          <v-flex xs2  >
            <h3 class="headline">Entrada</h3>
          </v-flex>
          <v-flex xs4>
            <h3 class="headline">En estudio</h3>
          </v-flex>
          <v-flex xs4>
            <h3 class="headline">Conclusion</h3>
          </v-flex>
          <v-flex xs2 class="tab">
            <h3 class="headline">En vigor</h3>
          </v-flex>
        </v-layout>
        <br>

        <v-slide-y-transition xs12>
          <v-layout xs12 justify-center row v-show="show">

            <v-tabs  xs12>

              <v-layout xs12 class="tabmenu " row>
                <v-tab class="tab white--text"  :href="'#votantes'" :key="1">
                  <v-icon dark>how_to_reg</v-icon>
                  Votantes
                  
                </v-tab >

                <v-tab class="tab white--text" :href="'#lTiempo'" :key="2">
                  <v-icon dark>query_builder</v-icon>
                  Linea del tiempo
                  
                </v-tab>

                <v-tab class="tab white--text"  :href="'#documento'" :key="3">
                  <v-icon dark>book</v-icon>
                  
                  Documento
                  
                </v-tab>

                <v-tab class="tab white--text"  :href="'#firma'" :key="4">
                  <v-icon dark>how_to_vote</v-icon>
                  Firmar
                </v-tab>
              </v-layout>

              
                
                <v-tabs-items v-model="model">
                 
                  <v-tab-item :id="'votantes'" :key="1">
                    <v-card flat class="tabmenu">
                      <Voting />
                    </v-card>
                  </v-tab-item>
                  
                  <v-tab-item :id="'lTiempo'" :key="2">
                    <v-card flat  class="tabmenu">
                      <Timeline />
                    </v-card>
                  </v-tab-item>
                  <v-tab-item :id="'documento'" :key="3">
                    <v-card flat>
                      <InitiativeDocument/>
                    </v-card>
                  </v-tab-item>
                  <v-tab-item :id="'firma'" :key="4">
                    <v-card flat>
                      <InitiativeSign />
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
      show: false
    }),
    components: {
      Voting,
      Timeline,
      InitiativeSign,
      InitiativeDocument
    }
  }

</script>

<style>
.tab{
  width: 25%;
  margin-left: 3%
}
.tabmenu{
  background-color: #16a085;
  width:900px
}
</style>

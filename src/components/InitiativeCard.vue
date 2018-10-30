<template>
  <v-layout row >
    <v-flex xs12 sm10 offset-sm1>

      <v-card>

        <v-card-title>
          <v-flex xs12 sm11>
            <div class="headline">Top western road trips</div>
            <span class="grey--text">1,000 miles of wonder</span>
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
            color="success"
            height="20"
            value="100"
          ></v-progress-linear>
        </v-flex>

        <v-layout xs10 offset-xs1 row class="text-xs-center">
          
          <v-flex xs2  >
            <h3 class="headline">|</h3>
          </v-flex>
          <v-flex xs4>
            <h3 class="headline">|</h3>
          </v-flex>
          <v-flex xs4>
            <h3 class="headline">|</h3>
          </v-flex>
          <v-flex xs2 class="tab">
            <h3 class="headline">|</h3>
          </v-flex>
        </v-layout>
        <br>

        <v-slide-y-transition>
          <v-layout justify-center row v-show="show">

            <v-tabs >

              <v-layout xs12 class="tabmenu" row>
                <v-tab class="tab"  :href="'#votantes'" :key="1">
                  Votantes
                </v-tab >

                <v-tab class="tab" :href="'#lTiempo'" :key="2">
                  Linea del tiempo
                </v-tab>

                <v-tab class="tab"  :href="'#documento'" :key="3">
                  Documento
                </v-tab>

                <v-tab class="tab"  :href="'#firma'" :key="4">
                  Firmar
                </v-tab>
              </v-layout>

              
                
                <v-tabs-items v-model="model">
                 
                  <v-tab-item :id="'votantes'" :key="1">
                    <v-card flat>
                      <v-card-text >Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nulla nam vitae adipisci dolorem commodi architecto asperiores repellat reprehenderit sapiente! Porro placeat corrupti commodi consequuntur facere, in excepturi est quaerat.</v-card-text>
                    </v-card>
                  </v-tab-item>
                  
                  <v-tab-item :id="'lTiempo'" :key="2">
                    <v-card flat>
                      <v-card-text > Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis nostrum earum tempora dolore sapiente praesentium! Odit culpa nesciunt explicabo rerum. Consectetur, aspernatur atque vitae in labore quam ad consequuntur ex?</v-card-text>
                    </v-card>
                  </v-tab-item>
                  <v-tab-item :id="'documento'" :key="3">
                    <v-card flat>
                      <v-card-text ><InitiativeDocument/></v-card-text>
                    </v-card>
                  </v-tab-item>
                  <v-tab-item :id="'firma'" :key="4">
                    <v-card flat>
                      <v-card-text >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque saepe, dolores odit, ipsa, natus voluptates maxime molestiae rerum et minus expedita velit? Laborum nesciunt sequi optio inventore odio aliquid eligendi?</v-card-text>
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
import InitiativeDocument from './InitiativeDocument.vue'

export default {
  name: 'InitiativeCard',
  components: {
  InitiativeDocument
  },
  data: () => ({
    show: false
  })
}

</script>

<style>
.tab{
  width: 25%;
  margin-left: 3%
}
.tabmenu{
  background-color: #2962ff
}
</style>

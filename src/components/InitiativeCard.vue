<template>
  <v-layout row >
    
    <v-flex xs10 offset-xs1>
      
      <v-card>
        
        <v-card-title no-action>
          <v-flex xs12>
            
            <div class="headline">{{initiative.description}}</div>
            <span class="grey--text">Ingresado Por: {{initiative.author}}</span>
          </v-flex>
          
        </v-card-title>

        <v-divider></v-divider>
        
        <v-layout row>
          <v-flex xs10>
            <v-stepper class="elevation-0" alt-labels>
              <v-stepper-header>
                <v-stepper-step complete color="accent" step="" v-if="step1=='complete'" >Ingreso</v-stepper-step>
                <v-stepper-step step="" v-if="step1=='pending'">Ingreso</v-stepper-step>

                <v-divider></v-divider>

                <v-stepper-step complete color="accent" step="" v-if="step2=='complete'">Estudio</v-stepper-step>
                <v-stepper-step step="" v-if="step2=='pending'">Estudio</v-stepper-step>

                <v-divider></v-divider>

                <v-stepper-step complete color="accent" step="" v-if="step3=='complete'">Conclusion</v-stepper-step>
                <v-stepper-step step="" v-if="step3=='pending'">Conclusion</v-stepper-step>
              </v-stepper-header>
            </v-stepper>
          </v-flex>

          
          <v-layout col wrap xs2>

            <v-layout row align-center fill-height justify-end> 
              <v-btn flat icon @click="addToFavorite()" color="grey">
                <v-icon>star</v-icon>
              </v-btn>
            </v-layout>

            <v-layout row align-center fill-height>
              <v-btn icon @click="showInitiativeInfo = !showInitiativeInfo">
                <v-icon>{{ showInitiativeInfo ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
              </v-btn>
            </v-layout>
            
          </v-layout>
       
        </v-layout>

        <v-slide-y-transition>
          <v-layout fill-height v-show="showInitiativeInfo">
            <v-tabs class="tabmenu tab">

              <v-layout fill-height xs12  class="gray3 tab" row>
                <v-flex class="tab"> 
                  <v-tab class="white--text tab" :href="'#votantes'" :key="1">
                    <v-icon dark>how_to_reg</v-icon>
                    Votantes
                  </v-tab>
                </v-flex>

                <v-flex class="tab">
                  <v-tab class="white--text tab" :href="'#lTiempo'" :key="2">
                    <v-icon dark>query_builder</v-icon>
                    Linea del tiempo
                  </v-tab>
                </v-flex>

                <v-flex class="tab">
                  <v-tab class="white--text tab"  :href="'#documento'" :key="3">
                    <v-icon dark>book</v-icon>
                    Documento
                  </v-tab>
                </v-flex>

                <v-flex class="tab">
                  <v-tab class="white--text tab" fill-height :href="'#firma'" :key="4">
                    <v-icon dark>how_to_vote</v-icon>
                    Firmar
                  </v-tab>
                </v-flex>
              </v-layout>
                
                <v-tabs-items>
                  <v-tab-item :value="'votantes'" :key="1">
                    <v-card flat color="white" >
                      <Voting :id="initiative.id" :status="initiative.status"/>
                    </v-card>
                  </v-tab-item>
                  
                  <v-tab-item :value="'lTiempo'" :key="2">
                    <v-card flat color="white" >
                      <Timeline :timeline="initiative.dates"/>
                    </v-card>
                  </v-tab-item>
                  <v-tab-item :value="'documento'" :key="3">
                    <v-card flat color="white" >
                      <InitiativeDocument :url="initiative.document_url"/>
                    </v-card>
                  </v-tab-item>
                  <v-tab-item :value="'firma'" :key="4">
                    <v-card flat color="white" >
                      <InitiativeSign :initiativename="initiative.description" :initiativeID="initiative.id" />
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
      showInitiativeInfo: false,
      step1: 'pending',
      step2: 'pending',
      step3: 'pending'
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
            this.step1= 'complete';
            this.step2= 'pending';
            this.step3= 'pending';
            break;
          case "Estudio":
            this.step1= 'complete';
            this.step2= 'complete';
            this.step3= 'pending';
            break;
          case "Concluido":
            this.step1= 'complete';
            this.step2= 'complete';
            this.step3= 'complete';
            break;
          default:
            this.val=0;
        }
      },

      addToFavorite(){
        
      }, 
    },
    mounted(){
      this.setProgressValue(this.initiative.status)
    },
    watch:{
      initiative: function(val){
        this.setProgressValue(val.status);
      }

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
  width: 100%;
  height: 100%;
  max-width: 100%;
}
</style>

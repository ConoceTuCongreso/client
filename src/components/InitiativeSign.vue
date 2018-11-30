<template lang="html">
    <v-container grid-list-md text-xs-center >
      <v-dialog
              v-model="dialogUnauthorized"
              width="500"
          >
              <v-card>
              <v-card-title
                  class="headline grey lighten-2"
                  primary-title
                  text-xs-center
              >
                  Error
              </v-card-title>
      
              <v-card-text>
                  Necesitas iniciar sesion para firmar la iniciativa
              </v-card-text>
      
              <v-divider></v-divider>
      
              <v-card-actions >
                  <v-spacer></v-spacer>
                  
                  <v-btn
                  color="blue"
                  class="white--text"
                  @click="goToSignIn()"
                  >
                  Iniciar sesion
                  </v-btn>
              </v-card-actions>
              </v-card>
          </v-dialog>


      <v-dialog
              v-model="dialogConflict"
              width="500"
          >
              <v-card>
              <v-card-title
                  class="headline grey lighten-2"
                  primary-title
                  text-xs-center
              >
                  Error
              </v-card-title>
      
              <v-card-text>
                  Esta iniciativa ya ha sido firmada con esta credencial
              </v-card-text>
      
              <v-divider></v-divider>
      
              <v-card-actions >
                  <v-spacer></v-spacer>
                  
                  <v-btn
                  color="blue"
                  class="white--text"
                  @click="dialogError = false"
                  >
                  Entendido!
                  </v-btn>
              </v-card-actions>
              </v-card>
          </v-dialog>

      <v-dialog v-model="dialogINE" width="500">
        <v-card>
          <v-card-title
              class="headline grey lighten-2"
              primary-title
              text-xs-center
          >
              Solicitud de firma
          </v-card-title>
  
          <v-card-text>
              Llena los campos requeridos con la información de tu INE/IFE para poder firmar tu iniciativa
              <v-text-field
                v-model="CIC"
                label="CIC"
                required
              ></v-text-field>
              <v-text-field
                v-model="OCR"
                label="OCR"
                required
              ></v-text-field>
          </v-card-text>
  
          <v-divider></v-divider>
  
          <v-card-actions >
            <v-spacer></v-spacer>
            <v-btn
            color="blue"
            class="white--text"
            @click="dialogINE = false"
            >
            Cancelar
            </v-btn>
            <v-btn
            color="blue"
            class="white--text"
            @click="sign()"
            >
            Firmar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

          <v-dialog
              v-model="dialog"
              width="500"
          >
              <v-card>
              <v-card-title
                  class="headline grey lighten-2"
                  primary-title
                  text-xs-center
              >
                  Tu firma ha sido recibida
              </v-card-title>
      
              <v-card-text>
                  ¡Muchas gracias, tu opinión es muy importante!
              </v-card-text>
      
              <v-divider></v-divider>
      
              <v-card-actions >
                  <v-spacer></v-spacer>
                  <v-btn
                  color="blue"
                  class="white--text"
                  :href="tweetlink"
                  target="_blank"
                  @click="dialog = false"
                  >
                  Compartir en Twitter
                  <v-icon right dark>share</v-icon>
                  </v-btn>
                  <v-btn
                  color="blue"
                  class="white--text"
                  @click="dialog = false"
                  >
                  Entendido!
                  </v-btn>
              </v-card-actions>
              </v-card>
          </v-dialog>


        <div v-if="voted" class="signed">
          <br>
          <br>
        <h2>Ya has votado por esta iniciativa</h2>
        </div>
        
        <div v-if="!voted">
          <div>
              <v-btn
                  :loading="loading"
                  :disabled="clicked"
                  color="success"
                  @click.native="loader = 'loading'"
                  @click="voteinfavor()"
                  >
                      A favor
                  <v-icon right dark>thumb_up</v-icon>
              </v-btn>
              
              <v-btn
                  :loading="loading2"
                  :disabled="clicked"
                  color="red"
                  class="white--text"
                  @click.native="loader = 'loading2'"
                  @click="voteagainst()"
              >
                  En contra
              <v-icon right dark>thumb_down</v-icon>
              </v-btn>
          </div>

          <br>

          <v-flex xs12>
              <v-textarea
              single-line
              outline
              v-model= "message"
 
              label="Escriba su comentario"
            ></v-textarea>
          </v-flex>
        </div>

    </v-container>
</template>

<script>
import axios from 'axios'
import router from '../router'
export default {
  name: 'InitiativeSign',
  data: () => {
      return {
      loader: null,
      loading: false,
      loading2: false,
      clicked: false,
      dialog: false,
      tweetlink: "",
      voted: false,
      dialogINE: false,
      dialogConflict: false,
      dialogUnauthorized: false,
      CIC:'',
      OCR: '',
      message: ''
    }
  },
  props:{
      initiativename:String,
      id:0
    },
  watch: {
    loader () {
      const l = this.loader
      this[l] = !this[l]

      setTimeout(() => (this[l] = false), 1000)

      this.loader = null

      this.dialogINE = true

      this.clicked = true
    }
  }, methods:{
    voteagainst() {
      this.tweetlink="https://twitter.com/intent/tweet?text=yo vote en contra de"+this.initiativename+" a travez de @ConoceTuCongreso";
    },
    voteinfavor() {
      this.tweetlink="https://twitter.com/intent/tweet?text=yo vote a favor de "+this.initiativename+" a travez de @ConoceTuCongreso";
    },
    goToSignIn(){
      router.push("signin")
    },
    sign() {
      
      let body = {"CIC": this.CIC,"OCR": this.OCR,"message": this.message };
      axios(process.env.VUE_APP_SCHEME+'://'+process.env.VUE_APP_HOST+process.env.VUE_APP_PORT+process.env.VUE_APP_PREFIX+'/initiatives/'+this.id+'/sign', 
      {method:"post",data:body,withCredentials:true })
      .then( response => {
        if(response.status === 200){
          this.dialogINE = false;
          this.dialog = true;
          this.voted=true;
        }
      })
      .catch( err => {
          if(err.response.status=== 409){
            this.dialogConflict = true;
          }else if(err.response.status=== 401){
            this.dialogUnauthorized = true;
          }
          
      })
      
    }
  }
}
</script>

<style lang="css">

.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
.signed{
  height: 200px;
}
</style>
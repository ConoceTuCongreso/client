<template lang="html">
    <v-container grid-list-md text-xs-center>

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
                @click="dialog = false"
                >
                Compartir en redes
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

        <div>
            <v-btn
                :loading="loading"
                :disabled="clicked"
                color="success"
                @click.native="loader = 'loading'"
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
            name="input-7-4"
            label="Comentario"
            value="La iniciativa puede ayudar a una gran parte de la población de mascotas para prevenir enfermedades más comunes."
          ></v-textarea>
          </v-flex>

    </v-container>
</template>

<script>
export default {
  name: 'InitiativeSign',
  data: () => {
      return {
      loader: null,
      loading: false,
      loading2: false,
      clicked: false,
      dialog: false
    }
  },
  watch: {
    loader () {
      const l = this.loader
      this[l] = !this[l]

      setTimeout(() => (this[l] = false), 1000)

      this.loader = null

      this.dialog = true

      this.clicked = true
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
</style>
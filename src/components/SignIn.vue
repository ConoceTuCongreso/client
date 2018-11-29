<template lang="html">

  <v-layout  class="title">
    <v-flex xs12 sm10 offset-sm1>
      <v-card flat>
        <v-layout row wrap>
          <v-flex xs12>
            <v-flex xs12 sm10 offset-sm1>

              <v-card-text class="px-0">
                <v-form>
                  <v-container>
                    <h1 class="header-text">Inicia sesión</h1>
                    <v-layout row wrap>
                      <v-flex xs12>
                        <v-text-field
                        dense
                        v-model="user"
                        label="Nombre de Usuario o Correo"
                        ></v-text-field>
                      </v-flex>

                      <v-flex xs12>
                        <v-text-field
                        dense
                        v-model="pass"
                        :type="show1 ? 'text' : 'password'"
                        :append-icon="show1 ? 'visibility_off' : 'visibility'"
                        label="Contraseña"
                        @click:append="show1 = !show1"
                        ></v-text-field>
                      </v-flex>

                    </v-layout>
                    <br>
                    <v-layout>

                    <v-btn depressed @click="check()" color="accent">submit</v-btn>

                        <v-spacer></v-spacer>

                    <v-btn flat small to='./signup'>Crear una cuenta</v-btn>
                    </v-layout>

                  </v-container>

                </v-form>

              </v-card-text>
            </v-flex>

          </v-flex>
        </v-layout>

      </v-card>

    </v-flex>
  </v-layout>

</template>


<script>

  import axios from 'axios';
  import router from '../router';

  export default {

    password: 'Password',

    data: () => ({

      user: '',
      show1: false,
      pass: ''
    }),

    methods: {
      submit () {
        this.$v.$touch()
      },
      check () {
        
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}))$/;
        let body;

        if( re.test(String(this.user).toLowerCase()) ){

          body = {'email': this.user, 'password': this.pass };
        } else {

          body = { 'username': this.user, 'password': this.pass };
        }

          axios.post(process.env.VUE_APP_SCHEME+'://'+process.env.VUE_APP_HOST+process.env.VUE_APP_PORT+process.env.VUE_APP_PREFIX+'/login', body )
          .then( function (response) {

            if(response.status === 200){
              router.push('main')
            }
          }).catch();
      }
    }
  }
</script>


<style lang="css">

</style>

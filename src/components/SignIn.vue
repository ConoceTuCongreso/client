<template lang="html">

  <v-layout  class="cosita">
    <v-flex xs12 sm8 offset-sm2>

      <v-card>

        <v-layout row wrap>

          <v-flex xs5>
            <v-img src="https://images.unsplash.com/photo-1540167828867-7e5020e0bc8e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6b75c91f2c2c552d78c93be1f87d6fc2&auto=format&fit=crop&w=1868&q=80" height="100%"></v-img>
          </v-flex>

          <v-flex xs7>
            <v-flex xs12 sm10 offset-sm1>

              <v-card-title>
                <h3 class="headline">Iniciar Sesión</h3>
              </v-card-title>

              <v-card-text class="px-0">
                <v-form>
                  <v-container>
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

                    <v-btn depressed @click="check()" color="accent">submit</v-btn>

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
        
        if( re.test(String(this.user).toLowerCase()) ){

          axios.post('https://conocetucongreso.me/api/login',
          {
            'email': this.user,
            'password': this.pass
          })
          .then()
          .catch()

        } else {
          axios.post('https://conocetucongreso.me/api/login',
          {
            'username': this.user,
            'password': this.pass
          })
          .then()
          .catch()
        }
      }
    }
  }
</script>


<style lang="css">

</style>

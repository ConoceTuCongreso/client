<template lang="html">

  <v-layout  class="cosita">
    <v-flex xs12 sm8 offset-sm2>
        {{user}}
      <v-card>

        <v-layout row wrap>

          <v-flex xs5>
            <v-img src="https://images.unsplash.com/photo-1540167828867-7e5020e0bc8e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6b75c91f2c2c552d78c93be1f87d6fc2&auto=format&fit=crop&w=1868&q=80" height="100%"></v-img>
          </v-flex>

          <v-flex xs7>
            <v-flex xs12 sm10 offset-sm1>

              <v-card-title>
                <h3 class="headline">Regístrate</h3>
              </v-card-title>

              <v-card-text class="px-0">
                <v-form>
                  <v-container>
                    <v-layout row wrap>

                      <v-flex xs12>
                        <v-text-field
                        dense
                        v-model="name"
                        :error-messages="nameErrors"
                        label="Nombre(s)"
                        required
                        @input="$v.name.$touch()"
                        @blur="$v.name.$touch()"
                        ></v-text-field>
                      </v-flex>

                      <v-flex xs6>
                        <v-text-field
                        dense
                        v-model="lName1"
                        :error-messages="lName1Errors"
                        label="Apellido Paterno"
                        required
                        @input="$v.lName1.$touch()"
                        @blur="$v.lName1.$touch()"
                        ></v-text-field>
                      </v-flex>

                      <v-flex xs6>
                        <v-text-field
                        dense
                        v-model="lName2"
                        :error-messages="lName2Errors"
                        label="Apellido Materno"
                        @input="$v.lName2.$touch()"
                        @blur="$v.lName2.$touch()"
                        ></v-text-field>
                      </v-flex>

                      <v-flex xs12>
                        <v-text-field
                        dense
                        v-model="email"
                        :error-messages="emailErrors"
                        label="Correo Electrónico"
                        @input="$v.email.$touch()"
                        @blur="$v.email.$touch()"
                        ></v-text-field>
                      </v-flex>

                      <v-flex xs12>
                        <v-text-field
                        dense
                        v-model="user"
                        :error-messages="userErrors"
                        label="Nombre de Usuario"
                        required
                        @input="$v.user.$touch()"
                        @blur="$v.user.$touch()"
                        ></v-text-field>
                      </v-flex>

                      <v-flex xs6>
                        <v-text-field
                        dense
                        v-model="pass"
                        :error-messages="passErrors"
                        :type="show1 ? 'text' : 'password'"
                        :append-icon="show1 ? 'visibility_off' : 'visibility'"
                        label="Contraseña"
                        required
                        @input="$v.pass.$touch()"
                        @blur="$v.pass.$touch()"
                        @click:append="show1 = !show1"
                        ></v-text-field>
                      </v-flex>

                      <v-flex xs6 >

                        <v-text-field
                        dense
                        v-model="pass2"
                        :error-messages="pass2Errors"
                        :type="show2 ? 'text' : 'password'"
                        :append-icon="show2 ? 'visibility_off' : 'visibility'"
                        label="Confirma tu Contraseña"
                        required
                        @input="$v.pass2.$touch()"
                        @blur="$v.pass2.$touch()"
                        @click:append="show2 = !show2"
                        ></v-text-field>
                      </v-flex>

                      <v-flex xs12>
                        <v-checkbox
                        dense
                        v-model="checkbox"
                        :error-messages="checkboxErrors"
                        label="He leído y acepto los términos y condiciones."
                        required
                        @change="$v.checkbox.$touch()"
                        @blur="$v.checkbox.$touch()"
                        ></v-checkbox>

                      </v-flex>

                    </v-layout>

                    <v-btn depressed @click="register()" color="accent">submit</v-btn>

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
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, email, minLength } from 'vuelidate/lib/validators'

  export default {
    mixins: [validationMixin],

    validations: {
      user: { required, maxLength: maxLength(64), minLength: minLength(2) },
      name: { required, maxLength: maxLength(64), minLength: minLength(2) },
      lName1: { required, maxLength: maxLength(64), minLength: minLength(2) },
      lName2: { maxLength: maxLength(64), minLength: minLength(2) },
      pass: { required, minLength: minLength(8) },
      pass2: { required },
      email: { required, email },
      checkbox: { checked (val) { return val } }
    },
    password: 'Password',

    data: () => ({

      user: '',
      name: '',
      show1: false,
      show2: false,
      lName1: '',
      lName2: '',
      pass: '',
      pass2: '',
      email: '',
      checkbox: false
    }),

    computed: {
      checkboxErrors () {
        const errors = []
        if (!this.$v.checkbox.$dirty) return errors
        !(this.$v.checkbox.$model === true) && errors.push('Debes aceptar los términos y condiciones para crear una cuenta')
        return errors
      },
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.maxLength && errors.push('Este campo debe tener menos de 64 caracteres')
        !this.$v.name.minLength && errors.push('Este campo debe tener al menos de 2 caracteres')
        !this.$v.name.required && errors.push('Este es un campo requerido')
        return errors
      },
      userErrors () {
        const errors = []
        if (!this.$v.user.$dirty) return errors
        !this.$v.user.maxLength && errors.push('Este campo debe tener menos de 64 caracteres')
        !this.$v.user.minLength && errors.push('Este campo debe tener al menos de 2 caracteres')
        !this.$v.user.required && errors.push('Este es un campo requerido')
        return errors
      },
      lName1Errors () {
        const errors = []
        if (!this.$v.lName1.$dirty) return errors
        !this.$v.lName1.maxLength && errors.push('Este campo debe tener menos de 64 caracteres')
        !this.$v.lName1.minLength && errors.push('Este campo debe tener al menos de 2 caracteres')
        !this.$v.lName1.required && errors.push('Este es un campo requerido')
        return errors
      },
      lName2Errors () {
        const errors = []
        if (!this.$v.lName2.$dirty) return errors
        !this.$v.lName2.maxLength && errors.push('Este campo debe tener menos de 64 caracteres')
        !this.$v.lName2.minLength && errors.push('Este campo debe tener al menos de 2 caracteres')
        return errors
      },
      passErrors () {
        const errors = []
        if (!this.$v.pass.$dirty) return errors
        !this.$v.pass.minLength && errors.push('La contraseña debe tener al menos 10 caracteres')
        !this.$v.pass.required && errors.push('Este es un campo requerido')
        return errors
      },
      pass2Errors () {
        const errors = []
        if (!this.$v.pass2.$dirty) return errors
        !this.$v.pass2.required && errors.push('Este es un campo requerido')
        !(this.$v.pass2.$model === this.$v.pass.$model) && errors.push('Las contraseñas no coinciden')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('El correo electrónico debe tener un formato válido')
        !this.$v.email.required && errors.push('Este es un campo requerido')
        return errors
      }
    },

    methods: {
      submit () {
        this.$v.$touch()
      },
      register (){
        axios.post('https://conocetucongreso.me/api/registro',
        {
        'username': this.user,
        'first_name': this.name,
        'middle_name': this.lName2,
        'last_name' : this.lName1,
        'email': this.email,
        'password': this.pass
        })
        .then(response => {})
        .catch(e => {
        })
      }
    }
  }
</script>


<style lang="css">

</style>

<template>
  <div class="auth-layout-wrap"
       :style="{ backgroundImage: 'url(' + bgImage + ')' }">
    <div class="auth-content">
      <div class="card o-hidden">
        <div class="row">
          <div class="col-md-12">
            <div class="p-4">
              <div class="auth-logo text-center mb-30">
                <img src="/images/logo-sistema.png"/>
              </div>
              <h1 class="mb-3 text-18">Actualizar contraseña</h1>
              <b-form @submit.prevent="formSubmit">



                <b-form-group label="Correo electrónico" class="text-12">
                  <b-form-input
                      class="form-control-rounded"
                      type="email"
                      disabled
                      v-model="payload.email"
                      email
                      required>
                  </b-form-input>
                </b-form-group>


                <b-form-group label="Contraseña">
                  <b-form-input
                      type="password"
                      class="form-control-rounded"
                      label="Contraseña"
                      v-model.trim="payload.password">
                  </b-form-input>
                </b-form-group>

                <b-form-group label="Repetir contraseña">
                  <b-form-input
                      type="password"
                      class="form-control-rounded"
                      label="Repetir contraseña"
                      v-model.trim="payload.password_confirmation">
                  </b-form-input>
                </b-form-group>

                <b-alert show dismissible variant="danger" v-if="error">
                  Las contraseñas no coinciden
                </b-alert>

                <b-button
                    type="submit"
                    tag="button"
                    class="btn-rounded btn-block mt-2"
                    variant="primary mt-2"
                    :disabled="loading">
                  Cambiar contraseña
                </b-button>
                <div v-once class="typo__p" v-if="loading">
                  <div class="spinner sm spinner-primary mt-3"></div>
                </div>
                <card-error-validation v-if="errorMessages.length" class="mt-4"/>
              </b-form>

            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapActions, mapGetters, mapState} from "vuex";
import axios from "axios";
import {required} from "vuelidate/lib/validators";

export default {
  name: "recoverPassword",
  created() {
  },
  data() {
    return {
      payload: {
        token: this.$route.query.token,
        email: this.$route.query.email,
        password: '',
        password_confirmation: '',
      },

      bgImage: require("@/assets/images/photo-wide-4.jpg"),
      loading: false,
      error: false,
    }
  },
  validations: {
    payload: {
      email: {
        required
      },
      password: {
        required
      },
      password_confirmation: {
        required
      }
    }
  },
  computed: {
    ...mapState(['errorMessages']),
  },
  methods: {
    ...mapActions('auth', ['passwordReset']),
    formSubmit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        openNotification('Error', 'Por favor complete el formulario correctamente.', 'danger');
        return;
      }
      this.loading = true;
      this.passwordReset(this.payload).then(response => {
        this.loading = false;
        openNotification('Solicitud generada', response);
        this.goToLogin();
      }).catch(response => {
        this.loading = false;
      })
    },
    goToLogin() {
      this.$router.push({name: 'login'})
    }
  },
  watch: {
    'payload.password_confirmation': function (value) {
      if (this.payload.password != value) {
        this.error = true
      } else {
        this.error = false
      }
    }
  }
}
</script>

<style>
.spinner.sm {
  height: 2em;
  width: 2em;
}

.auth-content {
  min-width: 400px !important;
}
</style>

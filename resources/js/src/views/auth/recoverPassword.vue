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
              <h1 class="mb-3 text-18">Recuperar contraseña</h1>
              <card-error-validation v-if="errorMessages.length" class="mt-4"/>
              <b-form @submit.prevent="formSubmit">
                <b-form-group label="Correo electrónico" class="text-12">
                  <b-form-input
                      class="form-control-rounded"
                      type="email"
                      v-model="email"
                      email
                      required>
                  </b-form-input>
                </b-form-group>

                <b-button
                    type="submit"
                    tag="button"
                    class="btn-rounded btn-block mt-2"
                    variant="primary mt-2"
                    :disabled="loading">
                  Enviar email
                </b-button>
                <div class="text-center">
                  <b-button @click.prevent="goToLogin" variant="link">Iniciar sesión</b-button>
                </div>
                <div v-once class="typo__p" v-if="loading">
                  <div class="spinner sm spinner-primary mt-3"></div>
                </div>

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

export default {
  name: "recoverPassword",
  data() {
    return {
      email: '',
      bgImage: require("@/assets/images/photo-wide-4.jpg"),
      loading: false

    }
  },
  computed: {
    ...mapState(['errorMessages']),
  },
  methods: {
    ...mapActions('auth', ['recoverPassword']),
    formSubmit() {
      this.loading = true;
      this.recoverPassword(this.email).then(response => {
        this.loading = false;
        openNotification('Solicitud generada', response);
      }).catch(response => {
        this.loading = false;
      })
    },
    goToLogin() {
      this.$router.push({name: 'login'})
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

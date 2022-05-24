<template>
  <div
      class="auth-layout-wrap"
      :style="{ backgroundImage: 'url(' + bgImage + ')' }">
    <div class="container auth-content">
      <div class="card o-hidden">
        <div class="row">
          <div class="col-md-12">
            <div class="p-4">
              <div class="auth-logo text-center mb-30">
                <img src="/images/logo-sistema.png"/>
              </div>
              <h1 class="mb-3 text-18">Inicia sesión</h1>
              <b-form @submit.prevent="formSubmit">
                <b-form-group label="Correo electrónico" class="text-12">
                  <b-form-input
                      class="form-control-rounded"
                      type="text"
                      v-model="email"
                      email
                      required>
                  </b-form-input>
                </b-form-group>

                <b-form-group label="Contraseña" class="text-12">
                  <b-form-input
                      class="form-control-rounded"
                      type="password"
                      v-model="password"
                  ></b-form-input>
                </b-form-group>

                <!-- <b-button block to="/" variant="primary btn-rounded mt-2"
                  >Sign In</b-button
                > -->
                <div class="text-center text-red" v-if="errorText">
                  {{ errorText }}
                </div>
                <b-button
                    type="submit"
                    tag="button"
                    class="btn-rounded btn-block mt-2"
                    variant="primary mt-2"
                    :disabled="loading">
                  Iniciar sesión
                </b-button>
                <div class="text-center">
                  <b-button @click.prevent="goToRecoverPassword" variant="link">¿Olvidaste tu contraseña?</b-button>
                </div>
                <div class="text-center">
                  <router-link tag="a" to="/preregistro" class="btn btn-link">Pre registro</router-link>
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
import {mapGetters, mapActions, mapState} from "vuex";

export default {
  metaInfo: {
    title: "Login"
  },
  data() {
    return {
      email: "",
      password: "",
      userId: "",
      bgImage: require("@/assets/images/photo-wide-4.jpg"),
      signInImage: require("@/assets/images/photo-long-3.jpg"),
      errorText: null
    };
  },
  computed: {
    validation() {
      return this.userId.length > 4 && this.userId.length < 13;
    },
    ...mapGetters(["loggedInUser", "loading", "error"]),
    ...mapState("auth", ["user"]),
    ...mapState(['errorMessages']),
  },

  methods: {
    ...mapActions('auth', ["login"]),
    formSubmit() {
      this.login({email: this.email, password: this.password}).then(response => {
        if (response == 'success') {
          this.$router.push({name: 'dashboard'})
        } else {
          this.errorText = response[0][0]
        }
      });
    },
    makeToast(variant = null, msg) {
      this.$bvToast.toast(msg, {
        title: ` ${variant || "default"}`,
        variant: variant,
        solid: true
      });
    },
    goToRecoverPassword() {
      this.$router.push({name: 'recover-password'})
    }
  },
  watch: {
    loggedInUser(val) {
      if (val && val.uid && val.uid.length > 0) {
        this.makeToast("success", "Successfully Logged In");

        setTimeout(() => {
          this.$router.push("/");
        }, 500);
      }
    },
    error(val) {
      if (val != null) {
        this.makeToast("warning", val.message);
      }
    }
  }
};
</script>

<style>
.spinner.sm {
  height: 2em;
  width: 2em;
}

.auth-content {
  min-width: 400px !important;
}
.auth-logo img{
  width: 120px;
  height: 70px;
}
</style>

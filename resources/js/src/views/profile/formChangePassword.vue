<template>
  <b-form @submit.prevent="submit">

    <card-error-validation v-if="errorMessages.length" class="mt-4"/>

    <b-form-group label="Contraseña actual">
      <b-form-input
          type="password"
          class="mb-2"
          label="Contraseña"
          v-model.trim="$v.old_password.$model">
      </b-form-input>
    </b-form-group>


    <b-form-group label="Contraseña">
      <b-form-input
          type="password"
          class="mb-2"
          label="Contraseña"
          v-model.trim="$v.password.$model">
      </b-form-input>
    </b-form-group>

    <b-form-group label="Repetir contraseña">
      <b-form-input
          type="password"
          class="mb-2"
          label="Repetir contraseña"
          v-model.trim="$v.password_confirm.$model">
      </b-form-input>
    </b-form-group>


    <b-alert show dismissible variant="danger" v-if="error">
      Las contraseñas no coinciden
    </b-alert>

    <b-button type="submit" variant="primary" :disabled="submitStatus === 'PENDING' || error">Guardar</b-button>

    <div v-once class="typo__p" v-if="submitStatus === 'PENDING'">
      <div class="spinner sm spinner-primary mt-3"></div>
    </div>


  </b-form>
</template>

<script>
import {mapActions, mapMutations, mapState} from "vuex";
import {minLength, maxLength, required, numeric, between} from "vuelidate/lib/validators";

export default {
  name: "formChangePassword",
  props: ['user'],
  data() {
    return {
      old_password: '',
      password: '',
      password_confirm: '',
      error: null
    }
  },
  validations: {
    old_password: {
      required
    },
    password: {
      required
    },
    password_confirm: {
      required
    }
  },
  methods: {
    ...mapActions('user', ['changeMyPassword']),
    ...mapMutations(['CLEAR_ERRORS']),
    submit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        openNotification('Error', 'Por favor complete el formulario correctamente.', 'danger');
        return;
      }
      this.changeMyPassword({
        old_password: this.old_password,
        password: this.password
      }).then(response => {
        this.CLEAR_ERRORS();
        openNotification('Se realizo el cambio', 'La contraseña ha sido cambiado  con exito');
        this.clearData();

      });
    },
    clearData() {
      this.old_password = '';
      this.password = '';
      this.password_confirm = '';
    }

  },
  computed: {
    ...mapState(['submitStatus', 'errorMessages']),
  },
  watch: {
    password_confirm: function (value) {
      if (this.password != value) {
        this.error = true
      } else {
        this.error = false
      }
    }
  }
}
</script>

<style scoped>

</style>

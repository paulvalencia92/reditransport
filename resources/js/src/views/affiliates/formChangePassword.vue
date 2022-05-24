<template>
  <b-form @submit.prevent="submit">

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
import {mapActions, mapState} from "vuex";
import {minLength, maxLength, required, numeric, between} from "vuelidate/lib/validators";

export default {
  name: "formChangePassword",
  props: ['user'],
  data() {
    return {
      password: '',
      password_confirm: '',
      error: null
    }
  },
  validations: {
    password: {
      required
    },
    password_confirm: {
      required
    }
  },
  methods: {
    ...mapActions('user', ['changePassword']),
    submit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        openNotification('Error', 'Por favor complete el formulario correctamente.', 'danger');
        return;
      }
      this.changePassword({userId: this.user.id, password: this.password}).then(response => {
        openNotification('Se realizo el cambio', 'La contraseña ha sido cambiadoa con exito');
        this.$router.push({name: 'lista-afiliados'})
      });
    }
  },
  computed: {
    ...mapState(['submitStatus'])
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

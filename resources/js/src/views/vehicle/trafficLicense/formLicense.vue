<template>
  <b-form @submit.prevent="submit">

    <card-error-validation v-if="errorMessages.length"/>

    <b-form-group label="Agregar documento" label-for="type">
      <b-form-file
          v-model="licence.file"
          browse-text="Guardar"
          :state="Boolean(licence.file)"
          placeholder="Elija un archivo o suéltelo aquí ... "
          drop-placeholder="Suelta el archivo aquí ...">
      </b-form-file>
    </b-form-group>

    <b-form-group label="Fecha Vencimiento" label-for="expiration_date">
      <b-form-input id="expiration_date" v-model="licence.expiration_date"
                    class="input"
                    type="date">
      </b-form-input>
    </b-form-group>

    <!-- Spinner-->
    <b-col md="12" class="d-flex justify-content-center" :class="{'m-28' : !loading}">
      <div v-if="loading" class="spinner sm spinner-primary mt-3"></div>
    </b-col>

    <!--Guardar-->
    <b-col md="12" class="text-right">
      <b-button type="submit" variant="primary" :disabled="loading">Guardar</b-button>
    </b-col>


  </b-form>
</template>

<script>
import {mapGetters, mapMutations, mapState} from "vuex";
import {required} from "vuelidate/lib/validators";

export default {
  name: "formLicense",
  created() {
    this.CLEAR_ERRORS();
  },
  data() {
    return {
      licence: {
        file: null,
        expiration_date: ''
      },
      loading: false
    }
  },
  validations: {
    licence: {
      expiration_date: {
        required
      },
      file: {
        required
      },
    }
  },
  methods: {
    ...mapMutations(['CLEAR_ERRORS']),
    submit() {
      this.loading = true
      if (this.$v.$invalid) {
        openNotification('Error', 'Por favor complete el formulario correctamente.', 'danger');
        this.loading = false
        return;
      }
      const data = buildFormData(this.licence);
      this.loading = false
      this.$emit('save', data)
    }
  },
  computed: {
    ...mapState(['errorMessages', 'submitStatus']),
  },
}
</script>

<style scoped>

</style>

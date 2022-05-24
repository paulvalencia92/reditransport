<template>
  <b-form @submit.prevent="submit">
    <b-form-group label="Nombre de la carpeta">
      <b-form-input
          class="mb-2"
          label="Nombres"
          v-model.trim="$v.folder.name.$model">
      </b-form-input>
    </b-form-group>

    <div class="text-right">
      <b-button type="submit" variant="primary" :disabled="submitStatus === 'PENDING'">Guardar</b-button>
    </div>

    <div v-once class="typo__p" v-if="submitStatus === 'PENDING'">
      <div class="spinner sm spinner-primary mt-3"></div>
    </div>

  </b-form>
</template>

<script>
import {required} from "vuelidate/lib/validators";
import {mapMutations, mapState} from "vuex";

export default {
  name: "formFolder",
  created() {
    this.CHANGE_SUBMIT_STATUS(false);
  },
  props: ['folder'],
  validations: {
    folder: {
      name: {
        required
      }
    }
  },
  methods: {
    ...mapMutations(['CHANGE_SUBMIT_STATUS']),
    submit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        openNotification('Error', 'Por favor complete el formulario correctamente.', 'danger');
        return;
      }
      this.CHANGE_SUBMIT_STATUS('PENDING');
      this.$emit('save', this.folder)
    }
  },
  computed: {
    ...mapState(['errorMessages', 'submitStatus']),
  },
}
</script>

<style scoped>

</style>

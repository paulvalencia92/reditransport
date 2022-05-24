<template>
  <b-form @submit.prevent="submit">
    <b-form-group label="Archivo">
      <b-form-file
          v-model="file"
          :state="Boolean(file)"
          placeholder="Choose a file or drop it here..."
          drop-placeholder="Drop file here..."
      ></b-form-file>
    </b-form-group>

    <div class="text-right mt-4">
      <b-button type="submit" variant="primary" :disabled="submitStatus === 'PENDING'">Guardar</b-button>
    </div>

    <div v-once class="typo__p" v-if="submitStatus === 'PENDING'">
      <div class="spinner sm spinner-primary mt-3"></div>
    </div>

  </b-form>
</template>

<script>
import {mapMutations, mapState} from "vuex";
import {required} from "vuelidate/lib/validators";

export default {
  name: "formFile",
  created() {
    this.CHANGE_SUBMIT_STATUS(false);
  },
  data() {
    return {
        file: null
    }
  },
  validations: {
      file: {
        required
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
      this.$emit('saveFile', this.file)
    }
  },
  computed: {
    ...mapState(['errorMessages', 'submitStatus']),
  },
}
</script>

<style scoped>

</style>

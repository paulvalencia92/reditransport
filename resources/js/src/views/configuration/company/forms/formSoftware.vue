<template>
  <b-form @submit.prevent="submit">
    <b-row>

      <b-col md="12">
        <card-error-validation v-if="errorMessages.length"/>
      </b-col>

      <b-col md="6">
        <b-form-group label="Id Software *">
          <b-form-input class="mb-2" v-model.trim="payload.id">
          </b-form-input>
        </b-form-group>
      </b-col>

      <b-col md="6">
        <b-form-group label="Pin Software *">
          <b-form-input class="mb-2" v-model.trim="payload.pin">
          </b-form-input>
        </b-form-group>
      </b-col>



      <b-col md="12" class="text-right">
        <b-button
            type="submit"
            variant="primary"
            :disabled="submitStatus === 'PENDING'">
          Guardar
        </b-button>
      </b-col>

    </b-row>
  </b-form>
</template>

<script>
import {mapActions, mapMutations, mapState} from "vuex";
import {required} from "vuelidate/lib/validators";

export default {
  name: "formSoftware",
  created() {
    this.CLEAR_ERRORS();
  },
  data() {
    return {
      payload: {
        id: '82bf0c5e-0117-434d-9471-8a5ee58ae682',
        pin: '12345',
      }
    }
  },
  validations: {
    payload: {
      id: {
        required,
      },
      pin: {
        required,
      },
    }
  },
  methods: {
    ...mapActions("electronicBilling", ["registerSoftware"]),
    ...mapMutations(['CHANGE_SUBMIT_STATUS', 'CLEAR_ERRORS']),
    submit() {
      this.CHANGE_SUBMIT_STATUS(true);
      this.$v.$touch();
      if (this.$v.$invalid) {
        openNotification("Error", "Por favor complete el formulario correctamente.", "danger");
        this.CHANGE_SUBMIT_STATUS(false);
        return;
      }
      this.registerSoftware(this.payload).then(response => {
        openNotification();
        this.CHANGE_SUBMIT_STATUS(false);
      });
    },
  },
  computed: {
    ...mapState(["errorMessages", "submitStatus"]),
  }
}
</script>

<style scoped>

</style>

<template>
  <b-form @submit.prevent="submit">
    <b-row>
      <!--errores de validacion-->
      <b-col md="12">
        <card-error-validation v-if="errorMessages.length"/>
      </b-col>

      <!--numero interno-->
      <b-col md="6">
        <b-form-group label="Nit empresa contratante" label-for="nit">
          <b-form-input
              class="mb-2"
              id="nit"
              v-model.trim="$v.vehicle.nit.$model">
          </b-form-input>
        </b-form-group>
      </b-col>

      <!--numero interno-->
      <b-col md="6">
        <b-form-group label="Nombre empresa contratante" label-for="contractor">
          <b-form-input
              class="mb-2"
              id="contractor"
              v-model.trim="$v.vehicle.contractor.$model">
          </b-form-input>
        </b-form-group>
      </b-col>

      <b-col md="6">
        <b-form-group label="Dirección de oficina principal" label-for="adress">
          <b-form-input
              class="mb-2"
              id="adress"
              v-model.trim="$v.vehicle.adress.$model">
          </b-form-input>
        </b-form-group>
      </b-col>

      <b-col md="6">
        <b-form-group label="Teléfono celular" label-for="phone">
          <b-form-input
              class="mb-2"
              id="phone"
              v-model.trim="$v.vehicle.phone.$model">
          </b-form-input>
        </b-form-group>
      </b-col>

      <b-col md="6">
        <b-form-group label="Correo electrónico" label-for="email">
          <b-form-input
              class="mb-2"
              id="email"
              v-model.trim="$v.vehicle.email.$model">
          </b-form-input>
        </b-form-group>
      </b-col>

      <b-col md="6">
        <b-form-group label="Página web" label-for="web">
          <b-form-input
              class="mb-2"
              id="web"
              v-model.trim="$v.vehicle.web.$model">
          </b-form-input>
        </b-form-group>
      </b-col>

      <b-col md="6">
        <b-form-group label="Nombres del contacto" label-for="c_name">
          <b-form-input
              class="mb-2"
              id="c_name"
              v-model.trim="$v.vehicle.c_name.$model">
          </b-form-input>
        </b-form-group>
      </b-col>

      <b-col md="6">
        <b-form-group label="Apellidos del contacto" label-for="c_last_name">
          <b-form-input
              class="mb-2"
              id="c_last_name"
              v-model.trim="$v.vehicle.c_last_name.$model">
          </b-form-input>
        </b-form-group>
      </b-col>

      <b-col md="6">
        <b-form-group label="Número de cédula de ciudadanía" label-for="c_cc">
          <b-form-input
              class="mb-2"
              id="c_cc"
              v-model.trim="$v.vehicle.c_cc.$model">
          </b-form-input>
        </b-form-group>
      </b-col>

      <b-col md="6">
        <b-form-group label="Dirección" label-for="c_adress">
          <b-form-input
              class="mb-2"
              id="c_adress"
              v-model.trim="$v.vehicle.c_adress.$model">
          </b-form-input>
        </b-form-group>
      </b-col>

      <b-col md="6">
        <b-form-group label="Número de celular" label-for="c_phone">
          <b-form-input
              class="mb-2"
              id="c_phone"
              v-model.trim="$v.vehicle.c_phone.$model">
          </b-form-input>
        </b-form-group>
      </b-col>

      <!-- Spinner-->
      <b-col md="12" class="d-flex justify-content-center" :class="{'m-28' : !submitStatus}">
        <div v-if="submitStatus" class="spinner sm spinner-primary mt-3"></div>
      </b-col>

      <!--Guardar-->
      <b-col md="12" class="text-right">
        <b-button type="submit" variant="primary" :disabled="submitStatus">Guardar</b-button>
      </b-col>

    </b-row>
  </b-form>
</template>

<script>
import {mapActions, mapGetters, mapMutations, mapState} from "vuex";
import {minLength, maxLength, required, numeric, between} from "vuelidate/lib/validators";

export default {
  name: "form-vehicle",
  props: {
    vehicle: {
      required: true,
      type: Object
    }
  },
  created() {
    this.CLEAR_ERRORS();
    this.CHANGE_SUBMIT_STATUS(false);
  },
  data() {
    return {
    }
  },
  validations: {
    vehicle: {
      nit: {
        required,
      },
      contractor: {
        required,
      },
      adress: {
      },
      phone: {
        required
      },
      email: {
        required,
      },
      web: {
      },
      c_name: {
        required
      },
      c_last_name: {
      },
      c_cc: {
      },
      c_adress: {
      },
      c_phone: {
        required,
        numeric
      }
    },
  },
  methods: {
    ...mapMutations(['CHANGE_SUBMIT_STATUS', 'CLEAR_ERRORS']),
    submit() {
      if (this.$v.$invalid) {
        openNotification('Error', 'Por favor complete el formulario correctamente.', 'danger');
        return;
      }
      this.CHANGE_SUBMIT_STATUS(true);
      this.$emit('save', this.vehicle)
    },
  },
  computed: {
    ...mapGetters('vehicle', ['settledCities', 'cylinders']),
    ...mapState(['errorMessages', 'submitStatus'])
  }
}
</script>

<style scoped>

</style>

<template>
  <b-form @submit.prevent="submit">

    <b-row>
      <b-col md="12">
        <card-error-validation v-if="errorMessages.length"/>
      </b-col>


      <b-col md="6">
        <b-form-group label="Vehiculo" label-for="vehicle">
          <b-form-select
              v-model="incidence.vehicle_id"
              :options="vehicleOptions"
              id="vehicle">
          </b-form-select>
        </b-form-group>
      </b-col>

      <b-col md="6">
        <b-form-group label="Tipo de incidencia">
          <b-form-select v-model="incidence.type" :options="typeOptions" id="type">
          </b-form-select>
        </b-form-group>
      </b-col>

      <b-col md="6">
        <b-form-group label="Nivel de incidencia" label-for="incidence_level">
          <b-form-select
              v-model="incidence.incidence_level"
              :options="levelOptions"
              id="incidence_level">
          </b-form-select>
        </b-form-group>
      </b-col>


      <b-col md="6">
        <b-form-group label="Fecha de incidente" label-for="date">
          <b-form-input id="payment_date" v-model="incidence.date"
                        class="input"
                        type="date">
          </b-form-input>
        </b-form-group>
      </b-col>


      <b-col md="6">
        <b-form-group label="Costo estimado" label-for="estimated_cost">
          <b-form-input id="estimated_cost" v-model="incidence.estimated_cost"
                        class="input"
                        type="number">
          </b-form-input>
        </b-form-group>
      </b-col>


      <b-col md="12">
        <b-form-group label="Detalle" label-for="detail">
          <b-form-textarea
              id="textarea"
              v-model="incidence.description"
              placeholder="Ingrese un detalle si asi lo desea..."
              rows="3"
              max-rows="6">
          </b-form-textarea>
        </b-form-group>
      </b-col>

      <!-- Spinner-->
      <b-col md="12" class="d-flex justify-content-center" :class="{'m-28' : !submitStatus}">
        <div v-if="submitStatus" class="spinner sm spinner-primary mt-3"></div>
      </b-col>

      <b-col md="12" class="text-right mt-4">
        <b-button type="submit" variant="primary">Registrar</b-button>
      </b-col>

    </b-row>

  </b-form>
</template>

<script>
import {mapActions, mapGetters, mapMutations, mapState} from "vuex";
import {required} from "vuelidate/lib/validators";

export default {
  name: "create",
  props: ['incidence'],
  created() {
    this.CLEAR_ERRORS();
    this.CHANGE_SUBMIT_STATUS(false);
    this.getVehiclesData();

  },
  data() {
    return {
      typeOptions: [
        {value: 'Siniestro', text: 'Siniestro'},
        {value: 'Accidente común', text: 'Accidente común'},
        {value: 'Averia', text: 'Averia'},
        {value: 'Pinchazo', text: 'Pinchazo'},
      ],
      levelOptions: [
        {value: 'Leve', text: 'Leve'},
        {value: 'Normal', text: 'Normal'},
        {value: 'Grave', text: 'Grave'},
        {value: 'Perdida total', text: 'Perdida total'},
      ]
    }
  },
  validations: {
    incidence: {
      type: {
        required
      },
      incidence_level: {
        required
      },
      date: {
        required
      },
    },
  },
  methods: {
    ...mapMutations(['CHANGE_SUBMIT_STATUS', 'CLEAR_ERRORS']),
    ...mapActions('vehicle', ['getVehicles', 'getMyVehicles']),
    submit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        openNotification('Error', 'Por favor complete el formulario correctamente.', 'danger');
        return;
      }
      this.CHANGE_SUBMIT_STATUS(true);
      this.$emit('save', this.incidence);
    },
    getVehiclesData() {
      if (this.role == 'ADMIN') {
        this.getVehicles();
      } else {
        this.getMyVehicles();
      }
    }
  },
  computed: {
    ...mapState(['errorMessages', 'submitStatus']),
    ...mapState('auth', ['role']),
    ...mapGetters('vehicle', ['vehicleOptions']),
  }
}
</script>

<style scoped>

</style>

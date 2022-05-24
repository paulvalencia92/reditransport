<template>
  <div class="main-content">

    <b-row>


      <b-col md="8" offset-md="2">
        <b-overlay :show="submitStatus" rounded="sm">
          <b-card title="Registrar vehiculo">
            <form-vehicle @save="save" :vehicle="vehicle"/>
          </b-card>
        </b-overlay>
      </b-col>


      <!-- <b-col md="4">
        <b-card title="Imagen de un carro">
        </b-card>
      </b-col> -->
    </b-row>


  </div>
</template>

<script>
import formVehicle from './form'
import {mapActions, mapMutations, mapState} from "vuex";

export default {
  name: "create-vehicle",
  components: {formVehicle},
  created() {
    if (!this.viewPermissions()) {
      this.$router.push({name: 'not-found'});
    }
    this.CLEAR_ERRORS();
    this.CHANGE_SUBMIT_STATUS(false);
  },
  data() {
    return {
      vehicle: {
        branch_or_agreement: '',
        settled_city: '',
        car_plate: '',
        date_association_company: '',
        department_id: '',
        municipality_id: '',
        internal_number: '',
        enrollment_date: '',
        chassis_number: '',
        engine_number: '',
        model: '',
        brand: '',
        cylinder: '',
        color: '',
        auto_type: '',
        number_seats: '',
        operation_card: ''
      },
    }
  },
  methods: {
    ...mapActions('vehicle', ['createVehicle']),
    ...mapMutations(['CHANGE_SUBMIT_STATUS', 'CLEAR_ERRORS']),
    viewPermissions() {
      return this.abilities.includes('*') || this.abilities.includes('vehiculos-administracion');
    },
    save(vehicle) {
      this.CHANGE_SUBMIT_STATUS(true);
      this.createVehicle(vehicle)
          .then(response => {
            openNotification();
            this.$router.push({name: 'vehiculos'})
          })
          .catch(respose => {
            openNotification('Error', 'No se pudieron guardar los datos', 'danger')
          })
          .finally(() => {
            this.CHANGE_SUBMIT_STATUS(false);
          })
    }
  },
  computed: {
    ...mapState(['submitStatus']),
    ...mapState('auth', ['abilities']),
  }
}
</script>

<style scoped>

</style>

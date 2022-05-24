<template>
  <b-form @submit.prevent="submit">
    <b-row>
      <!--errores de validacion-->
      <b-col md="12">
        <card-error-validation v-if="errorMessages.length"/>
      </b-col>


      <!--PLACA-->
      <b-col md="6">
        <b-form-group label="Placa">
          <b-form-input
              class="mb-2"
              label="Nombres"
              v-model.trim="driver.car_plate">
          </b-form-input>

        </b-form-group>
      </b-col>


      <!--numero interno-->
      <b-col md="6">
        <b-form-group label="Numero interno" label-for="internal_number">
          <b-form-input
              class="mb-2"
              id="internal_number"
              v-model.trim="driver.internal_number">
          </b-form-input>
        </b-form-group>
      </b-col>


      <!--      &lt;!&ndash;vinculación&ndash;&gt;-->
      <!--      <b-col md="6">-->
      <!--        <b-form-group label="Vinculación a la empresa" label-for="date_association_company">-->
      <!--          <b-form-input id="date_association_company" v-model="driver.date_association_company"-->
      <!--                        class="input"-->
      <!--                        type="date">-->
      <!--          </b-form-input>-->
      <!--        </b-form-group>-->
      <!--      </b-col>-->


      <!--departamento-->
      <b-col md="6">
        <b-form-group label="Departamento" label-for="department">
          <b-form-select
              v-model="driver.department_id_vehicle"
              :options="departmentsOptions"
              id="department">
          </b-form-select>
        </b-form-group>
      </b-col>


      <!--Municipio-->
      <b-col md="6">
        <b-form-group label="Municipio" label-for="municipalitie">

          <select v-if="!municipalitiesOptions.length" class="form-control" id="exampleFormControlSelect1">
            <option disabled>Por favor elija un departamento</option>
          </select>
          <b-form-select v-else :disabled="!municipalitiesOptions.length"
                         v-model="driver.municipality_id_vehicle"
                         :options="municipalitiesOptions"
                         id="municipalitie">
          </b-form-select>
        </b-form-group>
      </b-col>


      <!--fecha de matricula-->
      <b-col md="6">
        <b-form-group label="Fecha matricula:" label-for="enrollment_date">
          <b-form-input id="enrollment_date" v-model="driver.enrollment_date"
                        class="input"
                        type="date">
          </b-form-input>
        </b-form-group>
      </b-col>

      <!--numero de chasis-->
      <b-col md="6">
        <b-form-group label="Número chasis" label-for="chassis_number">
          <b-form-input
              class="mb-2"
              id="chassis_number"
              v-model.trim="driver.chassis_number">
          </b-form-input>
        </b-form-group>
      </b-col>

      <!--numero de motor-->
      <b-col md="6">
        <b-form-group label="Número de motor" label-for="chassis_number">
          <b-form-input
              class="mb-2"
              id="chassis_number"
              v-model="driver.engine_number">
          </b-form-input>
        </b-form-group>
      </b-col>


      <!--modelo-->
      <b-col md="6">
        <b-form-group label="Modelo" label-for="model">
          <b-form-input
              class="mb-2"
              id="model"
              type="number"
              v-model.trim="driver.model">
          </b-form-input>
          <b-alert
              show
              variant="danger"
              class="error col-md-6 mt-1"
              v-if="driver.numeric"> Modelo debe ser solo numerico
          </b-alert>
        </b-form-group>
      </b-col>


      <!--Marca-->
      <b-col md="6">
        <b-form-group label="Marca" label-for="brand">
          <b-form-input
              class="mb-2"
              id="brand"
              v-model.trim="driver.brand">
          </b-form-input>
        </b-form-group>
      </b-col>

      <!--cilindro-->
      <b-col md="6">
        <b-form-group label="Cilindraje" label-for="cylinder">
          <b-form-select
              v-model="driver.cylinder"
              :options="cylinders"
              id="cylinder">
          </b-form-select>
        </b-form-group>
      </b-col>


      <!--Colors-->
      <b-col md="6">
        <b-form-group label="Color del vehiculo" label-for="colors">
          <b-form-select
              v-model="driver.color"
              :options="colors"
              id="colors">
          </b-form-select>
        </b-form-group>
      </b-col>


      <!--Clase de auto-->
      <b-col md="4">
        <b-form-group label="Clase de auto" label-for="auto_type">
          <b-form-select
              v-model="driver.auto_type"
              :options="types"
              id="auto_type">
          </b-form-select>
        </b-form-group>
      </b-col>


      <!--Numero de puestos-->
      <b-col md="4">
        <b-form-group label="Número de puestos" label-for="number_seats">
          <b-form-input
              class="mb-2"
              id="number_seats"
              type="number"
              v-model.trim="driver.number_seats">
          </b-form-input>
        </b-form-group>
      </b-col>

      <b-col md="4">
        <b-form-group label="Tarjeta de operación" label-for="number_seats">
          <b-form-input
              class="mb-2"
              id="operation_card"
              v-model.trim="driver.operation_card">
          </b-form-input>
        </b-form-group>
      </b-col>


    </b-row>
  </b-form>
</template>

<script>
import {mapActions, mapGetters, mapMutations, mapState} from "vuex";
import {minLength, maxLength, required, numeric, between} from "vuelidate/lib/validators";
import axios from "axios";

export default {
  name: "form-vehicle",
  props: {
    driver: {
      required: true,
      type: Object
    }
  },
  created() {
    this.CLEAR_ERRORS();
    this.CHANGE_SUBMIT_STATUS(false);
    this.getDepartments();
  },
  data() {
    return {
      branchs: [
        {value: 'READY TRANSPORT', text: 'READY TRANSPORT'},
        {value: 'CONVENIOS', text: 'CONVENIOS'},
      ],
      colors: [
        {value: 'Amarillo', text: 'Amarillo'},
        {value: 'Azul', text: 'Azul'},
        {value: 'Blanco', text: 'Blanco'},
        {value: 'Gris', text: 'Gris'},
        {value: 'Marron', text: 'Marron'},
        {value: 'Naranja', text: 'Naranja'},
        {value: 'Negro', text: 'Negro'},
        {value: 'Rojo', text: 'Rojo'},
        {value: 'Verde', text: 'Verde'},
      ],
      types: [
        {value: 'Automovil', text: 'Automovil'},
        {value: 'Camioneta', text: 'Camioneta'},
        {value: 'Doble Cabina', text: 'Doble Cabina'},
        {value: 'Station Wagon', text: 'Station Wagon'},
        {value: 'Bus', text: 'Bus'},
        {value: 'Buseta', text: 'Buseta'},
        {value: 'MicroBus', text: 'MicroBus'},
        {value: 'Campero', text: 'Campero'},
        {value: 'Camion', text: 'Camion'},
      ],
      departmentsOptions: [],
      municipalitiesOptions: [],
    }
  },
  methods: {
    ...mapMutations(['CHANGE_SUBMIT_STATUS', 'CLEAR_ERRORS']),
    submit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        openNotification('Error', 'Por favor complete el formulario correctamente.', 'danger');
        return;
      }
      this.CHANGE_SUBMIT_STATUS(true);
      this.$emit('save', this.vehicle)
    },
    async getDepartments() {
      const response = await axios.get('/api/departments-public');
      this.departmentsOptions = response.data;
    },
    async getMunicipalitiesForDepartment() {
      const response = await axios.get('/api/municipalities-public', {params: {departmentId: this.driver.department_id_vehicle}});
      this.municipalitiesOptions = response.data;
    },
  },
  computed: {
    ...mapGetters('vehicle', ['settledCities', 'cylinders']),
    ...mapState(['errorMessages', 'submitStatus']),
    ...mapState('cities', ['departments', 'municipalities']),
  },
  watch: {
    'driver.department_id_vehicle': function (value) {
      this.getMunicipalitiesForDepartment(value);
    }
  }
}
</script>

<style scoped>

</style>

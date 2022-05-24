<template>
  <b-form @submit.prevent="submit">
    <b-row>
      <!--errores de validacion-->
      <b-col md="12">
        <card-error-validation v-if="errorMessages.length"/>
      </b-col>

      <!--SUCURSAL/CONVENIO-->
      <!-- <b-col md="6">
        <b-form-group label="SUCURSAL/CONVENIO" label-for="branch_or_agreement">
          <b-form-select
              v-model="vehicle.branch_or_agreement"
              :options="branchs"
              id="branch_or_agreement">
          </b-form-select>
        </b-form-group>
      </b-col> -->

      <!--CIUDAD RADICADO-->
     <!--  <b-col md="6">
        <b-form-group label="CIUDAD RADICADO" label-for="settledCities">
          <b-form-select
              v-model="vehicle.settled_city"
              :options="settledCities"
              id="settledCities">
          </b-form-select>
        </b-form-group>
      </b-col>
 -->

      <!--PLACA-->
      <b-col md="6">
        <b-form-group label="Placa">
          <b-form-input
              class="mb-2"
              label="Nombres"
              v-model.trim="$v.vehicle.car_plate.$model">
          </b-form-input>
          <b-alert
              show
              variant="danger"
              class="error col-md-6 mt-1"
              v-if="!$v.vehicle.car_plate.minLength"> La placa debe tener minimo 6 caracterez
          </b-alert>
        </b-form-group>
      </b-col>


      <!--vinculación-->
      <b-col md="6">
        <b-form-group label="Vinculación a la empresa" label-for="date_association_company">
          <b-form-input id="date_association_company" v-model="vehicle.date_association_company"
                        class="input"
                        type="date">
          </b-form-input>
        </b-form-group>
      </b-col>


      <!--departamento-->
      <b-col md="6">
        <b-form-group label="Departamento" label-for="department">
          <b-form-select
              v-model="vehicle.department_id"
              :options="departments"
              id="department">
          </b-form-select>
        </b-form-group>
      </b-col>


      <!--Municipio-->
      <b-col md="6">
        <b-form-group label="Municipio" label-for="municipalitie">

          <select v-if="!municipalities.length" class="form-control" id="exampleFormControlSelect1">
            <option disabled>Por favor elija un departamento</option>
          </select>
          <b-form-select v-else :disabled="!municipalities.length"
                         v-model="vehicle.municipality_id"
                         :options="municipalities"
                         id="municipalitie">
          </b-form-select>
        </b-form-group>
      </b-col>


      <!--numero interno-->
      <b-col md="6">
        <b-form-group label="Numero interno" label-for="internal_number">
          <b-form-input
              class="mb-2"
              id="internal_number"
              v-model.trim="$v.vehicle.internal_number.$model">
          </b-form-input>
        </b-form-group>
      </b-col>


      <!--fecha de matricula-->
      <b-col md="6">
        <b-form-group label="Fecha matricula:" label-for="enrollment_date">
          <b-form-input id="enrollment_date" v-model="vehicle.enrollment_date"
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
              v-model.trim="$v.vehicle.chassis_number.$model">
          </b-form-input>
        </b-form-group>
      </b-col>

      <!--numero de motor-->
      <b-col md="6">
        <b-form-group label="Número de motor" label-for="chassis_number">
          <b-form-input
              class="mb-2"
              id="chassis_number"
              v-model.trim="$v.vehicle.engine_number.$model">
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
              v-model.trim="$v.vehicle.model.$model">
          </b-form-input>
          <b-alert
              show
              variant="danger"
              class="error col-md-6 mt-1"
              v-if="!$v.vehicle.model.minLength || !$v.vehicle.model.maxLength"> El numero del modelo debe ser de 4
            digitos
          </b-alert>
          <b-alert
              show
              variant="danger"
              class="error col-md-6 mt-1"
              v-if="!$v.vehicle.model.numeric"> Modelo debe ser solo numerico
          </b-alert>
        </b-form-group>
      </b-col>


      <!--Marca-->
      <b-col md="6">
        <b-form-group label="Marca" label-for="brand">
          <b-form-input
              class="mb-2"
              id="brand"
              v-model.trim="$v.vehicle.brand.$model">
          </b-form-input>
        </b-form-group>
      </b-col>

      <!--cilindro-->
      <b-col md="6">
        <b-form-group label="Cilindraje" label-for="cylinder">
          <b-form-select
              v-model="vehicle.cylinder"
              :options="cylinders"
              id="cylinder">
          </b-form-select>
        </b-form-group>
      </b-col>


      <!--Colors-->
      <b-col md="6">
        <b-form-group label="Color del vehiculo" label-for="colors">
          <b-form-select
              v-model="vehicle.color"
              :options="colors"
              id="colors">
          </b-form-select>
        </b-form-group>
      </b-col>


      <!--Clase de auto-->
      <b-col md="4">
        <b-form-group label="Clase de auto" label-for="auto_type">
          <b-form-select
              v-model="vehicle.auto_type"
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
              v-model.trim="$v.vehicle.number_seats.$model">
          </b-form-input>
        </b-form-group>
      </b-col>

      <b-col md="4">
        <b-form-group label="Tarjeta de operación" label-for="number_seats">
          <b-form-input
              class="mb-2"
              id="operation_card"
              v-model.trim="$v.vehicle.operation_card.$model">
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
    this.getDepartments();
    this.vehicle.branch_or_agreement = 'CONVENIOS'
    this.vehicle.settled_city = 'Bogota'
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
      ]
    }
  },
  validations: {
    vehicle: {
      branch_or_agreement: {
        required,
      },
      settled_city: {
        required,
      },
      operation_card: {
        required
      },
      car_plate: {
        required,
        minLength: minLength(6)
      },
      date_association_company: {
        required
      },
      department_id: {
        required,
      },
      municipality_id: {
        required,
      },
      internal_number: {
        required
      },
      enrollment_date: {
        required
      },
      chassis_number: {
        required
      },
      engine_number: {
        required
      },
      model: {
        required,
        minLength: minLength(4),
        maxLength: maxLength(4),
        numeric
      },
      brand: {
        required
      },
      cylinder: {
        required,
      },
      color: {
        required,
      },
      auto_type: {
        required
      },
      number_seats: {
        required,
        numeric
      },

    },
  },
  methods: {
    ...mapMutations(['CHANGE_SUBMIT_STATUS', 'CLEAR_ERRORS']),
    ...mapActions('cities', ['getDepartments', 'getMunicipalitiesForDepartment']),
    submit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        openNotification('Error', 'Por favor complete el formulario correctamente.', 'danger');
        return;
      }
      this.$emit('save', this.vehicle)


    },
  },
  computed: {
    ...mapGetters('vehicle', ['settledCities', 'cylinders']),
    ...mapState(['errorMessages', 'submitStatus']),
    ...mapState('cities', ['departments', 'municipalities']),
  },
  watch: {
    'vehicle.department_id': function (value) {
      this.getMunicipalitiesForDepartment(value);
    }
  }
}
</script>

<style scoped>

</style>

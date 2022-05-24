<template>
  <b-form @submit.prevent="submit">
    <b-row>
      <!--errores de validacion-->
      <b-col md="12">
        <card-error-validation v-if="errorMessages.length"/>
      </b-col>

      <!--numero interno-->
      <b-col md="4">
        <b-form-group label="Número de contrato" label-for="number">
          <b-form-input :formatter="formatYear"
              class="mb-2"
              id="number"
              v-model.trim="$v.vehicle.number.$model">
          </b-form-input>
        </b-form-group>
      </b-col>

      <!--numero interno-->
      <b-col md="4">
        <b-form-group label="Ingresos" label-for="number">
          <b-form-input
              class="mb-2"
              id="number"
              v-model.trim="$v.vehicle.incomes.$model">
          </b-form-input>
        </b-form-group>
      </b-col>

      <!--numero interno-->
      <b-col md="4">
        <b-form-group label="Tipo de contrato" label-for="number">
          <model-select
            v-model.trim="$v.vehicle.contract_type.$model"
              :options="contractTypeOptions"
            >
         </model-select>
        </b-form-group>
      </b-col>

      <!--numero interno-->
      <b-col md="6">
        <b-form-group label="Contratante" label-for="number">
          <model-select
            v-model.trim="$v.vehicle.contractor_id.$model"
              :options="contractorOptions"
            >
         </model-select>
        </b-form-group>
      </b-col>

      <!--numero interno-->
      <b-col md="6">
        <b-form-group label="Asigna vehículo" label-for="number">
          <model-select
            v-model.trim="$v.vehicle.vehicle_id.$model"
              :options="vehicleOptions"
            />
        </b-form-group>
      </b-col>

      <!--numero interno-->
      <b-col md="3">
        <b-form-group label="Asigna Primer conductor" label-for="number">
          <model-select
            v-model.trim="$v.vehicle.user_id.$model"
            :options="userOptions"
          />
          
        </b-form-group>
      </b-col>

      <!--numero interno-->
      <b-col md="3">
        <b-form-group label="Asigna Segundo conductor" label-for="number">
          <model-select
            v-model.trim="$v.vehicle.user_second_id.$model"
              :options="userOptions"
          />
        </b-form-group>
      </b-col>

      <!--numero interno-->
      <b-col md="3">
        <b-form-group label="Asigna Tercer conductor" label-for="number">
          <model-select
            v-model.trim="$v.vehicle.user_third_id.$model"
              :options="userOptions"
          />
        </b-form-group>
      </b-col>

      <!--numero interno-->
      <b-col md="3">
        <b-form-group label="Asigna Cuarto conductor" label-for="number">
          <model-select
            v-model.trim="$v.vehicle.user_four_id.$model"
              :options="userOptions"
          />
        </b-form-group>
      </b-col>


        <!--numero interno-->
      <b-col md="12">
        <b-form-group label="Objeto del contrato" label-for="object">
          <b-form-input
              class="mb-2"
              id="object"
              v-model.trim="$v.vehicle.object.$model">
          </b-form-input>
        </b-form-group>
      </b-col>

      <!--departamento-->
      <b-col md="6">
        <b-form-group label="Departamento" label-for="department">
          <model-select
            v-model="vehicle.department_id"
              :options="departments"
          />
        </b-form-group>
      </b-col>

      <!--Municipio-->
      <b-col md="6">
        <b-form-group label="Municipio" label-for="municipalitie">

          <select v-if="!municipalities.length" class="form-control" id="exampleFormControlSelect1">
            <option disabled>Por favor elija un departamento</option>
          </select>
          <model-select v-else :disabled="!municipalities.length"
            v-model="vehicle.municipality_id"
                         :options="municipalities"
          />
        </b-form-group>
      </b-col>

      <!--fecha de inicio-->
      <b-col md="4">
        <b-form-group label="Fecha de inicio:" label-for="start_date">
          <b-form-input id="start_date" v-model="vehicle.start_date"
                        class="input"
                        type="date">
          </b-form-input>
        </b-form-group>
      </b-col>

      <!--Municipio-->
      <b-col md="4">
        <b-form-group label="Nombre convenio" label-for="municipalitie">

          <b-form-input id="start_date" v-model="vehicle.convenio">
          </b-form-input>
        </b-form-group>
      </b-col>

      <!--fecha de matricula-->
      <b-col md="4">
        <b-form-group label="Fecha de finalización:" label-for="end_date">
          <b-form-input id="end_date" v-model="vehicle.end_date"
                        class="input"
                        type="date">
          </b-form-input>
        </b-form-group>
      </b-col>

      <!--numero interno-->
      <b-col md="12">
        <b-form-group label="Detalles del contrato" label-for="number">
          <b-form-input
              class="mb-2"
              id="number"
              v-model.trim="$v.vehicle.details.$model">
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
import { ModelSelect } from 'vue-search-select'

export default {
  name: "form-vehicle",
  components: {
    ModelSelect
  },
  props: {
    vehicle: {
      required: true,
      type: Object
    }
  },
  created() {
    this.CLEAR_ERRORS();
    this.CHANGE_SUBMIT_STATUS(false);
    this.getVehicles();
    this.getDepartments();
    this.getContractors();
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
      contractTypeOptions: [
        {value: 'Particular', text: 'Particular'},
        {value: 'Salud', text: 'Salud'},
        {value: 'Turismo', text: 'Turismo'},
        {value: 'Escolar', text: 'Escolar'},
        {value: 'Empresarial', text: 'Empresarial'},
      ]
    }
  },
  validations: {
    vehicle: {
      number: {
        required,
        maxLength: maxLength(4)
      },
      contractor_id: {
        required,
      },
      contract_type: {
        required
      },
      convenio: {

      },
      department_id: {
        required,
      },
      municipality_id: {
        required,
      },
      object: {
        required
      },
      incomes: {
        required
      },
      details: {
        required
      },
      vehicle_id: {
        required
      },
      user_id: {
        required
      },
      user_second_id: {
      },
      user_third_id: {
      },
      user_four_id: {
      }
    },
  },
  methods: {
    ...mapActions('vehicle', ['getVehicles']),
    ...mapActions('contractors', ['getContractors']),
    ...mapActions('user', ['getUsersVehicle']),
    ...mapMutations(['CHANGE_SUBMIT_STATUS', 'CLEAR_ERRORS']),
    ...mapActions('cities', ['getDepartments', 'getMunicipalitiesForDepartment']),
    formatYear(e){
      return String(e).substring(0,4);
    },
    submit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        openNotification('Error', 'Por favor complete el formulario correctamente.', 'danger');
        return;
      }
      this.CHANGE_SUBMIT_STATUS(true);
      this.$emit('save', this.vehicle)


    },
  },
  computed: {
    ...mapGetters('vehicle', ['vehicleOptions']),
    ...mapGetters('user', ['userOptions']),
    ...mapGetters('contractors', ['contractorOptions']),
    ...mapState(['errorMessages', 'submitStatus']),
    ...mapState('cities', ['departments', 'municipalities']),
  },
  watch: {
    'vehicle.department_id': function (value) {
      this.getMunicipalitiesForDepartment(value);
    },
    'vehicle.vehicle_id': function (value) {
      this.getUsersVehicle(value);
    }
  }
}
</script>

<style scoped>

</style>

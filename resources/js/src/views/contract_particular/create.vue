<template>
  <b-card title="Crear contrato">
    <form-wizard @on-complete="onComplete" title="" subtitle="" color="#A855F7">

      <!--============================
           CONTRATANTES
      ==============================-->
      <tab-content title="Contratante" icon="i-Administrator">


        <b-row>

          <!--numero interno-->
          <b-col md="6">
            <b-form-group label="Nit empresa contratante" label-for="nit">
              <b-form-input
                  class="mb-2"
                  id="nit"
                  v-model="payload.nit">
              </b-form-input>
            </b-form-group>
          </b-col>

          <!--numero interno-->
          <b-col md="6">
            <b-form-group label="Nombre empresa contratante" label-for="contractor">
              <b-form-input
                  class="mb-2"
                  id="contractor"
                  v-model.trim="payload.contractor">
              </b-form-input>
            </b-form-group>
          </b-col>

          <b-col md="6">
            <b-form-group label="Dirección de oficina principal" label-for="adress">
              <b-form-input
                  class="mb-2"
                  id="adress"
                  v-model.trim="payload.adress">
              </b-form-input>
            </b-form-group>
          </b-col>

          <b-col md="6">
            <b-form-group label="Teléfono celular" label-for="phone">
              <b-form-input
                  class="mb-2"
                  id="phone"
                  v-model.trim="payload.phone">
              </b-form-input>
            </b-form-group>
          </b-col>

          <b-col md="6">
            <b-form-group label="Correo electrónico" label-for="email">
              <b-form-input
                  class="mb-2"
                  id="email"
                  v-model.trim="payload.email">
              </b-form-input>
            </b-form-group>
          </b-col>

          <b-col md="6">
            <b-form-group label="Página web" label-for="web">
              <b-form-input
                  class="mb-2"
                  id="web"
                  v-model.trim="payload.web">
              </b-form-input>
            </b-form-group>
          </b-col>

          <b-col md="6">
            <b-form-group label="Nombres del contacto" label-for="c_name">
              <b-form-input
                  class="mb-2"
                  id="c_name"
                  v-model.trim="payload.c_name">
              </b-form-input>
            </b-form-group>
          </b-col>

          <b-col md="6">
            <b-form-group label="Apellidos del contacto" label-for="c_last_name">
              <b-form-input
                  class="mb-2"
                  id="c_last_name"
                  v-model.trim="payload.c_last_name">
              </b-form-input>
            </b-form-group>
          </b-col>

          <b-col md="6">
            <b-form-group label="Número de cédula de ciudadanía" label-for="c_cc">
              <b-form-input
                  class="mb-2"
                  id="c_cc"
                  v-model.trim="payload.c_cc">
              </b-form-input>
            </b-form-group>
          </b-col>

          <b-col md="6">
            <b-form-group label="Dirección" label-for="c_adress">
              <b-form-input
                  class="mb-2"
                  id="c_adress"
                  v-model.trim="payload.c_adress">
              </b-form-input>
            </b-form-group>
          </b-col>

          <b-col md="6">
            <b-form-group label="Número de celular" label-for="c_phone">
              <b-form-input
                  class="mb-2"
                  id="c_phone"
                  v-model.trim="payload.c_phone">
              </b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
      </tab-content>

      <!--============================
         CONTRATO
      ==============================-->
      <tab-content title="Contrato" icon="i-Gear">

        <b-row>
          <!--numero interno-->
          <b-col md="3">
            <b-form-group label="Número de contrato" label-for="number">
              <b-form-input
                  :formatter="formatYear"
                  class="mb-2"
                  id="number"
                  v-model.trim="payload.number">
              </b-form-input>
            </b-form-group>
          </b-col>

          <!--numero interno-->
          <b-col md="3">
            <b-form-group label="Ingresos" label-for="number">
              <b-form-input
                  class="mb-2"
                  id="number"
                  v-model.trim="payload.incomes">
              </b-form-input>
            </b-form-group>
          </b-col>

          <b-col md="3">
            <b-form-group label="Tipo de contrato" label-for="number">
              <model-select
                  v-model.trim="payload.contract_type"
                  :options="contractTypeOptions"
              />
            </b-form-group>
          </b-col>


          <b-col md="3">
            <b-form-group label="Asigna vehículo" label-for="number">
              <model-select
                  v-model.trim="payload.vehicle_id"
                  :options="vehicleOptions"
              />
            </b-form-group>
          </b-col>

          <!--numero interno-->
          <b-col md="3">
            <b-form-group label="Asigna Primer conductor" label-for="number">
              <model-select
                  v-model.trim="payload.user_id"
                  :options="userOptions"
              />
            </b-form-group>
          </b-col>

          <!--numero interno-->
          <b-col md="3">
            <b-form-group label="Asigna Segundo conductor" label-for="number">
              <model-select
                  v-model.trim="payload.user_second_id"
                  :options="userOptions"
              />
            </b-form-group>
          </b-col>

          <!--numero interno-->
          <b-col md="3">
            <b-form-group label="Asigna Tercer conductor" label-for="number">
              <model-select
                  v-model.trim="payload.user_third_id"
                  :options="userOptions"
              />
            </b-form-group>
          </b-col>

          <!--numero interno-->
          <b-col md="3">
            <b-form-group label="Asigna Cuarto conductor" label-for="number">
              <model-select
                  v-model.trim="payload.user_four_id"
                  :options="userOptions"
              />
            </b-form-group>
          </b-col>


          <b-col md="12">
            <b-form-group label="Objeto del contrato" label-for="object">
              <b-form-input
                  class="mb-2"
                  id="object"
                  v-model.trim="payload.object">
              </b-form-input>
            </b-form-group>
          </b-col>


          <b-col md="4">
            <b-form-group label="Departamento" label-for="department">
              <model-select
                  v-model="payload.department_id"
                  :options="departments"
              />
            </b-form-group>
          </b-col>


          <b-col md="4">
            <b-form-group label="Municipio" label-for="municipalitie">

              <select v-if="!municipalities.length" class="form-control" id="exampleFormControlSelect1">
                <option disabled>Por favor elija un departamento</option>
              </select>
              <model-select v-else :disabled="!municipalities.length"
                            v-model="payload.municipality_id"
                            :options="municipalities"
              />
            </b-form-group>
          </b-col>

          <b-col md="4">
            <b-form-group label="Nombre del convenio" label-for="department">
              <b-form-input id="convenio" v-model="payload.convenio">
              </b-form-input>
            </b-form-group>
          </b-col>

          <b-col md="6">
            <b-form-group label="Fecha de inicio:" label-for="start_date">
              <b-form-input id="start_date" v-model="payload.start_date"
                            class="input"
                            type="date">
              </b-form-input>
            </b-form-group>
          </b-col>


          <b-col md="6">
            <b-form-group label="Fecha de finalización:" label-for="end_date">
              <b-form-input id="end_date" v-model="payload.end_date"
                            class="input"
                            type="date">
              </b-form-input>
            </b-form-group>
          </b-col>


          <b-col md="12">
            <b-form-group label="Detalles del contrato" label-for="number">
              <b-form-input
                  class="mb-2"
                  id="number"
                  v-model.trim="payload.details">
              </b-form-input>
            </b-form-group>
          </b-col>

        </b-row>

      </tab-content>
    </form-wizard>
  </b-card>
</template>

<script>
import {mapActions, mapGetters, mapState} from "vuex";
import {required} from "vuelidate/lib/validators";
import {ModelSelect} from 'vue-search-select'

export default {
  name: "create",
  components: {
    ModelSelect
  },
  created() {
    if (!this.adminPermissions()) {
      this.$router.push({name: 'not-found'});
    }
    this.getDepartments();
    if (this.role == 'admin') {
      this.getVehicles();
    } else {
      this.getMyVehicles();
    }
  },
  data() {
    return {
      payload: {
        nit: '',
        contractor: '',
        adress: '',
        phone: '',
        email: '',
        web: '',
        c_name: '',
        c_last_name: '',
        c_cc: '',
        c_adress: '',
        c_phone: '',

        number: '',
        department_id: '',
        municipality_id: '',
        start_date: '',
        convenio: '',
        end_date: '',
        object: '',
        incomes: '',
        details: '',
        vehicle_id: '',
        contract_type: '',
        user_id: '',
        user_four_id: '',
        user_second_id: '',
        user_third_id: ''
      },
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
    payload: {
      nit: {
        required,
      },
      contractor: {
        required,
      },
      adress: {
        required,
      },
      phone: {
        required,
      },
      email: {
        required
      },
      web: {
        required
      },
      c_name: {
        required
      },
      c_last_name: {
        required
      },
      c_cc: {
        required
      },
      c_adress: {
        required,
      },
      c_phone: {
        required,
      },

      number: {
        required
      },
      incomes: {
        required
      },
      vehicle_id: {
        required
      },
      contract_type: {
        required
      },
      convenio: {},
      user_four_id: {},
      user_second_id: {},
      user_third_id: {},
      user_id: {},
      object: {
        required
      },
      department_id: {
        required
      },
      municipality_id: {
        required
      },
      start_date: {
        required
      },
      end_date: {
        required
      },
      details: {
        required
      },
    },
  },
  methods: {
    ...mapActions('cities', ['getDepartments', 'getMunicipalitiesForDepartment']),
    ...mapActions('user', ['getUsersVehicle']),
    ...mapActions('vehicle', ['getMyVehicles', 'getVehicles']),
    ...mapActions('contracts', ['createContractsWithContracts']),
    formatYear(e) {
      return String(e).substring(0, 4);
    },
    onComplete: function () {
      if (this.$v.$invalid) {
        openNotification('Error', 'Por favor complete el formulario correctamente.', 'danger');
        return;
      }
      this.createContractsWithContracts(this.payload).then(response => {
        openNotification();
        this.$router.push({name: 'contrato-particular-lista'})
      })
    },
    adminPermissions() {
      return this.abilities.includes('*') || this.abilities.includes('contrato-particular-administracion');
    },

  },
  computed: {
    ...mapState('auth', ["role"]),
    ...mapGetters('vehicle', ['vehicleOptions']),
    ...mapGetters('user', ['userOptions']),
    ...mapGetters('contractors', ['contractorOptions']),
    ...mapState(['errorMessages', 'submitStatus']),
    ...mapState('cities', ['departments', 'municipalities']),
    ...mapState('auth', ['abilities']),
  },
  watch: {
    'payload.department_id': function (value) {
      this.getMunicipalitiesForDepartment(value);
    },
    'payload.vehicle_id': function (value) {
      this.getUsersVehicle(value);
    }
  }
}
</script>

<style scoped>

</style>

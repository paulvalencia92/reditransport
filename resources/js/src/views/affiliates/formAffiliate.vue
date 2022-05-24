<template>
  <b-form @submit.prevent="submit">
    <b-row>

      <b-col md="12">
        <card-error-validation v-if="errorMessages.length"/>
      </b-col>

      <!--nombres-->
      <b-col md="6">
        <b-form-group label="Nombres">
          <b-form-input
              class="mb-2"
              label="Nombres"
              v-model.trim="$v.driver.names.$model">
          </b-form-input>
          <b-alert
              show
              variant="danger"
              class="error col-md-6 mt-1"
              v-if="!$v.driver.names.minLength"> Debe ser mayor a 2
          </b-alert>
        </b-form-group>
      </b-col>

      <!--apellidos-->
      <b-col md="6">
        <b-form-group label="Apellidos">
          <b-form-input
              class="mb-2"
              label="Nombres"
              v-model.trim="$v.driver.surnames.$model">
          </b-form-input>
          <b-alert
              show
              variant="danger"
              class="error col-md-6 mt-1"
              v-if="!$v.driver.surnames.minLength">Apellidos deben ser mayor a 2
          </b-alert>
        </b-form-group>
      </b-col>

      <!--Tipo de identificacion-->
      <b-col md="6">
        <b-form-group label="Tipo de identificación" label-for="identificacion-type">
          <b-form-select
              v-model="driver.id_type_id"
              :options="idTypesOptions"
              id="identificacion-type">
          </b-form-select>
        </b-form-group>
      </b-col>

      <!--Identificacíon-->
      <b-col md="6">
        <b-form-group label="Identificación">
          <b-form-input
              class="mb-2"
              label="Nombres"
              v-model.trim="$v.driver.identification_number.$model">
          </b-form-input>
          <b-alert
              show
              variant="danger"
              class="error col-md-6 mt-1"
              v-if="!$v.driver.identification_number.minLength">Identificacion debe ser mayor a 5
          </b-alert>
        </b-form-group>
      </b-col>


      <!--departamento-->
      <b-col md="6">
        <b-form-group label="Departamento" label-for="department">
          <b-form-select
              v-model="driver.department_id"
              :options="departmentsOptions"
              id="department">
          </b-form-select>
        </b-form-group>
      </b-col>


      <!--Municipio-->
      <b-col md="6">
        <b-form-group label="Municipio" label-for="municipalitie">
          <b-form-select
              v-model="driver.municipality_id"
              :options="municipalitiesOptions"
              id="municipalitie">
          </b-form-select>
        </b-form-group>
      </b-col>


      <!--fecha de nacimiento-->
      <b-col md="6">
        <b-form-group label="Fecha de nacimiento" label-for="date_of_birth">
          <b-form-input id="date_of_birth" v-model="driver.date_of_birth"
                        class="input"
                        type="date">
          </b-form-input>
        </b-form-group>
      </b-col>


      <!--Sexo-->
      <b-col md="6">
        <b-form-group label="Genero" label-for="sex">
          <b-form-select
              v-model="driver.sex"
              :options="sexOptions"
              id="sex">
          </b-form-select>
        </b-form-group>
      </b-col>


      <!--direccion-->
      <b-col md="6">
        <b-form-group label="Dirección residencial" label-for="residence_address">
          <b-form-input
              class="mb-2"
              id="residence_address"
              v-model.trim="$v.driver.residence_address.$model">
          </b-form-input>
          <b-alert
              show
              variant="danger"
              class="error col-md-6 mt-1"
              v-if="!$v.driver.residence_address.minLength">Dirección debe ser mayor a 5
          </b-alert>
        </b-form-group>
      </b-col>

      <!--telefono-->
      <b-col md="6">
        <b-form-group label="Telefono celular" label-for="phone_number">
          <b-form-input
              class="mb-2"
              id="phone_number"
              v-model.trim="$v.driver.phone_number.$model">
          </b-form-input>
          <b-alert
              show
              variant="danger"
              class="error col-md-6 mt-1"
              v-if="!$v.driver.phone_number.minLength">Dirección debe ser mayor a 5
          </b-alert>
        </b-form-group>
      </b-col>


      <!--correo electronico-->
      <b-col md="6">
        <b-form-group label="Correo electronico" label-for="email">
          <b-form-input
              class="mb-2"
              id="email"
              v-model.trim="$v.driver.email.$model">
          </b-form-input>
          <b-alert
              show
              variant="danger"
              class="error col-md-6 mt-1"
              v-if="!$v.driver.email.email">Debe ser un correo electronico
          </b-alert>
        </b-form-group>
      </b-col>


      <!--correo electronico-->
      <b-col md="6">
        <b-form-group label="Rol asignado" label-for="email">
         <b-form-select
              v-model="driver.role"
              :options="roleOptions"
              id="identificacion-type">
          </b-form-select>
        </b-form-group>
      </b-col>


      <b-col md="12" class="text-right">
        <b-button type="submit" variant="primary" :disabled="submitStatus === true">Guardar</b-button>
      </b-col>

      <b-col md="12">
        <div v-once class="typo__p" v-if="submitStatus">
          <div class="spinner sm spinner-primary mt-3"></div>
        </div>
      </b-col>


    </b-row>
  </b-form>
</template>

<script>
import {email, minLength, required} from "vuelidate/lib/validators";
import axios from "axios";
import {mapActions, mapGetters, mapMutations, mapState} from "vuex";

export default {
  name: "formAffiliate",
  props: {
    driverDraft: {
      required: true,
      type: Object
    }
  },
  created() {
    this.driver = this.driverDraft;
    this.getIdTypes();
    this.getRoles();
    this.getDepartments();
    this.getMunicipalitiesForDepartment();
  },
  data() {
    return {
      driver: {
        id: null,
        role: '',
        names: '',
        surnames: '',
        id_type_id: '',
        identification_number: '',
        department_id: '',
        municipality_id: '',
        date_of_birth: '',
        sex: '',
        residence_address: '',
        phone_number: '',
        email: '',
      },
      idTypesOptions: [],
      departmentsOptions: [],
      departmentId: null,
      municipalitiesOptions: [],
      sexOptions: [
        {value: 'Masculino', text: 'Masculino'},
        {value: 'Femenino', text: 'Femenino'},
      ],
      rolesOptions: [
        { value: 'ADMIN', text: 'Administrador'},
        { value: 'CONDUCTOR', text: 'Conductor'},
        { value: 'DUEÑO', text: 'Dueño de vehículo'}
      ]
    };
  },
  validations: {
    driver: {
      role: {
        required
      },
      names: {
        required,
        minLength: minLength(2)
      },
      surnames: {
        required,
        minLength: minLength(2)
      },
      id_type_id: {
        required,
      },
      department_id: {
        required,
      },
      municipality_id: {
        required,
      },
      identification_number: {
        required,
        minLength: minLength(5)
      },
      sex: {
        required,
      },
      residence_address: {
        required,
        minLength: minLength(5)
      },
      phone_number: {
        required,
        minLength: minLength(5)
      },
      email: {
        required,
        email
      },
    },
  },

  methods: {
    ...mapMutations(['CHANGE_SUBMIT_STATUS']),
    ...mapActions('roles',['getRoles']),
    submit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        openNotification('Error', 'Por favor complete el formulario correctamente.', 'danger');
        return;
      }
      this.$emit('save', this.driver)
    },
    async getIdTypes() {
      const response = await axios.get('/api/idtypes');
      this.idTypesOptions = response.data;
    },
    async getDepartments() {
      const response = await axios.get('/api/departments');
      this.departmentsOptions = response.data;
    },
    async getMunicipalitiesForDepartment() {
      const response = await axios.get('/api/municipalities', {params: {departmentId: this.driver.department_id}});
      this.municipalitiesOptions = response.data;
    },
  },
  computed: {
    ...mapState(['errorMessages','submitStatus']),
    ...mapGetters('roles',['roleOptions'])
  },
  watch: {
    'driver.department_id': function (value) {
      this.getMunicipalitiesForDepartment();
    }
  }
}
</script>

<style>
.spinner.sm {
  height: 2em;
  width: 2em;
}
</style>

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
              v-model.trim="driver.names">
          </b-form-input>
        </b-form-group>
      </b-col>

      <!--apellidos-->
      <b-col md="6">
        <b-form-group label="Apellidos">
          <b-form-input
              class="mb-2"
              label="Nombres"
              v-model.trim="driver.surnames">
          </b-form-input>
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
              v-model.trim="driver.identification_number">
          </b-form-input>
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
              v-model.trim="driver.residence_address">
          </b-form-input>
        </b-form-group>
      </b-col>

      <!--telefono-->
      <b-col md="6">
        <b-form-group label="Telefono celular" label-for="phone_number">
          <b-form-input
              class="mb-2"
              id="phone_number"
              v-model.trim="driver.phone_number">
          </b-form-input>
        </b-form-group>
      </b-col>


      <!--correo electronico-->
      <b-col md="6">
        <b-form-group label="Correo electronico" label-for="email">
          <b-form-input
              class="mb-2"
              id="email"
              v-model.trim="driver.email">
          </b-form-input>
        </b-form-group>
      </b-col>

      <b-col md="6">
        <b-form-group label="Cedula" label-for="email">
          <b-form-file
              v-model="driver.file_cc"
              browse-text="Guardar"
              :state="Boolean(driver.file_cc)"
              placeholder="Elija un archivo o suéltelo aquí ... "
              drop-placeholder="Suelta el archivo aquí ...">
          </b-form-file>
        </b-form-group>
      </b-col>

    </b-row>
  </b-form>
</template>

<script>

import axios from "axios";
import {mapActions, mapMutations, mapState} from "vuex";

export default {
  name: "formOwner",
  props: {
    driver: {
      required: true,
      type: Object
    }
  },
  created() {
    this.CHANGE_SUBMIT_STATUS(null);
    this.getIdTypes();
    this.getDepartments();
    this.getMunicipalitiesForDepartment();
  },
  data() {
    return {
      idTypesOptions: [],
      departmentsOptions: [],
      departmentId: null,
      municipalitiesOptions: [],
      sexOptions: [
        {value: 'Masculino', text: 'Masculino'},
        {value: 'Femenino', text: 'Femenino'},
      ],
    };
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
      this.$emit('save', this.driver)
    },
    async getIdTypes() {
      const response = await axios.get('/api/idtypes-public');
      this.idTypesOptions = response.data;
    },
    async getDepartments() {
      const response = await axios.get('/api/departments-public');
      this.departmentsOptions = response.data;
    },
    async getMunicipalitiesForDepartment() {
      const response = await axios.get('/api/municipalities-public', {params: {departmentId: this.driver.department_id}});
      this.municipalitiesOptions = response.data;
    },
  },
  computed: {
    ...mapState(['errorMessages']),
    ...mapState(['submitStatus'])
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

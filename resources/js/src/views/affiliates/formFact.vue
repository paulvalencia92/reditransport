<template>
  <b-form @submit.prevent="submit">
    <b-row>

      <!--Tipo de persona-->
      <b-col md="3">
        <b-form-group label="Tipo de persona">
          <b-form-select v-model="payload.type_organization_id">
            <b-form-select-option value="1">Persona Jurídica</b-form-select-option>
            <b-form-select-option value="2">Persona Natural</b-form-select-option>
          </b-form-select>
        </b-form-group>
      </b-col>

      <!--Tipo de régimen-->
      <b-col md="3">
        <b-form-group label="Tipo de régimen">
          <b-form-select v-model="payload.type_regime_id">
            <b-form-select-option value="1">Responsable de IVA</b-form-select-option>
            <b-form-select-option value="2">No Responsable de IVA</b-form-select-option>
          </b-form-select>
        </b-form-group>
      </b-col>

      <!--Tipo de identificacion-->
      <b-col md="3">
        <b-form-group label="Tipo de identificación">
          <b-form-select v-model="payload.type_document_identification_id"
                         :options="typesIdentification"
          />
        </b-form-group>
      </b-col>


      <!--Tipo de obligación-->
      <b-col md="3">
        <b-form-group label="Tipo de obligación">
          <b-form-select v-model="payload.type_liability_id"
                         :options="typesLiability"
          />
        </b-form-group>
      </b-col>

      <!--N° Identificación-->
      <b-col md="4">
        <b-form-group label="N° Identificación">
          <b-form-input v-model.trim="payload.identification_number"/>
        </b-form-group>
      </b-col>


      <!--DV-->
      <b-col md="3">
        <b-form-group label="N° Dv">
          <b-form-input v-model.trim="payload.dv"/>
        </b-form-group>
      </b-col>


      <!--Name-->
      <b-col md="4">
        <b-form-group label="Nombre">
          <b-form-input disabled v-model="payload.name"/>
        </b-form-group>
      </b-col>

      <b-col md="4">
        <b-form-group label="Nombre">
          <b-form-input disabled v-model="payload.email"/>
        </b-form-group>
      </b-col>


      <!--TELEFONO-->
      <b-col md="4">
        <b-form-group label="Telefono">
          <b-form-input v-model="payload.phone"/>
        </b-form-group>
      </b-col>


      <!--DIRECCION-->
      <b-col md="4">
        <b-form-group label="Dirección">
          <b-form-input v-model="payload.address"/>
        </b-form-group>
      </b-col>


      <!-- Código interno-->
      <b-col md="4">
        <b-form-group label=" Código interno">
          <b-form-input v-model="payload.merchant_registration"/>
        </b-form-group>
      </b-col>


      <b-col md="12" class="text-right mt-4">
        <b-button
            type="submit"
            variant="primary"
            :disabled="submitStatus">
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
  name: "formFact",
  props: ['user'],
  created() {
    this.CHANGE_SUBMIT_STATUS(false);
    this.CLEAR_ERRORS();
    this.payload.user_id = this.user.id;
    this.payload.identification_number = this.user.identification_number;
    this.payload.municipality_id = this.user.municipality_id;
    this.payload.name = this.user.full_name;
    this.payload.phone = this.user.phone_number;
    this.payload.address = this.user.residence_address;
    this.payload.email = this.user.email;
    this.getCustomer();
  },
  data() {
    return {
      payload: {
        user_id: '',
        type_organization_id: '',
        type_regime_id: '',
        type_document_identification_id: '',
        type_liability_id: '',
        identification_number: '',
        dv: '',
        name: '',
        phone: '',
        address: '',
        email: '',
        merchant_registration: '',
        municipality_id: '',

      }
    }
  },
  validations: {
    payload: {
      type_organization_id: {
        required,
      },
      type_regime_id: {
        required,
      },
      type_document_identification_id: {
        required,
      },
      type_liability_id: {
        required,
      },
      identification_number: {
        required,
      },
      dv: {
        required,
      },
      name: {
        required,
      },
      phone: {
        required,
      },
      address: {
        required,
      },
      email: {
        required,
      },
      merchant_registration: {
        required,
      },
    }
  },
  methods: {
    ...mapMutations(['CHANGE_SUBMIT_STATUS', 'CLEAR_ERRORS']),
    ...mapActions('user', ['createCustomer']),
    submit() {
      this.CHANGE_SUBMIT_STATUS(true);
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.isInvalid();
        return;
      }
      this.createCustomer(this.payload)
          .then(response => {
            openNotification();
            this.payload = response;
          })
          .catch(errors => this.errorMessages = errors)
      this.CHANGE_SUBMIT_STATUS(false);
    },
    isInvalid() {
      openNotification("Error", "Por favor complete el formulario correctamente.", "danger");
      this.CHANGE_SUBMIT_STATUS(false);
      return;
    },
    async getCustomer() {
      const response = await axios.get('/api/customers-show', {params: {user_id: this.user.id}});
      if (response.data.hasOwnProperty("id")){
        this.payload = response.data;
      }
    }
  },
  computed: {
    ...mapState(["errorMessages", "submitStatus"]),
    typesIdentification() {
      return [
        {value: '1', text: 'Registro civil'},
        {value: '2', text: 'Tarjeta de identidad'},
        {value: '3', text: 'Cédula de ciudadanía'},
        {value: '4', text: 'Tarjeta de extranjería'},
        {value: '5', text: 'Cédula de extranjería'},
        {value: '6', text: 'NIT'},
        {value: '7', text: 'Pasaporte'},
        {value: '8', text: 'Documento de identificación extranjero'},
        {value: '9', text: 'NIT de otro país'},
        {value: '10', text: 'NUIP *'},
        {value: '11', text: 'PEP'}
      ]
    },
    typesLiability() {
      return [
        {value: '7', text: 'Gran contribuyente'},
        {value: '9', text: 'Autorretenedor'},
        {value: '14', text: 'Agente de retención en el impuesto sobre las ventas'},
        {value: '112', text: 'Régimen Simple de Tributación – SIMPLE'},
        {value: '117', text: 'No responsable'}
      ]
    }
  }
}
</script>

<style scoped>

</style>

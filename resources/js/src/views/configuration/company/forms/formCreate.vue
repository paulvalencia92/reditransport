<template>
  <b-form @submit.prevent="submit">
    <b-row>
      <b-col md="12">
        <card-error-validation v-if="errorMessages.length"/>
      </b-col>

      <!--Tipo de identificacion-->
      <b-col md="6">
        <b-form-group
            label="Tipo de Documento"
            label-for="type_document_identification"
        >
          <b-form-select
              v-model="payload.type_document_identification_id"
              :options="typesDocumentIdentification"
              id="type_document_identification"
          >
          </b-form-select>
        </b-form-group>
      </b-col>

      <!--Tipo de organizacion-->
      <b-col md="6">
        <b-form-group
            label="Tipo de Organizacion"
            label-for="type_organization"
        >
          <b-form-select
              v-model="payload.type_organization_id"
              id="type_organization"
          >
            <b-form-select-option value="1">Persona Jurídica y asimiladas</b-form-select-option>
            <b-form-select-option value="2">Persona Natural y asimiladas</b-form-select-option>
          </b-form-select>
        </b-form-group>
      </b-col>

      <!--Tipo de Regimen-->
      <b-col md="6">
        <b-form-group label="Tipo de regimen" label-for="type_regime_id">
          <b-form-select v-model="payload.type_regime_id">
            <b-form-select-option value="1"
            >Responsable de IVA
            </b-form-select-option
            >
            <b-form-select-option value="2"
            >No Responsable de IVA
            </b-form-select-option
            >
          </b-form-select>
        </b-form-group>
      </b-col>

      <!--Tipo de Responsabilidad-->
      <b-col md="6">
        <b-form-group
            label="Tipo Responsabilidad"
            label-for="type_liability_id"
        >
          <b-form-select v-model="payload.type_liability_id">
            <b-form-select-option value="7"
            >Gran contribuyente
            </b-form-select-option
            >
            <b-form-select-option value="9"
            >Autorretenedor
            </b-form-select-option
            >
            <b-form-select-option value="14"
            >Agente de retención en el impuesto sobre las ventas
            </b-form-select-option>
            <b-form-select-option value="112"
            >Régimen Simple de Tributación – SIMPLE
            </b-form-select-option
            >
            <b-form-select-option value="117"
            >No responsable
            </b-form-select-option
            >
          </b-form-select>
        </b-form-group>
      </b-col>

      <b-col md="6">
        <b-form-group label="Idenfiticación">
          <b-form-input :disabled="user.is_created_dian" class="mb-2" label="Nit" v-model.trim="payload.nit">
          </b-form-input>
        </b-form-group>
      </b-col>

      <b-col md="6">
        <b-form-group label="Dv">
          <b-form-input
              class="mb-2"
              type="number"
              label="Dv"
              v-model.trim="payload.dv"
          >
          </b-form-input>
        </b-form-group>
      </b-col>

      <b-col md="6">
        <b-form-group label="Empresa">
          <b-form-input
              class="mb-2"
              label="Empresa"
              v-model.trim="payload.business_name"
          >
          </b-form-input>
        </b-form-group>
      </b-col>

      <b-col md="6">
        <b-form-group label="Registro Mercantil">
          <b-form-input
              class="mb-2"
              v-model.trim="payload.merchant_registration"
          >
          </b-form-input>
        </b-form-group>
      </b-col>

      <b-col md="6">
        <b-form-group label="Dirección">
          <b-form-input class="mb-2" v-model.trim="payload.address">
          </b-form-input>
        </b-form-group>
      </b-col>

      <b-col md="6">
        <b-form-group label="Telefono">
          <b-form-input class="mb-2" v-model.trim="payload.phone">
          </b-form-input>
        </b-form-group>
      </b-col>

      <b-col md="6">
        <b-form-group label="Correo electronico">
          <b-form-input class="mb-2" type="email" v-model.trim="payload.email">
          </b-form-input>
        </b-form-group>
      </b-col>

      <!--departamento-->
      <b-col md="6">
        <b-form-group label="Departamento" label-for="department">
          <b-form-select
              v-model="payload.department_id"
              :options="departmentsOptions"
              id="department"
          >
          </b-form-select>
        </b-form-group>
      </b-col>

      <!--Municipio-->
      <b-col md="6">
        <b-form-group label="Municipio" label-for="municipalitie">
          <b-form-select
              v-model="payload.municipality_id"
              :options="municipalitiesOptions"
              id="municipalitie"
          >
          </b-form-select>
        </b-form-group>
      </b-col>


      <b-col md="12" class="text-right">
        <b-button
            type="submit"
            variant="primary"
            :disabled="submitStatus === 'PENDING'"
        >Guardar
        </b-button
        >
      </b-col>

    </b-row>
  </b-form>
</template>

<script>
import {mapActions, mapGetters, mapMutations, mapState} from "vuex";
import axios from "axios";
import {required} from "vuelidate/lib/validators";

export default {
  name: "formCreate",
  created() {
    this.CLEAR_ERRORS();
    this.CHANGE_SUBMIT_STATUS(false);
    this.getInfoCompany().then(response => {
      this.payload = response;
    })
    this.getDepartments();
  },
  data() {
    return {
      payload: {
        type_document_identification_id: null,
        type_organization_id: null,
        type_regime_id: null,
        type_liability_id: null,
        nit: null,
        dv: null,
        business_name: null,
        merchant_registration: null,
        department_id: null,
        municipality_id: null,
        address: null,
        phone: null,
        email: null,
        mail_host: "smtp.gmail.com",
        mail_port: "587",
        mail_username: "backupsbabel7@gmail.com",
        mail_password: "ccjruqddyqlqvttt",
        mail_encryption: "tls",
      },
      departmentsOptions: [],
      municipalitiesOptions: [],
    };
  },
  validations: {
    payload: {
      type_document_identification_id: {
        required,
      },
      type_organization_id: {
        required,
      },
      type_regime_id: {
        required,
      },
      type_liability_id: {
        required,
      },
      nit: {
        required,
      },
      dv: {
        required,
      },
      business_name: {
        required,
      },
      merchant_registration: {
        required,
      },
      department_id: {
        required,
      },
      municipality_id: {
        required,
      },
      address: {
        required,
      },
      phone: {
        required,
      },
      email: {
        required,
      },
    },
  },

  methods: {
    ...mapActions("electronicBilling", ["registerAsACompany", 'getInfoCompany']),
    ...mapMutations(['CHANGE_SUBMIT_STATUS', 'CLEAR_ERRORS']),
    ...mapMutations('auth', ['UPDATE_USER']),
    async getDepartments() {
      const response = await axios.get("/api/departments");
      this.departmentsOptions = response.data;
    },
    async getMunicipalitiesForDepartment() {
      const response = await axios.get("/api/municipalities", {
        params: {departmentId: this.payload.department_id},
      });
      this.municipalitiesOptions = response.data;
    },
    submit() {
      this.CHANGE_SUBMIT_STATUS(true);
      this.$v.$touch();
      if (this.$v.$invalid) {
        openNotification(
            "Error",
            "Por favor complete el formulario correctamente.",
            "danger"
        );
        return;
      }
      this.registerAsACompany(this.payload).then(response => {
        openNotification();
        if (!this.user.is_created_dian) {
          this.updateDataDian({nit: response.company.identification_number, token: response.token});
          this.getInfoCompany();
        }
        this.CHANGE_SUBMIT_STATUS(false);
      });
    },
    async updateDataDian(payload) {
      const response = await axios.put('/api/user-update-nit/' + this.user.id, payload);
      this.UPDATE_USER(response.data);
    }
  },
  computed: {
    ...mapState(["errorMessages", "submitStatus"]),
    ...mapState('auth', ["user"]),
    ...mapGetters("electronicBilling", [
      "typesDocumentIdentification",
      "typeOrganization",
    ]),
  },
  watch: {
    "payload.department_id": function (value) {
      this.getMunicipalitiesForDepartment();
    },
  },
};
</script>

<style scoped>
</style>

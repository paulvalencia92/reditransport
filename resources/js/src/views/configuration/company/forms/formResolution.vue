<template>
  <div>

    <!--============================
     TABLA DE RESOLUCIONES
    ==============================-->
    <b-table
        class="mb-4"
        :fields="fields"
        :items="resolutions">
      <template v-slot:cell(operations)="data">
        <b-button @click="selectResolution(data.item)"
                  squared size="xs"
                  variant="outline-light">
          Seleccionar
        </b-button>
        <b-button @click="modalConfirmDelete(data.item.id)"
                  squared size="xs"
                  variant="outline-danger">
          Eliminar
        </b-button>
      </template>
    </b-table>

    <!--============================
      Formulario
    ==============================-->
    <b-form @submit.prevent="submit">
      <b-row>

        <b-col md="12" v-if="errorMessages.length">
          <b-alert show variant="danger">
            <h4 class="alert-heading">Se encontraron los siguientes errores</h4>
            <p v-for="(error,index) in errorMessages" :key="index">
              <i class="iconsminds-close"/> {{ error.join() }}
            </p>
          </b-alert>
        </b-col>

        <!--tipo de factura-->
        <b-col md="4">
          <b-form-group
              label="Tipo de Documento"
              label-for="type_document_identification"
          >
            <b-form-select
                v-model="payload.type_document_id"
                :options="typesInvoicesResolution"
                id="type_document_identification"
            >
            </b-form-select>
          </b-form-group>
        </b-col>


        <!--prefijo-->
        <b-col md="4">
          <b-form-group label="Prefijo">
            <b-form-input class="mb-2" v-model.trim="payload.prefix">
            </b-form-input>
          </b-form-group>
        </b-col>


        <!--resolution-->
        <b-col md="4">
          <b-form-group label="Resolucion">
            <b-form-input class="mb-2" v-model.trim="payload.resolution">
            </b-form-input>
          </b-form-group>
        </b-col>


        <!--Fecha de resolucion-->
        <b-col md="4">
          <b-form-group label="Fecha de resolucion">
            <b-form-input class="mb-2" type="date" v-model.trim="payload.resolution_date">
            </b-form-input>
          </b-form-group>
        </b-col>


        <!--Fecha Desde-->
        <b-col md="4">
          <b-form-group label="Fecha Desde">
            <b-form-input class="mb-2" type="date" v-model.trim="payload.date_from">
            </b-form-input>
          </b-form-group>
        </b-col>


        <!--Fecha hasta-->
        <b-col md="4">
          <b-form-group label="Fecha hasta">
            <b-form-input class="mb-2" type="date" v-model.trim="payload.date_to">
            </b-form-input>
          </b-form-group>
        </b-col>


        <!--Desde -->
        <b-col md="4">
          <b-form-group label="Desde">
            <b-form-input class="mb-2" type="number" v-model.trim="payload.from">
            </b-form-input>
          </b-form-group>
        </b-col>


        <!--hasta-->
        <b-col md="4">
          <b-form-group label="Hasta">
            <b-form-input class="mb-2" type="number" v-model.trim="payload.to">
            </b-form-input>
          </b-form-group>
        </b-col>


        <!--Clave tecnica-->
        <b-col md="4">
          <b-form-group label="Clave tecnica">
            <b-form-input class="mb-2" v-model.trim="payload.technical_key">
            </b-form-input>
          </b-form-group>
        </b-col>


        <b-col md="12" class="text-right">
          <b-overlay
              :show="submitStatus"
              rounded
              opacity="0.6"
              spinner-small
              spinner-variant="primary"
              class="d-inline-block"
          >
            <b-button
                type="submit"
                variant="primary"
                :disabled="submitStatus">
              Guardar
            </b-button>
          </b-overlay>
        </b-col>


      </b-row>

    </b-form>
  </div>

</template>

<script>
import {mapActions, mapGetters, mapMutations, mapState} from "vuex";
import {required} from "vuelidate/lib/validators";

export default {
  name: "formResolution",
  created() {
    this.errorMessages = [];
    this.getResolutions();
  },
  data() {
    return {
      payload: {
        type_document_id: '',
        prefix: 'RDT',
        resolution: '18760000001',
        resolution_date: '',
        date_from: '',
        date_to: '',
        from: '',
        to: '',
        technical_key: '8e42216228694340638162',
      },
      errorMessages: [],
      submitStatus: false,
      fields: [
        {key: 'type_document.name', label: 'Tipo Doc.'},
        {key: 'prefix', label: 'Prefijo'},
        {key: 'resolution', label: 'Número'},
        {key: 'from', label: 'Fecha desde'},
        {key: 'to', label: 'Fecha hasta'},
        {key: 'date_from', label: 'Desde'},
        {key: 'date_to', label: 'Hasta'},
        {key: 'operations', label: 'Operaciones'},
      ]
    }
  },
  methods: {
    ...mapActions("electronicBilling", ["registerResolution", "getResolutions", "deleteResolution"]),
    ...mapMutations(['CHANGE_SUBMIT_STATUS', 'CLEAR_ERRORS']),
    submit() {
      this.CHANGE_SUBMIT_STATUS(true);
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.isInvalid();
        return;
      }
      this.registerResolution(this.payload)
          .then(response => {
            openNotification();
            this.getResolutions();
          })
          .catch(errors => this.errorMessages = errors)
      this.CHANGE_SUBMIT_STATUS(false);
    },
    isInvalid() {
      openNotification("Error", "Por favor complete el formulario correctamente.", "danger");
      this.CHANGE_SUBMIT_STATUS(false);
      return;
    },
    CHANGE_SUBMIT_STATUS(status) {
      this.submitStatus = status;
    },
    selectResolution(data) {
      this.payload = clone(data);
    },
    modalConfirmDelete(id) {
      this.$bvModal
          .msgBoxConfirm("¿Desea eliminar el registro?", {
            title: 'Eliminar',
            size: "sm",
            buttonSize: "sm",
            okVariant: "outline-danger",
            okTitle: "Eliminar",
            cancelTitle: "No",
            cancelVariant: "outline-primary",
            footerClass: "p-2",
            hideHeaderClose: false,
            centered: true
          }).then(value => {
        if (!value) return;
        this.deleteResolution(id).then(response => {
          openNotification("La acción se ejecuto correctamente", "La resolución ha sido eliminada");
          this.getResolutions();
        });
      })
    },
  },
  computed: {
    ...mapGetters('electronicBilling', ['typesInvoicesResolution']),
    ...mapState('electronicBilling', ['resolutions'])
  },
  validations: {
    payload: {
      type_document_id: {
        required,
      },
      prefix: {
        required,
      },
      resolution: {
        required,
      },
      resolution_date: {
        required,
      },
      date_from: {
        required,
      },
      date_to: {
        required,
      },
      from: {
        required,
      },
      to: {
        required,
      },
      technical_key: {
        required,
      },
    }
  }

}
</script>

<style scoped>

</style>

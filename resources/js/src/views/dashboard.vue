<template>
  <div class="main-content">
    <breadcumb :page="'Tablero'" :folder="'Dashboard'" />
    <b-row>
      <!-- widget-chart--bar phase-3 -->
      <b-col md="6" sm="6" lg="6" xl="3" mt="3" v-if="role == 'ADMIN'">
        <b-card class=" mb-30">
          <div class="ul-widget__row-v2">
            <div class="ul-widget__content-v2">
              <h4 class="heading mt-1">{{data.users ? data.users : '0'}}</h4>
              <small class=" text-muted m-0">
                Usuarios
              </small>
            </div>
          </div>
        </b-card>
      </b-col>
      <b-col md="6" sm="6" lg="6" xl="3"  mt="3" v-if="role == 'ADMIN'">
        <b-card class=" mb-30">
          <div class="ul-widget__row-v2">
            <div class="ul-widget__content-v2">
              <h4 class="heading mt-1">{{data.vehicles ? data.vehicles : '0'}}</h4>
              <small class=" text-muted m-0">
                Vehículos
              </small>
            </div>
          </div>
        </b-card>
      </b-col>
      <b-col md="6" sm="6" lg="6" xl="3"  mt="3" v-if="role == 'ADMIN'">
        <b-card class=" mb-30">
          <div class="ul-widget__row-v2">
            <div class="ul-widget__content-v2">
              <h4 class="heading mt-1">{{data.contracts ? data.contracts : '0'}}</h4>
              <small class=" text-muted m-0">
                Contratos actuales
              </small>
            </div>
          </div>
        </b-card>
      </b-col>
      <b-col md="6" sm="6" lg="6" xl="3"  mt="3" v-if="role == 'ADMIN'">
        <b-card class=" mb-30">
          <div class="ul-widget__row-v2">
            <div class="ul-widget__content-v2">
              <h4 class="heading mt-1">{{data.accounts ? data.accounts : '0'}}</h4>
              <small class=" text-muted m-0">
                Cuentas pendientes
              </small>
            </div>
          </div>
        </b-card>
      </b-col>
      <b-col md="12" sm="12" lg="12" xl="12"  mt="12">
        <b-card class=" mb-30">
          <vue-good-table
          :columns="columns"
          :line-numbers="false"
          styleClass="tableOne vgt-table"
          :rows="contracts">

        <template slot="table-row" slot-scope="props">
          <span v-if="props.column.field == 'aditional'">

              <div class="text-danger" v-if="props.row.blocked_license == true">
                El conductor no tiene licencia valida
              </div>
              <div class="text-danger" v-if="props.row.blocked_documents == true">
                El vehículo no tiene documentos al día
              </div>
              <div class="text-danger" v-if="props.row.blocked_payment == true">
                Tienes cuentas por pagar
              </div>
              <div v-if="props.row.blocked_license == false && props.row.blocked_documents == false && props.row.blocked_payment == false">
                <b-button :disabled="props.row.routes.length < 1" v-if="loading != true" variant="secondary" size="sm" @click="exportData(props.row.id)">
                    Descargar Fuec
                </b-button>
                <div v-else class="spinner sm spinner-primary"></div>
                <div class="text-danger" v-if="props.row.routes.length < 1">
                    Debes agregar al menos una ruta
                  </div>
              </div>
          </span>
        </template>
      </vue-good-table>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import {mapActions, mapMutations, mapState} from "vuex";
const FileDownload = require('js-file-download');
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Dashboard"
  },
  data () {
    return {
      loading: false,
      data: null,
      columns: [
        {label: "Objeto", field: "object"},
        {label: "Número", field: "number"},
        {label: "Departamento", field: "department.name"},
        {label: "Municipio", field: "municipality.name"},
        {label: "Vehículo", field: "vehicle.car_plate"},
        {label: "Fecha inicio", field: "start_date"},
        {label: "Fecha fin", field: "end_date"},
        {label: "Contratante", field: "contractor.contractor"},
        {label: "Ingresos", field: "incomes"},
        {label: "Detalles", field: "details"},
        {label: "Adicional", field: "aditional"}
      ],
    }
  },
  created () {
    this.getData()
    if(this.role == 'ADMIN')
    {
      this.getContracts()
    }else {
      this.getContractsByUser(this.user.id)
    }
  },
  methods: {
    ...mapActions('contracts', ['getContractsByUser', 'getContracts', 'checkDocuments']),
    async getData() {
      try {
        this.loading = true
        await axios.get(`/api/getDashboard`).then((response) => {
          this.data = response.data
          this.loading = false
        });
      } catch (e) {
        const errorMessages = Object.values(e.response.data.errors);
        context.rootState.errorMessages = errorMessages;
        openNotification('Error', 'No se pudo obtener información', 'danger')
      } finally {
        this.loading = false
      }
    },
    async exportData(id) {
      try {
        this.loading = true
        await axios.get(`/api/generate/document/fuec/${id}`, {responseType: 'blob'}).then((response) => {
          FileDownload(response.data, id + '-FUEC.pdf');
        });
      } catch (e) {
        const errorMessages = Object.values(e.response.data.errors);
        context.rootState.errorMessages = errorMessages;
        openNotification('Error', 'No se pudo generar el Fuec, consulta un administrador', 'danger')
      } finally {
        this.loading = false
      }
    },
  },
  computed: {
    ...mapState('contracts', ['contracts']),
    ...mapState('auth', ["role", "user"])
  }
};
</script>

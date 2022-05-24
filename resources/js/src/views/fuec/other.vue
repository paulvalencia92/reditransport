<template>
  <div class="main-content">
    <breadcumb :page="'Contratos disponibles'" :folder="'Contratos'" />
    <div v-if="is_available == true" role="alert" aria-live="polite" aria-atomic="true" class="alert alert-dismissible alert-alert alert-card alert-info">
      <button type="button" aria-label="Close" class="close">×</button>
      <strong class="text-capitalize">Importante!</strong> Algunos Contratos podrían no mostrarse debido a que el conductor no cuente con licencia valida o el vehículo no tiene documentos al día.
    </div>
    <CheckPayment @status="statusPayment" v-if="is_available == false" />
    <b-card v-if="is_available == true">
      <vue-good-table
        :rows="fuecs"
        :columns="columns"
        :line-numbers="false"
        :total-rows="totalRows"
        @on-page-change="onPageChange"
        @on-search="onSearch"
        :search-options="{
              enabled: true,
              trigger: 'enter',
              placeholder: 'Buscar en esta tabla'}"
        :pagination-options="{
              enabled: true,
              perPage: 20,
              mode: 'records'}"
        styleClass="tableOne vgt-table"
      >
        <template slot="table-row" slot-scope="props">
          <span v-if="props.column.field == 'aditional'">
            <div class="text-center">
              <b-button
                :disabled="props.row.routes.length < 1"
                variant="secondary"
                size="sm"
                v-if="loading == false"
                @click="exportData(props.row.id)"
              >
                Descargar Fuec
              </b-button>
              <div v-else class="loader-bubble loader-bubble-primary m-1"></div>
              <div class="text-danger" v-if="props.row.routes.length < 1">
                Debes agregar al menos una ruta
              </div>
            </div>
          </span>
        </template>
      </vue-good-table>
    </b-card>
  </div>
</template>

<script>
import {mapActions, mapMutations, mapState} from "vuex";
import CheckPayment from './checkPayment.vue'
const FileDownload = require('js-file-download');

export default {
  name: "list-vehicles",
  metaInfo: {
    title: "Lista de vehiculos"
  },
  components: { CheckPayment },
  created() {
    this.myFuecs(this.search).then(response => {
      this.totalRows = response;
    });
  },
  data() {
    return {
      loading: false,
      is_available: false,
      columns: [
        {label: "Número", field: "number"},
        {label: "Departamento", field: "department.name"},
        {label: "Municipio", field: "municipality.name"},
        {label: "Fecha inicio", field: "start_date"},
        {label: "Fecha fin", field: "end_date"},
        {label: "Contratante", field: "contractor.contractor"},
        {label: "Objeto", field: "object"},
        {label: "Ingresos", field: "incomes"},
        {label: "Detalles", field: "details"},
        {label: "Vehículo", field: "vehicle.car_plate"},
        {label: "Adicional", field: "aditional"}
      ],
      vehicleInEdition: {},
      totalRows: 0,
      search: {
        page: 1,
        name: ""
      },
    }
  },
  methods: {
    ...mapActions('fuec', ['myFuecs', 'updateContract', 'deleteContract']),
    ...mapMutations(['CHANGE_SUBMIT_STATUS']),
    ...mapActions('user', ['getUsersVehicle']),
    statusPayment (data) {
      this.is_available = data
    },
    async exportData(id) {
      this.loading = true
      await axios.get(`/api/generate/document/fuec/${id}`, {responseType: 'blob'}).then((response) => {
        FileDownload(response.data, id + '-FUEC.pdf');
        this.loading = false
      });
    },
    onPageChange(params) {
      this.search.page = params.currentPage;
      this.myFuecs(this.search).then(response => {
        this.totalRows = response;
      });
    },
    onSearch(params) {
      this.search.name = params.searchTerm;
    },
  },
  computed: {
    ...mapState('fuec', ['fuecs']),
    ...mapState('auth', ['abilities']),
  },
  watch: {
    'search.name': function () {
      this.myFuecs(this.search).then(response => {
        this.totalRows = response;
      });
    }
  }
}
</script>

<style scoped></style>

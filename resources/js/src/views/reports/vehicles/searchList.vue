<template>
  <b-card class="mt-4">
    <vue-good-table
        :columns="columns"
        :line-numbers="false"
        :search-options="{
              enabled: true,
              placeholder: 'Buscar...'}"
        :pagination-options="{
              enabled: true,
              mode: 'records'}"
        styleClass="tableOne vgt-table"
        :rows="vehicles">

      <template slot="table-row" slot-scope="props">

        <!--btn ver afiliados-->
        <span v-if="props.column.field == 'affiliates'">
          <b-button variant="outline-primary" size="sm" @click="showModalAffiliates(props.row.users)">Ver</b-button>
         </span>


        <!--btn ver documentos-->
        <span v-else-if="props.column.field == 'documents'">
          <b-button @click="showModalDocumments(props.row.documentations)" variant="outline-primary"
                    size="sm">Ver</b-button>
        </span>
      </template>

    </vue-good-table>

    <!--============================
             MODALS
    ==============================-->

    <!--modal afiliados-->
    <b-modal centered ref="modal-affiliates" title="Afiliados">
      <affiliates-table :affiliates="currentAffiliates"/>
    </b-modal>

    <!--modal afiliados-->
    <b-modal centered ref="modal-documents" title="Documentación">
      <documents-table :documents="currentDocuments"/>
    </b-modal>


    <div class="text-right mt-4" v-if="vehicles.length">
      <b-button variant="success" @click="exportData">Exportar <i class="i-File-Excel ml-2"></i></b-button>
    </div>

  </b-card>
</template>

<script>
import {mapState} from "vuex";
import axios from 'axios'
import documentsTable from "./tables/documentsTable";
import affiliatesTable from "./tables/affiliatesTable";

const FileDownload = require('js-file-download');
export default {
  name: "searchListVehicle",
  components: {documentsTable, affiliatesTable},
  data() {
    return {
      columns: [
        {label: "Placa", field: "car_plate"},
        {label: "Numero interno", field: "internal_number"},
        {label: "Vinculación a la empresa", field: "date_association_company"},
        {label: "Número chasis", field: "chassis_number"},
        {label: "Número de motor", field: "engine_number"},
        {label: "Modelo", field: "model"},
        {label: "Marca", field: "brand"},
        {label: "Número de puestos", field: "number_seats"},
        {label: "Fecha matricula", field: "enrollment_date"},
        {label: "Clase de auto", field: "auto_type"},
        {label: "Afiliados", field: "affiliates"},
        {label: "Documentos", field: "documents"},
      ],
      currentAffiliates: [],
      currentDocuments: []
    }
  },
  methods: {
    async exportData() {
      await axios.post('/api/reports-vehicles-excel', this.request, {responseType: 'blob'}).then((response) => {
        FileDownload(response.data, 'reporte-vehiculos.xlsx');
      });
    },
    showModalAffiliates(affiliates) {
      this.currentAffiliates = affiliates;
      this.$refs['modal-affiliates'].show();
    },
    showModalDocumments(documents) {
      this.currentDocuments = documents;
      this.$refs['modal-documents'].show();
    }
  },
  computed: {
    ...mapState('report', ['vehicles', 'request']),
  }
}
</script>

<style scoped>

</style>

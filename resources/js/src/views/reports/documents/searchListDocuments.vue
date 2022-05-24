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
        :rows="documents">
    </vue-good-table>


    <div class="text-right mt-4" v-if="documents.length">
      <b-button variant="success" @click="exportData">Exportar <i class="i-File-Excel ml-2"></i></b-button>
    </div>


    <!--============================
             MODAL AFILIADOS
    ==============================-->

    <!--modal afiliados-->
    <b-modal centered ref="modal-vehicles" title="Vehiculos asociados al afiliado" size="lg">
      <vehicles-table :vehicles="currentVehicles"/>
    </b-modal>

  </b-card>
</template>

<script>
import axios from "axios";
import FileDownload from "js-file-download";
import {mapState} from "vuex";

export default {
  name: "searchListDocuments",
  data() {
    return {
      columns: [
        {label: "Placa", field: "car_plate"},
        {label: "Numero interno", field: "internal_number"},
        {label: "Chasis", field: "chassis_number"},
        {label: "Nro motor", field: "engine_number"},
        {label: "Marca", field: "brand"},
        {label: "Numero de puestos", field: "number_seats"},
        {label: "Fecha de matricula", field: "enrollment_date"},
        {label: "Clase de auto", field: "auto_type"},
      ],
      currentVehicles: null,
    }
  },
  methods: {
    async exportData() {
      await axios.post('/api/reports-documents-excel', this.request, {responseType: 'blob'}).then((response) => {
        FileDownload(response.data, 'reporte-afiliados.xlsx');
      });
    },

  },
  computed: {
    ...mapState('report', ['documents', 'request'])
  }


}
</script>

<style scoped>

</style>

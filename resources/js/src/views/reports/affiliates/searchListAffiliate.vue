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
        :rows="affiliates">

      <template slot="table-row" slot-scope="props">


         <span v-if="props.column.field == 'date_of_birth'">
             {{ props.row.date_of_birth | formatDate }}
         </span>

        <!--btn ver afiliados-->
        <span v-else-if="props.column.field == 'vehicles'">
          <b-button variant="outline-primary" size="sm" @click="showModalVehicles(props.row.vehicles)">Ver</b-button>
         </span>

      </template>

    </vue-good-table>


    <div class="text-right mt-4" v-if="affiliates.length">
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
import {mapState} from "vuex";
import vehiclesTable from "./tables/vehiclesTable";
import axios from "axios";
import FileDownload from "js-file-download";

export default {
  name: "searchListAffiliate",
  components: {vehiclesTable},
  data() {
    return {
      columns: [
        {label: "Numero identificación", field: "identification_number"},
        {label: "Fecha nacimiento", field: "date_of_birth"},
        {label: "Afiliado", field: "full_name"},
        {label: "Dirección", field: "residence_address"},
        {label: "Telefono", field: "phone_number"},
        {label: "Correo electronico", field: "email"},
        {label: "Vehiculos", field: "vehicles"},
      ],
      currentVehicles: null,
    }
  },
  methods: {
    showModalVehicles(vehicles) {
      this.currentVehicles = vehicles;
      this.$refs['modal-vehicles'].show();
    },
    async exportData() {
      await axios.post('/api/reports-affiliates-excel', this.request, {responseType: 'blob'}).then((response) => {
        FileDownload(response.data, 'reporte-afiliados.xlsx');
      });
    }
  },
  computed: {
    ...mapState('report', ['affiliates', 'request'])
  }
}
</script>

<style scoped>

</style>

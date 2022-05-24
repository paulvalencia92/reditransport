<template>
  <div class="main-content">
    <breadcumb :page="'Lista de inventario entrega vehiculos'" :folder="'inventario'"/>


    <!--============================
          BUSCADOR
    ==============================-->
    <b-card class="mb-5">
      <b-row>
        <b-col md="4">
          <b-form-group label="Desde">
            <b-form-input type="date" v-model="search.from" placeholder="Desde"/>
          </b-form-group>
        </b-col>

        <b-col md="4">
          <b-form-group label="Hasta">
            <b-form-input type="date" v-model="search.to" placeholder="Hasta"/>
          </b-form-group>
        </b-col>

        <b-col md="4">
          <b-form-group label="Placa">
            <b-form-input v-model="search.car_plate" placeholder="Placa"/>
          </b-form-group>
        </b-col>

        <b-col md="4" class="mt-4">
          <b-button variant="primary" @click="searchVehicles()">Buscar</b-button>
          <b-button variant="outline-danger" @click="reset()">Resetear</b-button>
        </b-col>
      </b-row>

    </b-card>

    <!--============================
         TABLA
    ==============================-->

    <b-card class="mt-4" v-if="items.length">
      <b-table striped hover responsive :items="items" :fields="fields">

        <template v-slot:cell(date)="data">
          {{ data.item.date | formatDate }}
        </template>

        <template v-slot:cell(actions)="data">

          <b-button size="sm" @click="showTable(data.item)" variant="outline-primary">Ver tabla</b-button>
          <b-button :disabled="submitStatus" size="sm" @click="downloadPdf(data.item.id)" variant="outline-danger">
            Descargar pdf
          </b-button>
        </template>
      </b-table>


      <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          aria-controls="my-table"
      ></b-pagination>


    </b-card>


    <!--============================
      TABLE ITEMS
    ==============================-->
    <b-modal ref="modal-inventory-vehicle" size="lg" hide-footer
             :title="`Vehiculo ${currentVehicle.car_plate} - Conductor ${currentVehicle.driver}`">
      <tableInventory :items="itemsVehicle"/>
    </b-modal>

    <!-- Spinner-->
    <b-col md="12" class="d-flex justify-content-center" :class="{'m-28' : !submitStatus}">
      <div v-if="submitStatus" class="spinner sm spinner-primary mt-3"></div>
    </b-col>

  </div>
</template>

<script>
import {mapActions, mapMutations, mapState} from "vuex";
import moment from "moment";
import tableInventory from "./tableInventory";
import FileDownload from "js-file-download";

export default {
  name: "list",
  created() {
    this.CHANGE_SUBMIT_STATUS(false);
    this.getVehiclesReceiptDeliveries(this.search).then(total => {
      this.rows = total;
    })
  },
  components: {
    tableInventory
  },
  data() {
    return {
      fields: [
        {key: 'car_plate', label: 'Vehiculo'},
        {key: 'driver', label: 'Conductor'},
        {key: 'type', label: 'Tipo de vehículo'},
        {key: 'date', label: 'Fecha de Entrega'},
        {key: 'extracto_contrato_conductor', label: 'Extracto Contrato conductor'},
        {key: 'permiso_acceso', label: 'Permiso de acceso'},
        {key: 'license', label: 'Licencia de Transito'},
        {key: 'soat'},
        {key: 'contractual'},
        {key: 'extra_contractual'},
        {key: 'permiso_acceso'},
        {key: 'actions', label: 'Acciones'},
      ],
      search: {
        page: 1,
        from: "",
        to: "",
        car_plate: "",
      },
      currentPage: 1,
      perPage: 20,
      rows: 0,

      currentVehicle: {
        car_plate: '',
        driver: ''
      },
      itemsVehicle: []
    }
  },
  methods: {
    ...mapActions('vehiclereceiptdelivery', ['getVehiclesReceiptDeliveries']),
    ...mapMutations(['CHANGE_SUBMIT_STATUS', 'CLEAR_ERRORS']),
    searchVehicles() {
      this.getVehiclesReceiptDeliveries(this.search).then(total => {
        this.rows = total;
      })
    },
    reset() {
      this.search.date = '';
      this.search.car_plate = ''
    },
    showTable(data) {
      this.currentVehicle = {car_plate: data.car_plate, driver: data.driver}
      this.itemsVehicle = data.items;
      this.$refs['modal-inventory-vehicle'].show();
    },
    async downloadPdf(id) {
      // this.CHANGE_SUBMIT_STATUS(true);
      await axios.get(`/api/vehicle-receipt-deliveries/generate-pdf/${id}`, {responseType: 'blob'}).then((response) => {
        console.log(response.data)
        FileDownload(response.data, id + '-recibo-entrega.pdf');
        // this.CHANGE_SUBMIT_STATUS(false);
      });

    }
  },
  computed: {
    ...mapState(['submitStatus']),
    ...mapState('vehiclereceiptdelivery', ['items'])
  },
  watch: {
    currentPage: function (val) {
      this.search.page = val;
      this.getVehiclesReceiptDeliveries(this.search).then(total => {
        this.rows = total;
      })
    }
  }
}
</script>

<style scoped>

</style>

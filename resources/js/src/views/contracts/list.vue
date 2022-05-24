<template>
  <div class="main-content">
    <breadcumb :page="'Lista de contratos'" :folder="'Contratos'"/>
    <b-card>
      <vue-good-table
          :rows="contracts"
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

        <div slot="table-actions" class="mb-3">
          <router-link v-if="adminPermissions()" tag="a" class="btn btn-primary btn-rounded d-none d-sm-block"
                       :to="{name:'nuevo-contrato'}">
            <i class="i-Add-User text-white mr-2"> </i>Crear contrato
          </router-link>
        </div>

        <template slot="table-row" slot-scope="props">
              <span v-if="props.column.field == 'actions'">
                <a v-if="adminPermissions()" class="clickeable" @click="showModalEditVehicle(props.row)">
                  <i class="i-Eraser-2 text-25 text-success mr-2"></i>
                  {{ props.row.button }}
                </a>
                <a v-if="adminPermissions()" class="clickeable" @click="showModalDeleteVehicle(props.row)">
                  <i class="i-Close-Window text-25 text-danger"></i>
                  {{ props.row.button }}
                </a>
              </span>
          <span v-else-if="props.column.field == 'aditional'">
              <router-link class="mb-2"
                           :to="{ name: 'detalles-contrato', params: { id: props.row.id } }"
                           custom
                           v-slot="{ href, navigate }"
              >
                <a class="btn open btn-primary btn-sm" :href="href" @click="navigate">Rutas</a>
              </router-link>
              <div class="text-danger" v-if="props.row.blocked_license == true">
                El conductor no tiene licencia valida
              </div>
              <div class="text-danger" v-if="props.row.blocked_documents == true">
                El vehículo no tiene documentos al día
              </div>
              <div class="text-danger" v-if="props.row.blocked_payment == true">
                Tienes cuentas por pagar
              </div>
              <div
                  v-if="props.row.blocked_license == false && props.row.blocked_documents == false && props.row.blocked_payment == false">
                <b-button :disabled="props.row.routes.length < 1" variant="secondary" size="sm"
                          @click="exportData(props.row.id)">
                    Descargar Fuec
                </b-button>
                <div class="text-danger" v-if="props.row.routes.length < 1">
                    Debes agregar al menos una ruta
                  </div>
              </div>
          </span>
        </template>
      </vue-good-table>
    </b-card>

    <!--============================
       MODAL EDITAR CONDUCTOR
    ==============================-->
    <b-modal centered ref="modal-edit-vehicle" size="lg" title="Actualizar vehículo" hide-footer>
      <form-vehicle @save="save" :vehicle="vehicleInEdition"/>
    </b-modal>

  </div>

</template>

<script>
import {mapActions, mapMutations, mapState} from "vuex";
import formVehicle from './form'

const FileDownload = require('js-file-download');

export default {
  name: "list-vehicles",
  metaInfo: {
    title: "Lista de vehiculos"
  },
  components: {formVehicle},
  created() {
    if (!this.viewPermissions()) {
      this.$router.push({name: 'not-found'});
    }
    this.getContracts(this.search).then(response => {
      this.totalRows = response;
    });
  },
  data() {
    return {
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
        {label: "Adicional", field: "aditional"},
        {label: "Acciones", field: "actions"},
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
    ...mapActions('contracts', ['getContracts', 'updateContract', 'deleteContract']),
    ...mapMutations(['CHANGE_SUBMIT_STATUS']),
    ...mapActions('user', ['getUsersVehicle']),
    showModalEditVehicle(vehicle) {
      this.getUsersVehicle(vehicle.vehicle_id);
      this.vehicleInEdition = clone(vehicle);
      this.$refs['modal-edit-vehicle'].show()
    },
    showModalDeleteVehicle(vehicleId) {
      this.$bvModal
          .msgBoxConfirm("una vez ejecutada la acción no podra recuperar la información", {
            title: `¿Está seguro de eliminar el contrato?`,
            size: "sm",
            buttonSize: "sm",
            okVariant: "danger",
            okTitle: "Eliminar",
            cancelTitle: "NO",
            footerClass: "p-2",
            hideHeaderClose: false,
            centered: true
          })
          .then(value => {
            if (value) {
              this.deleteContract(vehicleId.id).then(response => {
                if (response == 'vehicle successfully removed') {
                  openNotification('Vehiculo eliminado corrrectamente', 'Se ha eliminado el Vehiculo');
                }
              });
            }
          })
    },
    save(vehicle) {
      this.updateContract(vehicle)
          .then(response => {
            openNotification();
            this.CHANGE_SUBMIT_STATUS(true);
            this.$refs['modal-edit-vehicle'].hide();
          }).catch(respose => {
        openNotification('Error', 'No se pudieron guardar los datos', 'danger')
        this.CHANGE_SUBMIT_STATUS(false);
      })
    },
    async exportData(id) {
      await axios.get(`/api/generate/document/fuec/${id}`, {responseType: 'blob'}).then((response) => {
        FileDownload(response.data, id + '-FUEC.pdf');
      });
    },
    viewPermissions() {
      return this.abilities.includes('*') || this.abilities.includes('contratos-listar');
    },
    adminPermissions() {
      return this.abilities.includes('*') || this.abilities.includes('contratos-administracion');
    },
    onPageChange(params) {
      this.search.page = params.currentPage;
      this.getContracts(this.search).then(response => {
        this.totalRows = response;
      });
    },
    onSearch(params) {
      this.search.name = params.searchTerm;
    },
  },
  computed: {
    ...mapState('contracts', ['contracts']),
    ...mapState('auth', ['abilities']),
  },
  watch: {
    'search.name': function () {
      this.getContracts(this.search).then(response => {
        this.totalRows = response;
      });
    }
  }
}
</script>

<style scoped>

</style>

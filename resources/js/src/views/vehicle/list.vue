<template>
  <div class="main-content">
    <breadcumb :page="'Lista de vehiculos'" :folder="'vehiculos'"/>
    <b-card>
      <vue-good-table
          :rows="vehicles"
          :columns="columns"
          :line-numbers="false"
          :total-rows="totalRows"
          @on-page-change="onPageChange"
          @on-search="onSearch"
          :search-options="{
              enabled: true,
              trigger: 'enter',
              placeholder: 'Digita una placa y presiona enter'}"
          :pagination-options="{
              enabled: true,
              perPage: 20,
              mode: 'records',
              nextLabel: '>',
              prevLabel: '<'}"
          styleClass="tableOne vgt-table"
      >

        <div v-if="administrationPermissions()" slot="table-actions" class="mb-3">
          <router-link tag="a" class="btn btn-primary btn-rounded d-none d-sm-block" :to="{name:'nuevo-vehiculo'}">
            <i class="i-Add-User text-white mr-2"> </i>Ingresar vehiculo
          </router-link>
        </div>

        <template slot="table-row" slot-scope="props">

          <div v-if="props.column.field == 'actions'">
            <template v-if="administrationPermissions()">
              <a class="clickeable" @click="showModalEditVehicle(props.row)">
                <i class="i-Eraser-2 text-25 text-success mr-2"></i>
                {{ props.row.button }}
              </a>
              <a class="clickeable" @click="showModalDeleteVehicle(props.row)">
                <i class="i-Close-Window text-25 text-danger"></i>
                {{ props.row.button }}
              </a>
            </template>
            <a class="clickeable" @click.prevent="showDetail(props.row.id)">
              <i class="i-Eye text-25 text-primary"></i>
            </a>
          </div>

          <div v-else-if="props.column.field == 'vinculation'">

            <template v-if="abilities.includes('*') || abilities.includes('vehiculos-vinculacion')">
              <b-button v-if="props.row.its_linked"
                        variant="outline-danger"
                        @click="modalUnlink(props.row)"
                        size="sm">Desvincular
              </b-button>
              <span v-else class="text-muted text-warning">Desvinculado</span>
            </template>

            <b-button v-else>{{ props.row.its_linked | isVinculated }}</b-button>

          </div>
        </template>
      </vue-good-table>
    </b-card>

    <!--============================
       MODAL EDITAR CONDUCTOR
    ==============================-->
    <b-modal centered ref="modal-edit-vehicle" title="Actualizar vehículo" hide-footer>
      <form-vehicle @save="save" :vehicle="vehicleInEdition"/>
    </b-modal>

  </div>

</template>

<script>
import {mapActions, mapMutations, mapState} from "vuex";
import formVehicle from './form'

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
    this.getVehicles(this.search).then(response => {
      this.totalRows = response;
    });
  },
  data() {
    return {
      columns: [
        {label: "Sucursal o convenio", field: "branch_or_agreement"},
        {label: "Ciudad radicado", field: "settled_city"},
        {label: "Placa", field: "car_plate"},
        {label: "Vinculación a la empresa", field: "date_association_company"},
        {label: "Departamento", field: "department.name"},
        {label: "Municipio", field: "municipality.name"},
        {label: "Numero interno", field: "internal_number"},
        {label: "Fecha matricula", field: "enrollment_date"},
        {label: "Número chasis", field: "chassis_number"},
        {label: "Número de motor", field: "engine_number"},
        {label: "Modelo", field: "model"},
        {label: "Marca", field: "brand"},
        {label: "Cilindraje", field: "cylinder"},
        {label: "Color", field: "color"},
        {label: "Clase de auto", field: "auto_type"},
        {label: "Número de puestos", field: "number_seats"},
        {label: "Vinculación", field: "vinculation"},
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
    ...mapActions('vehicle', ['getVehicles', 'updateVehicle', 'deleteVehicle', 'unlink']),
    ...mapMutations(['CHANGE_SUBMIT_STATUS']),
    viewPermissions() {
      return this.abilities.includes('*') || this.abilities.includes('vehiculos-listar');
    },
    administrationPermissions() {
      return this.abilities.includes('*') || this.abilities.includes('vehiculos-administracion');
    },
    showModalEditVehicle(vehicle) {
      this.vehicleInEdition = clone(vehicle);
      this.$refs['modal-edit-vehicle'].show()
    },
    showModalDeleteVehicle(vehicleId) {
      this.$bvModal
          .msgBoxConfirm("una vez ejecutada la acción no podra recuperar la información", {
            title: `¿Está seguro de eliminar el vehiculo?`,
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
              this.deleteVehicle(vehicleId.id).then(response => {
                if (response == 'vehicle successfully removed') {
                  openNotification('Vehiculo eliminado corrrectamente', 'Se ha eliminado el Vehiculo');
                }
              });
            }
          })
    },
    save(vehicle) {
      this.updateVehicle(vehicle)
          .then(response => {
            openNotification();
            this.CHANGE_SUBMIT_STATUS(true);
            this.$refs['modal-edit-vehicle'].hide();
          }).catch(respose => {
        openNotification('Error', 'No se pudieron guardar los datos', 'danger')
        this.CHANGE_SUBMIT_STATUS(false);
      })
    },
    modalUnlink(vehicle) {
      this.$bvModal
          .msgBoxConfirm("Se desvinculara el vehiculo y se generara un reporte", {
            title: `¿Está seguro de desea desvincular el vehiculo?`,
            size: "sm",
            buttonSize: "sm",
            okVariant: "danger",
            okTitle: "Desvincular",
            cancelTitle: "NO",
            footerClass: "p-2",
            hideHeaderClose: false,
            centered: true
          })
          .then(value => {
            this.unlink(vehicle.id).then(response => {
              if (response == 'success') {
                openNotification('Vehiculo desvinculado corrrectamente', 'Se ha desvinculado el Vehiculo');
              }
            });
          })
    },
    showDetail(vehicleId) {
      this.$router.push({name: 'detalle-vehiculo', params: {id: vehicleId}})
    },
    onPageChange(params) {
      this.search.page = params.currentPage;
      this.getVehicles(this.search);
    },
    onSearch(params) {
      this.search.name = params.searchTerm;
    },
  },
  computed: {
    ...mapState('auth', ['abilities']),
    ...mapState('vehicle', ['vehicles']),
  },
  watch: {
    'search.name': function (val) {
      this.getVehicles(this.search).then(response => {
        this.totalRows = response;
      });
    }
  },
  filters: {
    isVinculated: function (val) {
      if (val) {
        return 'Vinculado'
      } else {
        return 'Desvinculado'
      }
    }
  }
}
</script>

<style scoped>

</style>

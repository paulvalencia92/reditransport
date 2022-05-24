<template>
  <div class="main-content">
    <breadcumb :page="'Lista de contratantes'" :folder="'contratantes'"/>
    <b-card>
      <vue-good-table
          :rows="contractors"
          :columns="columns"
          :line-numbers="false"
          :total-rows="totalRows"
          @on-page-change="onPageChange"
          @on-search="onSearch"
          :search-options="{
              enabled: true,
              trigger: 'enter',
              placeholder: 'Buscar contratante por nit'}"
          :pagination-options="{
              enabled: true,
              mode: 'records'}"
          styleClass="tableOne vgt-table"

      >

        <div slot="table-actions" class="mb-3" v-if="administrationPermissions()">
          <router-link tag="a" class="btn btn-primary btn-rounded d-none d-sm-block" :to="{name:'nuevo-contratante'}">
            <i class="i-Add-User text-white mr-2"> </i>Ingresar contratante
          </router-link>
        </div>

        <template slot="table-row" slot-scope="props">

          <!--          <div v-if="administrationPermissions()">-->

          <div v-if="props.column.field == 'actions'">

            <div v-if="administrationPermissions()">

              <a class="clickeable"
                 @click="showModalEditVehicle(props.row)">
                <i class="i-Eraser-2 text-25 text-success mr-2"></i>
                {{ props.row.button }}
              </a>
              <a class="clickeable" @click="showModalDeleteVehicle(props.row)">
                <i class="i-Close-Window text-25 text-danger"></i>
                {{ props.row.button }}
              </a>

            </div>

          </div>

          <div v-else-if="props.column.field == 'vinculation'">

            <div v-if="administrationPermissions()">

              <b-button v-if="props.row.its_linked" variant="outline-danger" @click="modalUnlink(props.row)"
                        size="sm">Desvincular
              </b-button>
              <span v-else class="text-muted text-warning">Desvinculado</span>

            </div>
          </div>

          <!--          </div>-->


        </template>
      </vue-good-table>
    </b-card>

    <!--============================
       MODAL EDITAR CONDUCTOR
    ==============================-->
    <b-modal centered ref="modal-edit-vehicle" title="Actualizar contratante" hide-footer>
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
    this.getContractors(this.search).then(response => {
      this.totalRows = response;
    });
  },
  data() {
    return {
      columns: [
        {label: "Nit", field: "nit"},
        {label: "Contratante", field: "contractor"},
        {label: "Dirección", field: "adress"},
        {label: "Telefono", field: "phone"},
        {label: "Correo electrónico", field: "email"},
        {label: "Web", field: "web"},
        {label: "Nombres contacto", field: "c_name"},
        {label: "Identificación", field: "c_cc"},
        {label: "Dirección", field: "c_adress"},
        {label: "Celular", field: "c_phone"},
        {label: "Acciones", field: "actions"}
      ],
      totalRows: 0,
      search: {
        page: 1,
        name: ""
      },
      vehicleInEdition: {},
    }
  },
  methods: {
    ...mapActions('contractors', ['getContractors', 'updateContractor', 'deleteContractor']),
    ...mapMutations(['CHANGE_SUBMIT_STATUS']),
    showModalEditVehicle(vehicle) {
      this.vehicleInEdition = clone(vehicle);
      this.$refs['modal-edit-vehicle'].show()
    },
    showModalDeleteVehicle(vehicleId) {
      this.$bvModal
          .msgBoxConfirm("una vez ejecutada la acción no podra recuperar la información", {
            title: `¿Está seguro de eliminar el contratante?`,
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
              this.deleteContractor(vehicleId.id).then(response => {
                if (response == 'vehicle successfully removed') {
                  openNotification('Contratante eliminado correctamente', 'Se ha eliminado el contratante');
                }
              });
            }
          })
    },
    save(vehicle) {
      this.updateContractor(vehicle)
          .then(response => {
            openNotification();
            this.CHANGE_SUBMIT_STATUS(true);
            this.$refs['modal-edit-vehicle'].hide();
          }).catch(respose => {
        openNotification('Error', 'No se pudieron guardar los datos', 'danger')
        this.CHANGE_SUBMIT_STATUS(false);
      })
    },
    viewPermissions() {
      return this.abilities.includes('*') || this.abilities.includes('contratantes-listar')
    },
    administrationPermissions() {
      return this.abilities.includes('*') || this.abilities.includes('contratantes-administracion')
    },
    onPageChange(params) {
      this.search.page = params.currentPage;
      this.getContractors(this.search);
    },
    onSearch(params) {
      this.search.name = params.searchTerm;
    },
  },
  computed: {
    ...mapState('contractors', ['contractors']),
    ...mapState('auth', ['abilities'])
  },
  watch: {
    'search.name': function () {
      this.getContractors(this.search).then(response => {
        this.totalRows = response;
      });
    }
  }

}
</script>

<style scoped>

</style>

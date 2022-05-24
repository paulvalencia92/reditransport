<template>
  <div>

    <div class="row mb-3">
      <div class="col-3">
        <b-form-input debounce="700" v-model="search.name" placeholder="Busca una licencia"></b-form-input>
      </div>
      <div class="col-9 text-right">
        <router-link tag="a" class="btn btn-primary btn-rounded " to="/vehiculos/crear-licencia-transito">
          <i class="i-Add-User text-white mr-2"> </i>Asignar licencia
        </router-link>
      </div>
    </div>

    <b-card>
      <vue-good-table
          :rows="licenses"
          :columns="columns"
          :line-numbers="false"
          :total-rows="totalRows"
          @on-page-change="onPageChange"
          @on-search="onSearch"
          :search-options="{
              enabled: true,
              trigger: 'enter',
              placeholder: 'Nombre y presione enter'}"
          :pagination-options="{
            enabled: true,
              perPage: 15,
              mode: 'records',
              nextLabel: '>',
              prevLabel: '<'}"
          styleClass="tableOne vgt-table"
      >

        <template slot="table-row" slot-scope="props">
          <div v-if="props.column.field == 'actions'">
            <a :href="`/storage/licensetrasn/${props.row.file}`" class="btn btn-primary btn-xs" download>Descargar</a>
            <span class="pt-2 mt-5 ml-3 clicable clickeable" @click="showModalDeleteLicence(props.row.id)">
              <i class="i-Close-Window text-25 text-danger"></i>
            </span>
            <span class="pt-2 mt-5 ml-3 clicable clickeable" @click="openModalEdit(props.row)">
              <i class="i-Pen-5 text-25 text-success"></i>
            </span>
          </div>
          <div v-else-if="props.column.field == 'user'">
            {{ props.row.user.names }} {{ props.row.user.surnames }}
          </div>
        </template>
      </vue-good-table>


    </b-card>
    <b-modal title="Editar licencia de transito" v-model="modalEdit" centered hide-footer>
      <Edit :traffic="editData" @close="modalEdit = false, getLicenses(null);"/>
    </b-modal>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import Edit from '../edit.vue'

export default {
  name: "admin",
  components: {
    Edit
  },
  created() {
    this.getLicenses(this.search).then(response => {
      this.totalRows = response;
    });
  },
  data() {
    return {
      columns: [
        {label: "Conductor", field: "user"},
        {label: "Tipo licencia", field: "type"},
        {label: "Fecha de vencimiento", field: "expiration_date"},
        {label: "Acciones", field: "actions"},
      ],
      editData: null,
      modalEdit: false,
      totalRows: 0,
      search: {
        page: 1,
        name: ""
      },
    }
  },
  methods: {
    ...mapActions('licenseTrans', ['getLicenses', 'deleteLicence']),
    openModalEdit(data) {
      this.editData = data
      this.modalEdit = true
    },
    showModalDeleteLicence(vehicleId) {
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
              this.deleteLicence(vehicleId).then(response => {
                this.search.page = 1;
                this.search.name = "";
                this.getLicenses(this.search);
                openNotification('Licencia eliminada corrrectamente', 'Se ha eliminado la licencia');
              });
            }
          })
    },
    onPageChange(params) {
      this.search.page = params.currentPage;
      this.getLicenses(this.search);
    },
    onSearch(params) {
      this.search.name = params.searchTerm;
    },
  },
  computed: {
    ...mapState('licenseTrans', ['licenses']),
  },
  watch: {
    // search: function (val) {
    //   this.getLicenses(val);
    // }
    'search.name': function (val) {
      this.getLicenses(this.search).then(response => {
        this.totalRows = response;
      });
    }
  }
}
</script>

<style scoped>

</style>

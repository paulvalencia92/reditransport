<template>
  <div class="main-content">
    <breadcumb :page="'Lista de afiliados'" :folder="'afiliados'"/>


    <b-card>
      <vue-good-table
          :rows="users"
          :columns="columns"
          :line-numbers="false"
          :total-rows="totalRows"
          @on-page-change="onPageChange"
          @on-search="onSearch"
          :search-options="{
              enabled: true,
              trigger: 'enter',
              placeholder: 'Search this table'}"
          :pagination-options="{
              enabled: true,
              perPage: 15,
              mode: 'records',
              nextLabel: '>',
              prevLabel: '<'}"
          styleClass="tableOne vgt-table"
      >
        <div slot="table-actions" class="mb-3">

          <router-link
              v-if="administrationPermissions()"
              tag="a"
              class="btn btn-primary btn-rounded d-none d-sm-block"
              to="/afiliados/crear"
          >
            <i class="i-Add-User text-white mr-2"> </i>Crear conductor
          </router-link>


        </div>

        <template slot="table-row" slot-scope="props">

          <div v-if="props.column.field == 'actions'">

            <template v-if="administrationPermissions()">
              <a class="clickeable" @click="showModalEditAfiliate(props.row)">
                <i class="i-Eraser-2 text-25 text-success mr-2"></i>
                {{ props.row.button }}
              </a>

              <a class="clickeable" @click="showModalDeleteUser(props.row)">
                <i class="i-Close-Window text-25 text-danger"></i>
                {{ props.row.button }}
              </a>
            </template>
            <a class="clickeable" @click.prevent="showDetail(props.row.id)">
              <i class="i-Find-User text-25 text-primary"></i>
            </a>
          </div>
          <div v-else-if="props.column.field == 'names'">
            <a href="">
              <div class="ul-widget-app__profile-pic">
                <img class="profile-picture avatar-sm mb-2 rounded-circle img-fluid"
                     :src="`${require('@/assets/images/faces/1.jpg')}`"
                     alt=""/>
                {{ props.row.names }} {{ props.row.surnames }}
              </div>
            </a>
          </div>
        </template>
      </vue-good-table>
    </b-card>

    <!--============================
       MODAL EDITAR CONDUCTOR
    ==============================-->
    <b-modal centered ref="modal-edit-conductor" title="Actualizar conductor" hide-footer>
      <form-affiliate @save="save" :driverDraft="affiliateInEdition"/>
    </b-modal>


  </div>
</template>

<script>
import {mapActions, mapMutations, mapState} from "vuex";
import formAffiliate from "./formAffiliate";


export default {
  name: "list",
  metaInfo: {
    title: "Lista de conductores"
  },
  components: {formAffiliate},
  created() {
    if (!this.permissions()) {
      this.$router.push({name: 'not-found'});
    }
    this.getUsers(this.search).then(response => {
      this.totalRows = response;
    });
  },
  data() {
    return {
      columns: [
        {label: "Nombres", field: "names"},
        {label: "Fecha de nacimiento", field: "date_of_birth"},
        {label: "Genero", field: "sex"},
        {label: "Dirección residencial", field: "residence_address"},
        {label: "Telefono", field: "phone_number"},
        {label: "Correo electronico", field: "email"},
        {label: "Rol", field: "role"},
        {label: "Acciones", field: "actions"},
      ],
      avatar: "@/assets/images/faces/1.jpg",
      affiliateInEdition: {},
      totalRows: 0,
      search: {
        page: 1,
        name: ""
      },
      searchTerm: '',
    }
  },
  methods: {
    ...mapActions('user', ['getUsers', 'updateUser', 'deleteUser']),
    ...mapMutations(['CHANGE_SUBMIT_STATUS']),
    permissions() {
      return this.abilities.includes('*') || this.abilities.includes('afiliados-listar');
    },
    administrationPermissions() {
      return this.abilities.includes('*') || this.abilities.includes('afiliados-administracion');
    },
    showModalEditAfiliate(affiliate) {
      this.affiliateInEdition = window.clone(affiliate);
      this.$refs['modal-edit-conductor'].show();
    },
    save(driver) {
      this.updateUser(driver)
          .then(response => {
            openNotification();
            this.CHANGE_SUBMIT_STATUS('OK');
            this.$refs['modal-edit-conductor'].hide();
          }).catch(respose => {
        openNotification('Error', 'No se pudieron guardar los datos', 'danger')
        this.CHANGE_SUBMIT_STATUS('ERROR');
      })
    },
    showModalDeleteUser(user) {
      this.$bvModal
          .msgBoxConfirm("una vez ejecutada la acción no podra recuperar la información", {
            title: `¿Está seguro de eliminar el usuario ${user.names} ${user.surnames}?`,
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
            this.deleteUser(user.id).then(response => {
              if (response == 'user successfully removed') {
                openNotification('Usuario eliminado corrrectamente', 'Se ha eliminado el usuario');
              }
            });
          })
    },
    showDetail(userId) {
      this.$router.push({name: 'detalle-afiliado', params: {id: userId}})
    },
    onPageChange(params) {
      this.search.page = params.currentPage;
      this.getUsers(this.search);
    },
    onSearch(params) {
      this.search.name = params.searchTerm;
    },
  },
  computed: {
    ...mapState('user', ['users']),
    ...mapState('auth', ['abilities']),
  },
  watch: {
    'search.name': function () {
      this.getUsers(this.search).then(response => {
        this.totalRows = response;
      });
    }
  }
}
</script>

<style scoped>

</style>

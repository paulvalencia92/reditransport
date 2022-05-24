<template>
  <div class="main-content">
    <breadcumb :page="'Solicitudes pre registro'" :folder="'Principal'"/>

  <b-card>
        <vue-good-table
        :columns="columns"
        :line-numbers="false"
        :search-options="{
              enabled: true,
              placeholder: 'Search this table'}"
        :pagination-options="{
              enabled: true,
              mode: 'records'}"
        styleClass="tableOne vgt-table"
        :rows="requests">

      <template slot="table-row" slot-scope="props">
        <div v-if="props.column.field == 'owner'">
          <b-button @click="showModalOwner(props.row)" variant="primary" size="sm">Ver</b-button>
        </div>
        <div v-else-if="props.column.field == 'driver'">
          <b-button @click="showModalDriver(props.row)" variant="primary" size="sm">Ver</b-button>
        </div>
        <div v-else-if="props.column.field == 'documentations'">
          <b-button @click="showModalDocuments(props.row)" variant="primary" size="sm">Ver</b-button>
        </div>
        <div v-else-if="props.column.field == 'actions'">
          <b-button @click="showModalApproveRequest(props.row)" variant="outline-primary">Aprobar</b-button>
          <a @click="showModalDelete(props.row.id)" class="clickeable pt-2"><i class="i-Close-Window text-25 text-danger"></i></a>
        </div>
      </template>

    </vue-good-table>

  </b-card>

    <!--============================
       MODAL DUEÑO
    ==============================-->
    <b-modal ref="modal-owner" title="Información del dueño">
      <b-list-group>
        <b-list-group-item><b>Nombre: </b>{{ owner.names }} {{ owner.surnames }}</b-list-group-item>
        <b-list-group-item><b>Identificacion: </b>{{ owner.identification_number }}</b-list-group-item>
        <b-list-group-item><b>Fecha de nacimiento: </b>{{ owner.date_of_birth }}</b-list-group-item>
        <b-list-group-item><b>Sexo: </b>{{ owner.sex }}</b-list-group-item>
        <b-list-group-item><b>Direccion residencial </b>{{ owner.residence_address }}</b-list-group-item>
        <b-list-group-item><b>Telefono: </b>{{ owner.phone_number }}</b-list-group-item>
        <b-list-group-item><b>Correo electronico: </b>{{ owner.email }}</b-list-group-item>
        <b-list-group-item class="d-flex justify-content-between">
          <b>Cedula: </b>
          <a :href="`/storage/cedulas/${owner.file_cc}`" class="btn btn-primary btn-xs" download>Descargar</a>
        </b-list-group-item>
      </b-list-group>
    </b-modal>


    <!--============================
          MODAL CONDUCTOR
    ==============================-->
    <b-modal ref="modal-driver" title="Información del conductor">
      <b-list-group>
        <b-list-group-item><b>Nombre: </b>{{ driver.names_driver }} {{ driver.surnames_driver }}</b-list-group-item>
        <b-list-group-item><b>Identificacion: </b>{{ driver.identification_number_driver }}</b-list-group-item>
        <b-list-group-item><b>Fecha de nacimiento: </b>{{ driver.date_of_birth_driver }}</b-list-group-item>
        <b-list-group-item><b>Sexo: </b>{{ driver.sex_driver }}</b-list-group-item>
        <b-list-group-item><b>Direccion residencial </b>{{ driver.residence_address_driver }}</b-list-group-item>
        <b-list-group-item><b>Telefono: </b>{{ driver.residence_address_driver }}</b-list-group-item>
        <b-list-group-item><b>Correo electronico: </b>{{ driver.email_driver }}</b-list-group-item>
        <b-list-group-item>
          <a :href="`/storage/cedulas/${driver.file_cc_driver}`" class="btn btn-primary btn-xs" download>Cedula</a>
          <a :href="`/storage/licensetrasn/${driver.file_license}`" class="btn btn-primary btn-xs" download>Licencia</a>
        </b-list-group-item>
      </b-list-group>
    </b-modal>


    <!--============================
      MODAL ARCHIVOS DEL VEHICULO
    ==============================-->
    <b-modal ref="modal-documents" title="Documentos del vehiculoi">
      <b-list-group>
        <b-list-group-item class="d-flex justify-content-between">
          <b>Soat: </b>
          <a :href="`/storage/documents/${documents.soat}`" class="btn btn-primary btn-xs" download>Descargar</a>
        </b-list-group-item>
        <b-list-group-item class="d-flex justify-content-between">
          <b>Contractual: </b>
          <a :href="`/storage/documents/${documents.contractual}`" class="btn btn-primary btn-xs" download>Descargar</a>
        </b-list-group-item>
        <b-list-group-item class="d-flex justify-content-between">
          <b>Extra Contractual: </b>
          <a :href="`/storage/documents/${documents.extra_contractual}`" class="btn btn-primary btn-xs" download>Descargar</a>
        </b-list-group-item>
        <b-list-group-item class="d-flex justify-content-between">
          <b>Tarjeta Operacion: </b>
          <a :href="`/storage/documents/${documents.tarjeta_operacion}`" class="btn btn-primary btn-xs" download>Descargar</a>
        </b-list-group-item>
        <b-list-group-item class="d-flex justify-content-between">
          <b>Tecnomecanica: </b>
          <a :href="`/storage/documents/${documents.tecnomecanica}`" class="btn btn-primary btn-xs"
             download>Descargar</a>
        </b-list-group-item>
      </b-list-group>
    </b-modal>

  </div>
</template>

<script>
export default {
  name: "list",
  created() {
    this.getRequests();
  },
  data() {
    return {
      requests: [],
      columns: [
        {label: "Dueño", field: "owner"},
        {label: "Conductor", field: "driver"},
        {label: "Documentacion", field: "documentations"},
        {label: "Placa", field: "car_plate"},
        {label: "Numero interno", field: "internal_number"},
        {label: "Número chasis", field: "chassis_number"},
        {label: "Numero de motor", field: "engine_number"},
        {label: "Modelo", field: "model"},
        {label: "Marca", field: "brand"},
        {label: "Cilindraje", field: "cylinder"},
        {label: "Color", field: "color"},
        {label: "Clase de auto", field: "auto_type"},
        {label: "Número de puestos", field: "number_seats"},
        {label: "Acciones", field: "actions"},
      ],
      owner: {},
      driver: {},
      documents: {}
    }
  },
  methods: {
    async getRequests() {
      const response = await axios.get('/api/requests');
      this.requests = response.data;
    },
    showModalOwner(data) {
      this.owner = data;
      this.$refs['modal-owner'].show();
    },
    showModalDriver(data) {
      this.driver = data;
      this.$refs['modal-driver'].show();
    },
    showModalDocuments(data) {
      this.documents = data;
      this.$refs['modal-documents'].show();
    },
    showModalApproveRequest(data) {
      this.$bvModal
          .msgBoxConfirm("una vez ejecutada la acción no podra revertir los cambios", {
            title: `¿Está seguro que desea aceptar la solicitud?`,
            size: "sm",
            buttonSize: "sm",
            okVariant: "primary",
            okTitle: "Aceptar",
            cancelTitle: "NO",
            footerClass: "p-2",
            hideHeaderClose: false,
            centered: true
          })
          .then(value => {
            if(value == true)
            {
              this.approveRequest(data).then(response => {
                if(response.data.startsWith('SQLSTATE'))
                {
                  openNotification('Solicitud no aprobada', 'El vehículo o el usuario ya se encuentran registrados', 'danger');
                }else {
                  openNotification('Solicitud aprobada', 'Se ha aprobado la solicitud');
                  this.$router.push({name: 'vehiculos'})
                }
              });
            }
          })
    },
    showModalDelete(data) {
      this.$bvModal
          .msgBoxConfirm("una vez ejecutada la acción no podra revertir los cambios", {
            title: `¿Está seguro que desea aceptar la solicitud?`,
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
            this.deleteRequest(data).then(response => {
              openNotification('Solicitud eliminada', 'Se ha eliminado la solicitud');
              this.getRequests();
            });
          })
    },
    async approveRequest(data) {
      const response = await axios.post('/api/approve-request', data);
      return response
    },
    async deleteRequest(data) {
      const response = await axios.get(`/api/delete-request/delete/${data}`);
      return response
    }
  }
}
</script>

<style scoped>

</style>

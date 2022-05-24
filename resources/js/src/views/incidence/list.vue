<template>
  <div class="main-content">
    <breadcumb :page="'Lista de incidencias'" :folder="'Incidencias'"/>


    <b-card>
      <vue-good-table
          :columns="columns"
          :line-numbers="false"
          :search-options="{
              enabled: true,
              placeholder: 'Buscar en esta tabla'}"
          :pagination-options="{
              enabled: true,
              mode: 'records'}"
          styleClass="tableOne vgt-table"
          :rows="incidences">
        <div slot="table-actions" class="mb-3">

          <b-button class="btn-rounded" variant="primary" @click="showModalCreateIncidence">Registrar incidente
          </b-button>

        </div>

        <template slot="table-row" slot-scope="props">
          <div v-if="props.column.field == 'actions'">

            <a v-if="role == 'ADMIN' || props.row.user_id == user.id" class="clickeable"
               @click="showModalEditForm(props.row)">
              <i class="i-Eraser-2 text-25 text-success mr-2"></i>
              {{ props.row.button }}
            </a>
            <a v-if="role == 'ADMIN'" class="clickeable" @click="showModalDeleteForm(props.row.id)">
              <i class="i-Close-Window text-25 text-danger"></i>
              {{ props.row.button }}
            </a>
          </div>
        </template>
      </vue-good-table>
    </b-card>

    <b-modal centered size="lg" ref="modal-form-incidence" title="Formulario incidencia" hide-footer>
      <form-incidence :incidence="incidence" @save="save"/>
    </b-modal>


  </div>
</template>

<script>
import formIncidence from './formIncidence'
import {mapActions, mapState} from "vuex";
import {mapValues} from "lodash";

export default {
  name: "list",
  components: {formIncidence},
  created() {
    if (!this.viewPermissions()) {
      this.$router.push({name: 'not-found'});
    }

    this.getInsidences();
  },
  data() {
    return {
      incidence: {
        type: '',
        incidence_level: '',
        description: '',
        date: '',
        estimated_cost: '',
        vehicle_id: ''
      },
      columns: [
        {label: "Tipo de incidencia", field: "type"},
        {label: "Nivel de incidencia", field: "incidence_level"},
        {label: "Fecha de incidente", field: "date"},
        {label: "Costo estimado", field: "estimated_cost"},
        {label: "Detalle", field: "description"},
        {label: "Registrado por", field: "user.full_name"},
        {label: "Vehiculo", field: "vehicle.car_plate"},
        {label: "Acciones", field: "actions"},
      ],
    }
  },
  methods: {
    ...mapActions('insidence', ['createIncidence', 'updateIncidence', 'getInsidences', 'deleteIncidence']),
    showModalCreateIncidence() {
      this.incidence = mapValues(this.incidence, () => null);
      this.$refs['modal-form-incidence'].show();
    },
    save(data) {
      if (data.id) {
        this.updateIncidence(data).then(response => {
          openNotification();
          this.$refs['modal-form-incidence'].hide();
        })
      } else {
        this.createIncidence(data).then(response => {
          openNotification();
          this.$refs['modal-form-incidence'].hide();
        })
      }

    },
    showModalEditForm(incidence) {
      this.incidence = incidence;
      this.$refs['modal-form-incidence'].show();
    },
    showModalDeleteForm(incidenceId) {
      this.$bvModal
          .msgBoxConfirm('¿Está seguro que desea eliminar la incidencia?', {
            size: "sm",
            buttonSize: "sm",
            okVariant: "danger",
            okTitle: "Eliminar",
            cancelTitle: "No",
            cancelVariant: "danger",
            footerClass: "p-2",
            hideHeaderClose: false,
            centered: true
          })
          .then(value => {
            if (!value) return;
            this.deleteIncidence(incidenceId).then(response => {
              openNotification('Eliminado', 'Los datos se han eliminado correctamente');
            })

          })
    },
    viewPermissions() {
      return this.abilities.includes('*') || this.abilities.includes('incidencias');
    },
  },
  computed: {
    ...mapState('insidence', ['incidences']),
    ...mapState('auth', ['role', 'user', 'abilities'])
  }
}
</script>

<style scoped>

</style>

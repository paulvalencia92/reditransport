<template>
  <div class="main-content">

    <b-row>

      <b-col md="8" offset-md="2">
        <b-overlay :show="submitStatus" rounded="sm">
          <b-card title="Registrar contrato">
            <form-contrato @save="save" :vehicle="vehicle"/>
          </b-card>
        </b-overlay>
      </b-col>

    </b-row>


  </div>
</template>

<script>
import formContrato from './form'
import {mapActions, mapMutations, mapState} from "vuex";

export default {
  name: "create-contract",
  components: {formContrato},
  created() {
    if (!this.adminPermissions()) {
      this.$router.push({name: 'not-found'});
    }
    this.CLEAR_ERRORS();
    this.CHANGE_SUBMIT_STATUS(false)
    this.getVehiclesDocuments();
  },
  data() {
    return {
      vehicle: {
        number: '',
        department_id: '',
        municipality_id: '',
        start_date: '',
        end_date: '',
        contractor_id: '',
        object: '',
        incomes: '',
        details: '',
        user_id: '',
        user_second_id: '',
        user_third_id: '',
        user_four_id: '',
        vehicle_id: ''
      },
    }
  },
  methods: {
    ...mapActions('contracts', ['createContract']),
    ...mapMutations(['CHANGE_SUBMIT_STATUS', 'CLEAR_ERRORS']),
    save(vehicle) {
      this.createContract(vehicle)
          .then(response => {
            openNotification();
            this.$router.push({name: 'contratos'})
          }).catch(respose => {
        this.CHANGE_SUBMIT_STATUS(false);
        openNotification('Error', 'No se pudieron guardar los datos', 'danger')
      })
    },
    adminPermissions() {
      return this.abilities.includes('*') || this.abilities.includes('contratos-administracion');
    },
  },
  computed: {
    ...mapState(['submitStatus']),
  }
}
</script>

<style scoped>

</style>

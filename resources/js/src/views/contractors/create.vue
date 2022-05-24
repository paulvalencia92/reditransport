<template>
  <div class="main-content">

    <b-row>
      <b-col md="8" offset-md="2">
        <b-overlay :show="submitStatus" rounded="sm">
          <b-card title="Registrar contratante">
            <form-contractor @save="save" :vehicle="vehicle"/>
          </b-card>
        </b-overlay>
      </b-col>
    </b-row>

  </div>
</template>

<script>
import formContractor from './form'
import {mapActions, mapMutations, mapState} from "vuex";

export default {
  name: "create-contractor",
  components: {formContractor},
  created() {
    if (!this.viewPermissions()) {
      this.$router.push({name: 'not-found'});
    }
  },
  data() {
    return {
      vehicle: {
        nit: '',
        contractor: '',
        adress: '',
        phone: '',
        email: '',
        web: '',
        c_name: '',
        c_last_name: '',
        c_cc: '',
        c_adress: '',
        c_phone: ''
      },
    }
  },
  methods: {
    ...mapActions('contractors', ['createContractor']),
    ...mapMutations(['CHANGE_SUBMIT_STATUS']),
    save(vehicle) {
      this.createContractor(vehicle)
          .then(response => {
            openNotification();
            this.$router.push({name: 'contratantes'})
          }).catch(respose => {
        this.CHANGE_SUBMIT_STATUS(false);
        openNotification('Error', 'No se pudieron guardar los datos', 'danger')
      })
    },
    viewPermissions() {
      return this.abilities.includes('*') || this.abilities.includes('contratantes-administracion');
    },
  },
  computed: {
    ...mapState(['submitStatus'])
  }
}
</script>

<style scoped>

</style>

<template>
  <div class="main-content">
    <breadcumb :page="'Crear afiliado'" :folder="'afiliados'"/>
    <b-card title="Crear conductor">
      <form-affiliate @save="save" :driver-draft="driver"/>
    </b-card>
  </div>
</template>

<script>

import formAffiliate from './formAffiliate'
import {mapActions, mapMutations} from "vuex";

export default {
  name: "create",
  metaInfo: {
    title: "Crear conductor"
  },
  components: {formAffiliate},
  created() {
    this.CHANGE_SUBMIT_STATUS(false);
    this.CLEAR_ERRORS()
  },
  data() {
    return {
      driver: {
        names: '',
        surnames: '',
        id_type_id: '',
        department_id: '',
        identification_number: '',
        municipality_id: '',
        date_of_birth: '',
        sex: '',
        residence_address: '',
        phone_number: '',
        email: '',
      },
    };
  },
  methods: {
    ...mapActions('user', ['createUser', 'updateUser']),
    ...mapMutations(['CHANGE_SUBMIT_STATUS', 'CLEAR_ERRORS']),
    save(driver) {
      this.CHANGE_SUBMIT_STATUS(true);
      this.createUser(driver)
          .then(response => {
            openNotification();
            this.$router.push({name: 'lista-afiliados'})
          }).catch(respose => {
        openNotification('Error', 'No se pudieron guardar los datos', 'danger')
      }).finally(() => {
        this.CHANGE_SUBMIT_STATUS(false);
      })
    }
  }
};
</script>
<style>
.spinner.sm {
  height: 2em;
  width: 2em;
}
</style>

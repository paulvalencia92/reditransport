<template>
  <div class="main-content">
    <breadcumb :page="'Registrar pago'" :folder="'Cartera'"/>
    <b-card title="Crear cobro">
      <form-purshe :purshe="purshe" @save="save"></form-purshe>
    </b-card>
  </div>
</template>

<script>
import formPurshe from "./formPurshe";
import {mapActions} from "vuex";

export default {
  name: "createPurshe",
  components: {formPurshe},
  data() {
    return {
      purshe: {
        user_id: null,
        vehicle_id: null,
        detail: null,
        day: null,
        payment_date: null,
        cost: null,
        type: null,
        months: [],
      }
    }
  },

  methods: {
    ...mapActions('purshe', ['createPurshe']),
    save(data) {
      this.createPurshe(data).then(response => {
        openNotification();
        this.$router.push({name: 'lista-cartera'});
      })
    }
  }
}
</script>

<style scoped>

</style>

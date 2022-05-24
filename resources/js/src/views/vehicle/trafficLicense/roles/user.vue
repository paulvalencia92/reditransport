<template>
  <section>
<!--    <div class="text-right" v-if="!myLicense.id">-->
<!--      <b-button variant="primary" size="lg" @click="showModalForm">Crear</b-button>-->
<!--    </div>-->

    <b-row>
      <b-col md="8" v-for="item in myLicense" :key="item.id">
        <b-card :title="`Licencia conductor ${item.user.full_name}`">
          <p>Vencimiento {{ item.expiration_date }}</p>
          <a :href="`/storage/licensetrasn/${item.file}`" class="btn btn-primary btn-xs" download>Descargar</a>
        </b-card>
      </b-col>
    </b-row>


    <b-modal centered ref="modal-licence" title="Registrar licencia" hide-footer>
      <formLicense @save="save"></formLicense>
    </b-modal>

  </section>

</template>

<script>
import formLicense from './../formLicense'
import {mapActions, mapMutations, mapState} from "vuex";

export default {
  name: "user",
  components: {formLicense},
  created() {
    this.getMyLicense();
  },
  computed: {
    ...mapState('licenseTrans', ['myLicense']),
  },
  methods: {
    ...mapActions('licenseTrans', ['createLicense','getMyLicense']),
    showModalForm() {
      this.$refs['modal-licence'].show();
    },
    save(data) {
      this.createLicense(data).then(response => {
        openNotification();
        this.$refs['modal-licence'].hide();
      })
    }
  }

}
</script>

<style scoped>

</style>

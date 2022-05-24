<template>
  <b-table :fields="fields" :items="users" striped hover responsive>
    <template v-slot:cell(actions)="data">
      <b-button size="sm" variant="danger" @click="showModalDeleteLinkTouser(data.item.id)">
        Eliminar
      </b-button>
    </template>
  </b-table>
</template>

<script>
import axios from "axios";
import {mapActions} from "vuex";

export default {
  name: "tableUsersLinked",
  props: ['users', 'idVehicle'],
  data() {
    return {
      fields: [
        {key: 'full_name', label: 'Nombre del conductor'},
        {key: 'pivot.created_at', label: 'Fecha vinculacion'},
        {key: 'actions', label: 'Acciones'},
      ],
    }
  },
  methods: {
    ...mapActions('vehicle', ['getVehicles']),
    showModalDeleteLinkTouser(idUser) {
      this.$bvModal
          .msgBoxConfirm("¿Está seguro que desea eliminar la vinculacion del usuario con el vehiculo?", {
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
            this.deleteLinktoUser(idUser).then(response => {
              if (response == 'user unlinked successfully') {
                openNotification('Usuario desvinculado corrrectamente', 'Se ha desvinculado el usuario del Vehiculo');
                this.getVehicles();
                this.$bvModal.hide('modal-users');
              }
            });
          })
    },
    async deleteLinktoUser(idUser) {
      const response = await axios.delete(`/api/vehicles/${this.idVehicle}/unlink-user`, idUser)
      return Promise.resolve(response.data);
    }
  }
}
</script>

<style scoped>

</style>

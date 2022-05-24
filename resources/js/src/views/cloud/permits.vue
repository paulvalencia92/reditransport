<template>
  <b-tabs>
    <b-tabs content-class="mt-3">
      <!--============================
       FORMULARIO DE PERMISOS
      ==============================-->
      <b-tab title="Asignar permisos" @click.prevent="getUsersWithoutPermits(folder.id)">
        <b-form @submit.prevent="submit">

          <b-form-group label="Carpeta">
            <b-form-input :value="folder.name" disabled></b-form-input>
          </b-form-group>

          <b-form-group label="Usuarios">
            <b-form-select v-model="payload.user_id"
                           text-field="names"
                           value-field="id"
                           :options="users">
            </b-form-select>
          </b-form-group>
          <div class="text-right mt-4">
            <b-button :disabled="!payload.user_id" type="submit" variant="primary" size="md">Asignar permisos</b-button>
          </div>
        </b-form>
      </b-tab>
      <!--============================
        LISTA DE USUARIOS CON PERMISOS
      ==============================-->
      <b-tab title="Usuarios" @click.prevent="getUsersWithPermits(folder.id)">
        <b-table :fields="fields" :items="users">
          <template v-slot:cell(actions)="data">
            <b-button @click="showModalDeletePermit(data.item.id)" size="xs" variant="danger">
              <i class="i-Folder-Trash"></i>
            </b-button>
          </template>
        </b-table>
      </b-tab>
    </b-tabs>
  </b-tabs>
</template>

<script>
import {mapActions, mapState} from "vuex";

export default {
  name: "permits",
  props: ['folder'],
  created() {
    this.getUsersWithoutPermits(this.folder.id);
  },
  data() {
    return {
      payload: {
        folder_id: '',
        user_id: ''
      },
      fields: [
        {label: 'Usuarios', key: 'names'},
        {label: 'Acciones', key: 'actions'},
      ]
    }
  },
  methods: {
    ...mapActions('cloud', ['getUsersWithoutPermits', 'getUsersWithPermits', 'assignPermits','removePermission']),
    submit() {
      this.payload.folder_id = this.folder.id;
      this.assignPermits(this.payload).then(status => {
        if (status == 201) {
          openNotification();
          this.$emit('assigned', true);
        }
      })
    },
    showModalDeletePermit(userId) {
      this.$bvModal
          .msgBoxConfirm("una vez ejecutada la acción no podra recuperar la información", {
            title: `¿Está seguro de eliminar el permiso al usuario?`,
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
              this.payload.folder_id = this.folder.id;
              this.payload.user_id = userId;
              this.removePermission(this.payload).then(response => {
                if (response == 'deleted') {
                  openNotification('Permiso eliminado corrrectamente', 'Se ha eliminado el acceso a la carpeta');
                  this.$emit('permitDeleted', true);
                }
              });
            }
          })
    }
  },
  computed: {
    ...mapState('cloud', ['users'])
  }

}
</script>

<style scoped>

</style>

<template>
  <div class="main-content">
    <breadcumb :page="'Nube'" :folder="'Carpetas'"/>
    <div class="text-right mb-5">
      <b-button @click="showModalFormFolfer" variant="primary" size="md">Crear carpeta</b-button>
    </div>

    <b-row>
      <b-col v-if="role == 'ADMIN' || foldersId.includes(folder.id)" @dblclick="goToFolder(folder.id)"
             v-for="folder in folders" :key="folder.id" md="2">
        <div class="text-center clickable">
          <img width="100" src="~@/assets/images/folder.png" alt="folder">
          <p class="text-muted lead m-0">{{ folder.name }}</p>
          <b-dropdown v-if="role == 'ADMIN'" id="dropdown-1" text="Acciones" variant="link" class="m-md-2">
            <b-dropdown-item @click="showModalEditFolfer(folder)">Editar</b-dropdown-item>
            <b-dropdown-item @click="showModalDeleteFolder(folder.id)">Eliminar</b-dropdown-item>
            <b-dropdown-item @click="showModalPermits(folder)">Permisos</b-dropdown-item>
          </b-dropdown>
        </div>
      </b-col>
    </b-row>


    <!--============================
       FORM FOLDER
    ==============================-->
    <b-modal ref="form-create-folder" title="Crear carpeta" hide-footer>
      <form-folder :folder="folder" @save="save"></form-folder>
    </b-modal>

    <!--============================
        MODAL PERMISOS
    ==============================-->
    <b-modal ref="modal-permits" hide-footer hide-header>
      <permits @assigned="assigned" @permitDeleted="permitDeleted" :folder="currentFolder"></permits>
    </b-modal>


  </div>
</template>

<script>
import formFolder from './formFolder'
import {mapActions, mapState} from "vuex";
import mapValues from "lodash/mapValues";
import permits from "./permits";

export default {
  name: "indexCloud",
  components: {formFolder, permits},
  created() {
    this.getMiFolders().then(response => {
      this.getFolders();
    })
  },
  data() {
    return {
      folder: {
        name: ''
      },
      currentFolder: ''
    }
  },
  methods: {
    ...mapActions('cloud', ['createFolder', 'getFolders', 'updateFolder', 'deleteFolder', 'getMiFolders']),
    showModalFormFolfer() {
      this.folder = mapValues(this.folder, () => '');
      this.$refs['form-create-folder'].show();
    },
    showModalEditFolfer(folder) {
      this.folder = clone(folder);
      this.$refs['form-create-folder'].show();
    },
    save(data) {
      if (data.id) {
        this.updateFolder(data).then(response => {
          this.$refs['form-create-folder'].hide();
          openNotification();
        });
      } else {
        this.createFolder(data).then(response => {
          this.$refs['form-create-folder'].hide();
          openNotification();
        });
      }
    },
    goToFolder(folderId) {
      this.$router.push({name: 'folder-detail', params: {id: folderId}})
    },
    showModalDeleteFolder(folderId) {
      this.$bvModal
          .msgBoxConfirm("una vez ejecutada la acción no podra recuperar la información", {
            title: `¿Está seguro de eliminar la carpeta?`,
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
              this.deleteFolder(folderId).then(response => {
                if (response == 'deleted') {
                  openNotification('Carpeta eliminada corrrectamente', 'Se ha eliminado la carpeta');
                }
              });
            }
          })
    },
    showModalPermits(folder) {
      this.currentFolder = folder;
      this.$refs['modal-permits'].show();
    },
    assigned() {
      this.$refs['modal-permits'].hide();
    },
    permitDeleted() {
      this.$refs['modal-permits'].hide();
    }
  },
  computed: {
    ...mapState('auth', ['role']),
    ...mapState('cloud', ['folders', 'foldersId'])
  }
}
</script>

<style scoped>
.clickable {
  cursor: pointer;
}
</style>

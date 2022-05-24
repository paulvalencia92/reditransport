<template>
  <div class="main-content">
    <breadcumb :page="'Nube'" :folder="currentFolder.name"/>
    <div class="text-right">
      <b-dropdown id="dropdown-1" text="Acciones" variant="primary" class="m-md-2">
        <b-dropdown-item @click="showModalFormFolfer">Crear carpeta</b-dropdown-item>
        <b-dropdown-item @click="showModalFormFile">Añadir archivo</b-dropdown-item>
      </b-dropdown>
      <b-button variant="primary" @click="goToBack">Volver</b-button>
    </div>

    <b-row>
      <b-col @dblclick="changeFolder(folder.id)" v-for="folder in currentFolder.folders" :key="folder.id" md="2">
        <div class="text-center clickable">
          <img width="100" src="~@/assets/images/folder.png" alt="folder">
          <p class="text-muted lead m-0">{{ folder.name }}</p>
          <b-dropdown v-if="role == 'ADMIN'" id="dropdown-1" text="Acciones" variant="link" class="m-md-2">
            <b-dropdown-item @click="showModalEditFolfer(folder)">Editar</b-dropdown-item>
            <b-dropdown-item @click="showModalDeleteFolder(folder.id)">Eliminar</b-dropdown-item>
            <b-dropdown-item @click="">Asignar permisos</b-dropdown-item>
          </b-dropdown>
        </div>
      </b-col>
      <b-col class="text-center clickable" v-for="file in currentFolder.files" :key="file.id" md="2">
        <a :href="`/storage/folders/folder-${id}/${file.url}`" download>
          <img width="100" src="~@/assets/images/document.svg" alt="folder">
          <p class="text-muted lead">{{ file.url | extension }}</p>
        </a>
      </b-col>
    </b-row>


    <!--============================
   FORM FOLDER
   ==============================-->
    <b-modal ref="form-create-folder" title="Carpeta" hide-footer>
      <form-folder :folder="folder" @save="save"></form-folder>
    </b-modal>

    <!--============================
      FORM FILE
  ==============================-->
    <b-modal ref="form-create-file" title="Guardar archivos" hide-footer>
      <form-file @saveFile="saveFile"></form-file>
    </b-modal>

  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import formFolder from './formFolder'
import formFile from './formFile'
import mapValues from "lodash/mapValues";

export default {
  name: "showFolder",
  components: {formFolder, formFile},
  props: ['id'],
  created() {
    this.show(this.id);
  },
  data() {
    return {
      folder: {
        name: ''
      }
    }
  },
  methods: {
    ...mapActions('cloud', ['createFolder', 'addFile', 'deleteFolder', 'updateFolder']),
    ...mapActions('cloud', ['show']),
    showModalFormFolfer() {
      this.folder = mapValues(this.folder, () => '');
      this.$refs['form-create-folder'].show();
    },
    showModalEditFolfer(folder) {
      this.folder = clone(folder);
      this.$refs['form-create-folder'].show();
    },
    showModalFormFile() {
      this.$refs['form-create-file'].show();
    },
    save(data) {
      if (data.id) {
        this.updateFolder(data).then(response => {
          this.show(this.id);
          this.$refs['form-create-folder'].hide();
          openNotification();
        });
      } else {
        data.folder_id = this.id;
        this.createFolder(data).then(response => {
          this.show(this.id);
          this.$refs['form-create-folder'].hide();
          openNotification();
        });
      }

    },
    saveFile(data) {
      const formData = new FormData();
      formData.append('id', this.id);
      formData.append('file', data);
      this.addFile(formData).then(response => {
        this.show(this.id);
        this.$refs['form-create-file'].hide();
        openNotification();
      });

    },
    changeFolder(folderId) {
      this.$router.push({params: {id: folderId}})
      this.show(folderId);
    },
    goToBack() {
      this.$router.back();
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
                  this.show(this.id);
                  openNotification('Carpeta eliminada corrrectamente', 'Se ha eliminado la carpeta');
                }
              });
            }
          })
    },
  },
  computed: {
    ...mapState('cloud', ['currentFolder']),
    ...mapState('auth', ['role'])
  },
  filters: {
    extension: function (value) {
      let data = value;
      let myArray = data.split(".");
      let extension = myArray[myArray.length - 1];
      return extension;
    }
  },
  watch: {
    id: function (val) {
      this.show(val)
    }
  }
}
</script>

<style scoped>

</style>

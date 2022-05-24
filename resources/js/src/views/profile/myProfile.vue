<template>
  <div class="main-content">
    <breadcumb :page="'Usuario'" :folder="'afiliados'"/>
    <b-row>
      <b-col md="8">
        <b-card>
          <b-tabs content-class="mt-3">
            <b-tab title="Información" active>
              <div class="row">
                <div class="col-md-6 text-center">
                  <img :src="'/storage/profilephoto/'+user.photo" alt="" style="max-width:50%" class="mb-2">
                  <b-form-file
                      v-model="file"
                      :state="Boolean(file)"
                      placeholder="Selecciona una foto o arrastrala hasta aquí"
                      drop-placeholder="Sueltala aquí"
                  ></b-form-file>
                  <b-btn variant="primary btn-rounded mt-2" @click="saveImage" :disabled="loading == true">
                    Actualizar foto
                  </b-btn>
                </div>
                <div class="col-md-6">
                  <p><b>Nombre: </b>{{ user.full_name }} </p>
                  <p><b>Rol: </b>{{ user.role }}</p>
                  <p><b>Tipo de identificacion: </b>{{ user.id_type.name }} </p>
                  <p><b>Identificacion: </b>{{ user.identification_number }} </p>
                  <p><b>Fecha de nacimiento: </b>{{ user.date_of_birth }} </p>
                  <p><b>Sexo: </b>{{ user.sex }} </p>
                  <p><b>Direccion residencial: </b>{{ user.residence_address }} </p>
                  <p><b>Telefono: </b>{{ user.phone_number }} </p>
                  <p><b>Correo electronico: </b>{{ user.email }} </p>
                  <p><b>Departamento: </b>{{ user.department.name }} </p>
                  <p><b>Municipio: </b>{{ user.municipality.name }} </p>
                </div>
              </div>
            </b-tab>
            <b-tab title="Cambiar contraseña">
              <form-change-password :user="user"></form-change-password>
            </b-tab>
          </b-tabs>
        </b-card>

      </b-col>
    </b-row>

  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import formChangePassword from "./formChangePassword";
export default {
  name: "show",
  props: ['id'],
  data (){
    return {
      file: null,
      loading: false
    }
  },
  components: {
    formChangePassword
  },
  methods: {
    ...mapActions('user', ['updatePhoto']),
    findUser() {
      this.user = this.users.find(user => user.id == this.id);
    },
    saveImage() {
      this.loading = true
      const formData = new FormData();
      formData.append('id', this.user.id);
      formData.append('file', this.file);
      
      this.updatePhoto(formData).then(() => {
        openNotification('Imagen de perfil actualizada correctamente', 'Cierra e inicia sesión para verla', 'success')
        this.loading = false
      })
    }
  },
  computed: {
    ...mapState('auth', ['user'])
  }
}
</script>

<style scoped>

</style>

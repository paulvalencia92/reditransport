<template>
  <div class="main-content">
    <breadcumb :page="'Usuario'" :folder="'afiliados'"/>
    <b-row>
      <b-col md="8">
        <b-card>
          <b-tabs content-class="mt-3">
            <b-tab title="Información" active>
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
            </b-tab>
            <b-tab title="Vehiculos">
              <vehicles :vehicles="user.vehicles"></vehicles>
            </b-tab>

            <template v-if="abilities.includes('*') || abilities.includes('afiliados-administrar')">
              <b-tab title="Cambiar contraseña">
                <form-change-password :user="user"></form-change-password>
              </b-tab>
              <b-tab title="Facturacion">
                <form-fact :user="user"></form-fact>
              </b-tab>
            </template>

          </b-tabs>
        </b-card>

      </b-col>
    </b-row>

  </div>
</template>

<script>
import {mapState} from "vuex";
import formChangePassword from "./formChangePassword";
import formFact from "./formFact";
import vehicles from "./vehicles";

export default {
  name: "show",
  components: {formChangePassword, vehicles, formFact},
  props: ['id'],
  created() {
    this.findUser();
  },
  data() {
    return {
      user: {}
    }
  },
  methods: {
    findUser() {
      this.user = this.users.find(user => user.id == this.id);
    }
  },
  computed: {
    ...mapState('user', ['users']),
    ...mapState('auth', ['abilities'])
  }
}
</script>

<style scoped>

</style>

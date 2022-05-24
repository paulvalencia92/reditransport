<template>
  <div>
    <b-card title="Registrarse como empresa" header-bg-variant="success">
      <formCreate/>
    </b-card>

    <b-card title="Software" class="mt-4" v-if="user.is_created_dian">
      <formSoftware/>
    </b-card>

    <b-card title="Certificado Digital" class="mt-4" v-if="user.is_created_dian">
      <formCertificate/>
    </b-card>

    <b-card title="Resolucion de Facturacion" class="mt-4" v-if="user.is_created_dian">
      <formResolution/>
    </b-card>

  </div>
</template>

<script>
import formCreate from "./forms/formCreate";
import formSoftware from "./forms/formSoftware";
import formCertificate from "./forms/formCertificate";
import formResolution from "./forms/formResolution";
import {mapState} from "vuex";

export default {
  name: "emplly",
  created() {
    if (!this.viewPermissions()) {
      this.$router.push({name: 'not-found'});
    }
  },
  components: {
    formCreate,
    formSoftware,
    formCertificate,
    formResolution
  },
  methods: {
    viewPermissions() {
      return this.abilities.includes('*') || this.abilities.includes('configuracion-empresa');
    },
  },
  computed: {
    ...mapState(["errorMessages", "submitStatus"]),
    ...mapState('auth', ['user','abilities'])
  }
}
</script>

<style scoped>

</style>

<template>
  <div class="main-content">
    <breadcumb :page="'Lista de inventario entrega vehiculos'" :folder="'afiliados'"/>

    <b-row>
      <b-col md="12" class="text-right">
        <router-link :to="{name:'registrar-inventario-vehiculos'}" class="btn btn-link">
          Registrar entrega vehiculo
        </router-link>
      </b-col>
    </b-row>

  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "list",
  data() {
    return {

    }
  },
}
</script>

<style scoped>

</style>

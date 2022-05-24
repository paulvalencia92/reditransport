<template>
  <div class="main-content">
    <breadcumb :page="'Reporte de vehiculos'" :folder="'reportes'"/>
    <search-form-vehicle></search-form-vehicle>
    <search-list></search-list>
  </div>
</template>

<script>

import searchFormVehicle from './searchFormVehicle';
import searchList from "./searchList";

export default {
  name: "vehicles-report",
  components: {searchFormVehicle, searchList},
  metaInfo: {
    title: "Reporte de vehiculos"
  },
}
</script>

<style scoped>

</style>

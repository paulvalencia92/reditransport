<template>
  <div>
    <div v-if="vehicles.length">
      <b-list-group v-for="vehicle in vehicles" :key="vehicle.id">
        <b-list-group-item class="d-flex justify-content-between align-items-center">
          <p class="m-0"><b>Placa: </b>{{ vehicle.car_plate }} - <b>Modelo:</b> {{ vehicle.model }}</p>
          <b-button variant="outline-primary" size="sm" @click="goToVehicleDetail(vehicle.id)">
            <i class="i-Eye text-25"></i>
          </b-button>
        </b-list-group-item>
      </b-list-group>
    </div>
    <b-alert v-else show variant="warning">
      Este usuario no tiene vehiculos asociados
    </b-alert>
  </div>

</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "vehicles",
  props: ['vehicles'],
  methods: {
    ...mapActions('vehicle', ['getVehicles']),
    goToVehicleDetail(vehicleId) {
      this.getVehicles().then(response => {
        this.$router.push({name: 'detalle-vehiculo', params: {id: vehicleId}})
      })
    }
  }
}
</script>

<style scoped>

</style>

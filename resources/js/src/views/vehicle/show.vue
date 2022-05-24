<template>
  <div class="main-content">
    <breadcumb :page="'Usuario'" :folder="'afiliados'"/>
    <b-row>
      <b-col md="8">
        <b-card>
          <b-tabs content-class="mt-3">
            <b-tab title="Información" active>
              <p><b>Placa: </b>{{ vehicle.car_plate }} </p>
              <p><b>Sucursal o convenio: </b>{{ vehicle.branch_or_agreement }}</p>
              <p><b>Ciudad radicado: </b>{{ vehicle.settled_city }} </p>
              <p><b>Vinculación: </b>{{ vehicle.date_association_company }} </p>
              <p><b>Departamento: </b>{{ vehicle.department.name }} </p>
              <p><b>Municipio: </b>{{ vehicle.municipality.name }} </p>
              <p><b>Número interno: </b>{{ vehicle.internal_number }} </p>
              <p><b>Fecha de matricula: </b>{{ vehicle.enrollment_date }} </p>
              <p><b>Número chasis: </b>{{ vehicle.chassis_number }} </p>
              <p><b>Número motor: </b>{{ vehicle.engine_number }} </p>
              <p><b>Modelo: </b>{{ vehicle.model }} </p>
              <p><b>Marca: </b>{{ vehicle.brand }} </p>
              <p><b>Cilindraje: </b>{{ vehicle.cylinder }} </p>
              <p><b>Color: </b>{{ vehicle.color }} </p>
              <p><b>Numero de puestos: </b>{{ vehicle.number_seats }} </p>
            </b-tab>

            <b-tab title="Usuarios asociados">
              <div v-if="vehicle.users.length">
                <b-list-group v-for="user in vehicle.users" :key="vehicle.id">
                  <b-list-group-item class="d-flex justify-content-between align-items-center">
                    <p class="m-0"><b>Nombre: </b>{{ user.full_name }} - <b>Telefono:</b> {{ user.phone_number }}</p>
                    <b-button variant="outline-primary" size="sm" @click="goToUserDetail(user.id)">
                      <i class="i-Eye text-25"></i>
                    </b-button>
                  </b-list-group-item>
                </b-list-group>
              </div>
              <b-alert v-else show variant="warning">
                Este vehiculo no tiene usuarios asociados
              </b-alert>
            </b-tab>
          </b-tabs>
        </b-card>
      </b-col>
    </b-row>

  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";

export default {
  name: "show",
  props: ['id'],
  created() {
    this.findVehicles();
  },
  data() {
    return {
      vehicle: {}
    }
  },
  methods: {
    ...mapActions('user', ['getUsers']),
    findVehicles() {
      this.vehicle = this.vehicles.find(vehicle => vehicle.id == this.id);
    },
    goToUserDetail(userId) {
      this.getUsers().then(response => {
        this.$router.push({name: 'detalle-afiliado', params: {id: userId}})
      })
    }
  },
  computed: {
    ...mapState('vehicle', ['vehicles'])
  }
}
</script>

<style scoped>

</style>
